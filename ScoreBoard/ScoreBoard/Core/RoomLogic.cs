﻿using System;
using System.Linq;
using System.Runtime.Caching;
using ScoreBoard.FluentValidations;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Exceptions;
using System.Web;

namespace ScoreBoard.Core
{
    public class RoomLogic
    {
        private readonly CacheItemPolicy _cacheItemPolicy = new CacheItemPolicy
        {
            SlidingExpiration = new TimeSpan(1, 0, 0)
        };
        private readonly MemoryCache _roomList;
        public RoomLogic(MemoryCache roomList)
        {
            _roomList = roomList;
        }

        public void ModifyRoom(RoomInfo roomInfo, Action callBackAction)
        {
            try
            {
                var serviceRoom = GetRoomById(roomInfo.RoomId, false);
                if (HttpContext.Current.User.Identity.Name != serviceRoom.RoomOwnerOpenId)
                {
                    throw new AjaxException("只有房主可以编辑房间信息");
                }
                if (serviceRoom.PlayerList.Count > roomInfo.PlayerCountLimit)
                {
                    throw new AjaxException("参与人数不可小于当前房间人数");
                }
                var isNameChanged = serviceRoom.RoomName != roomInfo.RoomName;
                if (isNameChanged && IsExistRoom(roomInfo.RoomName, false))
                {
                    throw new AjaxException($"已存在名为[{roomInfo.RoomName}]的房间,请更换房间名称");
                }
                else
                {
                    new RoomInfoValidation().OkOrThrow(roomInfo);
                    serviceRoom.RoomName = roomInfo.RoomName;
                    serviceRoom.CountingMaxValue = roomInfo.CountingMaxValue;
                    serviceRoom.PlayerCountLimit = roomInfo.PlayerCountLimit;
                    serviceRoom.RoomPwd = roomInfo.RoomPwd;
                    serviceRoom.UpdatePlayerCountingMaxValue();
                }
            }
            finally
            {
                callBackAction();
            }
        }

        public void OpenNewRoom(RoomInfo roomInfo, UserInfo ownerInfo)
        {
            roomInfo.RoomOwnerOpenId = ownerInfo.OpenId;
            new RoomInfoValidation().OkOrThrow(roomInfo);
            new UserInfoValidation().OkOrThrow(ownerInfo);
            if (IsExistRoom(roomInfo.RoomName, false))
            {
                throw new AjaxException($"已存在名为[{roomInfo.RoomName}]的房间,请更换房间名称");
            }
            else
            {
                roomInfo.PlayerList.Add(new PlayerInfo(roomInfo.CountingMaxValue)
                {
                    OpenId = ownerInfo.OpenId,
                    Username = ownerInfo.Username,
                    PicUrl = ownerInfo.PicUrl,
                });
                _roomList.Add(roomInfo.RoomId.ToString(), roomInfo, _cacheItemPolicy);
            }
        }
        public bool IsExistRoom(Guid roomId, bool throwError = true)
        {
            var isExist = GetRoomById(roomId, true) != null;
            if (throwError && !isExist)
            {
                throw new AjaxException("房间不存在");
            }
            else
            {
                return isExist;
            }
        }
        public RoomInfo GetRoomByName(string roomName)
        {
            IsExistRoom(roomName);
            return _roomList.SingleOrDefault(i => ((RoomInfo)i.Value).RoomName.Equals(roomName)).Value as RoomInfo;
        }
        public bool IsExistRoom(string roomName, bool throwError = true)
        {
            if (string.IsNullOrWhiteSpace(roomName))
            {
                throw new AjaxException("房间名称不能为空");
            }
            var room = _roomList.SingleOrDefault(i => ((RoomInfo)i.Value).RoomName.Equals(roomName)).Value as RoomInfo;
            var isExist = room != null;
            if (throwError && !isExist)
            {
                throw new AjaxException("房间名称不存在");
            }
            else
            {
                return isExist;
            }
        }

        public RoomInfo GetRoomById(Guid roomId, bool canNull)
        {
            var isExist = _roomList.Contains(roomId.ToString());
            if (!canNull && !isExist)
            {
                throw new AjaxException("房间ID不存在");
            }
            else
            {
                return _roomList[roomId.ToString()] as RoomInfo;
            }
        }

        public bool ExitRoom(Guid roomId, string openId)
        {
            var roomInfo = GetRoomById(roomId, false);
            var player = roomInfo.PlayerList.SingleOrDefault(i => i.OpenId == openId);
            if (player != null)
            {
                roomInfo.PlayerList.Remove(player);
            }
            if (!roomInfo.PlayerList.Any())
            {
                _roomList.Remove(roomId.ToString());
                return false;
            }
            else
            {
                return true;
            }
        }
        public bool KickUserOut(Guid roomId, string openId)
        {
            var roomInfo = GetRoomById(roomId, false);
            if (HttpContext.Current.User.Identity.Name != roomInfo.RoomOwnerOpenId)
            {
                throw new AjaxException("只有房主可以踢人");
            }
            var player = roomInfo.PlayerList.SingleOrDefault(i => i.OpenId == openId);
            if (player != null)
            {
                roomInfo.PlayerList.Remove(player);
            }
            if (!roomInfo.PlayerList.Any())
            {
                _roomList.Remove(roomId.ToString());
                return false;
            }
            else
            {
                return true;
            }
        }

        public Guid PlayerJoinRoom(string roomName, string roomPwd, UserInfo playerInfo)
        {
            var roomInfo = GetRoomByName(roomName);
            if (roomInfo.RoomPwd != roomPwd)
            {
                throw new AjaxException("房间密码错误");
            }
            else
            {
                new UserInfoValidation().OkOrThrow(playerInfo);
                if (roomInfo.PlayerList.All(i => i.OpenId != playerInfo.OpenId))
                {
                    if (roomInfo.PlayerCountLimit <= roomInfo.PlayerList.Count)
                    {
                        throw new AjaxException("抱歉,房间已满");
                    }
                    else
                    {
                        roomInfo.PlayerList.Add(new PlayerInfo(roomInfo.CountingMaxValue)
                        {
                            OpenId = playerInfo.OpenId,
                            Username = playerInfo.Username,
                            PicUrl = playerInfo.PicUrl,
                        });
                    }
                }
                return roomInfo.RoomId;
            }
        }
        public void OwnerModiftPlayerScore(Guid roomId, string ownerOpenId, string playerOpenId, int score, int star)
        {
            if (score < 0)
            {
                throw new AjaxException("分数必须大于0");
            }
            if (star < 0)
            {
                throw new AjaxException("阈值必须大于0");
            }
            var roomInfo = GetRoomById(roomId, false);
            if (roomInfo.RoomOwnerOpenId != ownerOpenId)
            {
                throw new AjaxException("只有房主可以更改他人分数");
            }
            else
            {
                var playerInfo = roomInfo.PlayerList.SingleOrDefault(i => i.OpenId == playerOpenId);
                if (playerInfo == null)
                {
                    throw new AjaxException("该用户不存在或已退出房间");
                }
                else
                {
                    playerInfo.SetScoreAndStar(score, star);
                }
            }
        }
        public void OwnerAddScore(Guid roomId, string ownerOpenId, string playerOpenId, int scoreToAdd)
        {
            var roomInfo = GetRoomById(roomId, false);
            if (roomInfo.RoomOwnerOpenId != ownerOpenId)
            {
                throw new AjaxException("只有房主可以更改他人分数");
            }
            else
            {
                var playerInfo = roomInfo.PlayerList.SingleOrDefault(i => i.OpenId == playerOpenId);
                if (playerInfo == null)
                {
                    throw new AjaxException("该用户不存在或已退出房间");
                }
                else
                {
                    playerInfo.AddScoreAndUpdateLastStar(scoreToAdd);
                }
            }
        }
        public void PlayerAddScore(Guid roomId, string playerOpenId, int scoreToAdd)
        {
            var playerInfo = GetRoomById(roomId, false).PlayerList.SingleOrDefault(i => i.OpenId == playerOpenId);
            if (playerInfo == null)
            {
                throw new AjaxException("该用户不存在或已退出房间");
            }
            else
            {
                playerInfo.AddScoreAndUpdateLastStar(scoreToAdd);
            }
        }

        public enum PlayerInRoomStatus
        {
            HouseOwner = 1,
            PlayerInRoom = 2,
            NotInRoom = 3
        }
        public PlayerInRoomStatus GetPlayerInRoomStatus(Guid roomId, string playerOpenId)
        {
            var room = GetRoomById(roomId, false);
            if (room.RoomOwnerOpenId == playerOpenId)
            {
                return PlayerInRoomStatus.HouseOwner;
            }
            else if (room.PlayerList.Any(i => i.OpenId == playerOpenId))
            {
                return PlayerInRoomStatus.PlayerInRoom;
            }
            else
            {
                return PlayerInRoomStatus.NotInRoom;
            }
        }

        public PlayerInfo GetPlayerInfo(Guid roomId, string playerOpenId)
        {
            return GetRoomById(roomId, false).PlayerList.Single(i => i.OpenId == playerOpenId);
        }
    }
}

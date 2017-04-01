using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Web;
using System.Web.Security;
using ScoreBoard.FluentValidations;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Exceptions;

namespace ScoreBoard.Core
{
    public class UserLogic
    {
        private readonly MemoryCache _userList;
        private readonly CacheItemPolicy _cacheItemPolicy = new CacheItemPolicy
        {
            SlidingExpiration = new TimeSpan(2, 0, 0, 0)
        };

        public UserLogic(MemoryCache userList)
        {
            _userList = userList;
        }
        public int GetUserCount()
        {
            return _userList.Count();
        }
        public string[] GetUserConnectionIdList(Guid roomId, string userOpenId)
        {
            var inRoomInfo = GetUserInfo(userOpenId).UserInRoomInfoList.SingleOrDefault(i => i.RoomId == roomId);
            if (inRoomInfo == null)
            {
                throw new AjaxException("用户不在该房间中");
            }
            else
            {
                return inRoomInfo.ConnectionIdList.ToArray();
            }
        }

        public UserInfo GetUserInfo(string openId)
        {
            var userInfo = _userList[openId];
            if (userInfo == null)
            {
                throw new AjaxException("该用户尚未登录");
            }
            else
            {
                return userInfo as UserInfo;
            }
        }
        public void UserLogin(UserInfo userInfo)
        {
            new UserInfoValidation().OkOrThrow(userInfo);
            FormsAuthentication.SetAuthCookie(userInfo.OpenId, false);
            _userList.Remove(userInfo.OpenId);
            _userList.Add(userInfo.OpenId, userInfo, _cacheItemPolicy);
        }
        public void CurrentPlayerJoinRoom(Guid roomId, string connectId)
        {
            var userInfo = GetCurrentUserInfo();
            var inRoomInfo = userInfo.UserInRoomInfoList.SingleOrDefault(i => i.RoomId == roomId);
            if (inRoomInfo == null)
            {
                userInfo.UserInRoomInfoList.Add(new UserInRoomInfo
                {
                    RoomId = roomId,
                    ConnectionIdList = new List<string> { connectId }
                });
            }
            else
            {
                inRoomInfo.ConnectionIdList.Add(connectId);
            }

        }
        public UserInfo GetCurrentUserInfo(bool throwEx = true)
        {
            try
            {
                if (!HttpContext.Current.User.Identity.IsAuthenticated)
                {
                    FormsAuthentication.SignOut();
                    throw new UnAuthorizeException("用户未登录");
                }
                else
                {
                    var userInfo = _userList[HttpContext.Current.User.Identity.Name];
                    if (userInfo == null)
                    {
                        FormsAuthentication.SignOut();
                        throw new UnAuthorizeException("登录信息已过期,请重新登录");
                    }
                    else
                    {
                        return userInfo as UserInfo;
                    }
                }
            }
            catch
            {
                if (throwEx)
                {
                    throw;
                }
                else
                {
                    return null;
                }
            }

        }
    }
}

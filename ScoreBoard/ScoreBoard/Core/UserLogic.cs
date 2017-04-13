using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Security.Principal;
using System.Web.Security;
using Newtonsoft.Json;
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
            SlidingExpiration = TimeSpan.FromDays(2)
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
        public void WeChatUserLogin(string wxInfo, IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated)
            {
                var userInfo = JsonConvert.DeserializeObject<WeChatInfo>(wxInfo);
                if (userInfo == null)
                {
                    throw new AjaxException("序列化微信登录信息失败,请重新打开页面再试");
                }
                if (userInfo.errcode == 40001)
                {
                    throw new AjaxException("微信登录Token已失效,请重新打开页面再试");
                }
                UserLogin(new UserInfo
                {
                    OpenId = userInfo.openid,
                    Username = string.IsNullOrEmpty(userInfo.nickname) ? "--" : userInfo.nickname,
                    PicUrl = string.IsNullOrEmpty(userInfo.headimgurl) ? "/Resources/img/anonymous.jpg" : userInfo.headimgurl,
                });
            }
        }
        private void UserLogin(UserInfo userInfo)
        {
            new UserInfoValidation().OkOrThrow(userInfo);
            FormsAuthentication.SetAuthCookie(userInfo.OpenId, false);
            _userList.Remove(userInfo.OpenId);
            _userList.Add(userInfo.OpenId, userInfo, _cacheItemPolicy);
        }
        public void CurrentPlayerJoinRoom(Guid roomId, string connectId, IPrincipal user)
        {
            var userInfo = GetCurrentUserInfo(user);
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
        public UserInfo GetCurrentUserInfo(IPrincipal user, bool throwEx = true)
        {
            try
            {
                if (!user.Identity.IsAuthenticated)
                {
                    FormsAuthentication.SignOut();
                    throw new UnAuthorizeException("用户未登录");
                }
                else
                {
                    var userInfo = _userList[user.Identity.Name];
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

using System;
using System.Web.Mvc;
using ScoreBoard.Core;
using ScoreBoard.Models;
using ScoreBoard.Models.Attributes;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Controllers.AuthorizeApi
{
    [AjaxAuthorize]
    [ValidateInput(false)]
    public class ApiRoomController : AjaxController
    {
        private static readonly RoomLogic RoomLogic = Singleton.RoomLogic;
        private static readonly UserLogic UserLogic = Singleton.UserLogic;
        public AjaxResult OpenNewRoom(RoomInfo roomInfo, string roomPwd)
        {
            roomInfo.RoomPwd = roomPwd;
            RoomLogic.OpenNewRoom(roomInfo, Singleton.UserLogic.GetCurrentUserInfo());
            return new AjaxResult(roomInfo.RoomId);
        }

        public AjaxResult PlayerJoinRoom(string roomName, string roomPwd)
        {
            return new AjaxResult(RoomLogic.PlayerJoinRoom(roomName, roomPwd, UserLogic.GetCurrentUserInfo(), (roomPwdStr, clientPwdStr) => roomPwdStr == clientPwdStr));
        }

        public AjaxResult GetMyOpenId()
        {
            return new AjaxResult(User.Identity.Name);
        }

        public AjaxResult GetPlayerInfo(Guid roomId)
        {
            return new AjaxResult(RoomLogic.GetPlayerInfo(roomId, User.Identity.Name));
        }
    }
}
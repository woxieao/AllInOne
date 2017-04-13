using System;
using System.Text;
using System.Web.Mvc;
using ScoreBoard.Core;
using ScoreBoard.Models;
using ScoreBoard.Models.Attributes;
using ScoreBoard.Models.Extensions;

namespace ScoreBoard.Controllers.WeChat
{
    [WeChatOneStepAuthorize]
    [ValidateInput(false)]
    public class NeedAuthorizeController : BaseController
    {
        private static readonly RoomLogic RoomLogic = Singleton.RoomLogic;
        private static readonly UserLogic UserLogic = Singleton.UserLogic;

        [Route("ScanRoom/{roomId}/{md5Pwd}")]
        public ActionResult ScanRoom(Guid roomId, string md5Pwd)
        {
            var room = RoomLogic.GetRoomById(roomId, false);
            RoomLogic.PlayerJoinRoom(room.RoomName, md5Pwd, UserLogic.GetCurrentUserInfo(User), (roomPwdStr, md5PwdStr) => md5PwdStr.IsMd5Equal(roomPwdStr));
            return Redirect($"/Room/RoomDetail?roomId={roomId}");
        }
    }
}
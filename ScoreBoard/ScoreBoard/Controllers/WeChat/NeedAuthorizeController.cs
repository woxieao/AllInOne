using System;
using System.Text;
using System.Web.Mvc;
using ScoreBoard.Core;
using ScoreBoard.Models;
using ScoreBoard.Models.Attributes;

namespace ScoreBoard.Controllers.WeChat
{
    [WeChatOneStepAuthorize]
    [ValidateInput(false)]
    public class NeedAuthorizeController : BaseController
    {
        private static readonly RoomLogic RoomLogic = Singleton.RoomLogic;
        private static readonly UserLogic UserLogic = Singleton.UserLogic;

        [Route("ScanRoom/{roomId}/{base64Pwd}")]
        public ActionResult ScanRoom(Guid roomId, string base64Pwd)
        {
            var pwd = Encoding.UTF8.GetString(Convert.FromBase64String(base64Pwd));
            var room = RoomLogic.GetRoomById(roomId, false);
            RoomLogic.PlayerJoinRoom(room.RoomName, pwd, UserLogic.GetCurrentUserInfo());
            return Redirect($"/Room/RoomDetail?roomId={roomId}");
        }
    }
}
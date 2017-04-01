using System;
using System.Web;
using System.Web.Mvc;
using ScoreBoard.Core;
using ScoreBoard.Models;
using ScoreBoard.Models.Attributes;
using ScoreBoard.Models.Exceptions;
using ScoreBoard.Models.Extensions;

namespace ScoreBoard.Controllers
{
    [BaseAuthorize]
    [ValidateInput(false)]
    public class RoomController : BaseController
    {
        public ActionResult CreateRoom()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Main()
        {
            return View();
        }

        public ActionResult RoomDetail(Guid roomId)
        {
            if (!roomId.IsNull())
            {
                switch (Singleton.RoomLogic.GetPlayerInRoomStatus(roomId, User.Identity.Name))
                {
                    case RoomLogic.PlayerInRoomStatus.HouseOwner:
                        {
                            return View();
                        }
                    case RoomLogic.PlayerInRoomStatus.PlayerInRoom:
                        {
                            return Redirect($"/Room/MyRoom?roomId={roomId}");
                        }
                    case RoomLogic.PlayerInRoomStatus.NotInRoom:
                        {
                            return Redirect("/Room/Index");
                        }
                    default:
                        {
                            throw new AjaxException("未知的房间状态");
                        }
                }
            }
            else
            {
                return Redirect("/Room/Index");
            }
        }

        public ActionResult MyRoom(Guid roomId)
        {
            if (!roomId.IsNull())
            {
                switch (Singleton.RoomLogic.GetPlayerInRoomStatus(roomId, User.Identity.Name))
                {
                    case RoomLogic.PlayerInRoomStatus.PlayerInRoom:
                    case RoomLogic.PlayerInRoomStatus.HouseOwner:
                        {
                            return View();
                        }
                    case RoomLogic.PlayerInRoomStatus.NotInRoom:
                        {
                            return Redirect("/Room/Index");
                        }
                    default:
                        {
                            throw new AjaxException("未知的房间状态");
                        }
                }
            }
            else
            {
                return Redirect("/Room/Index");
            }
        }
    }
}
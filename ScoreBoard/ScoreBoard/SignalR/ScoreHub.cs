using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using ScoreBoard.Core;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Exceptions;


namespace ScoreBoard.SignalR
{
    public class ScoreHubPipelineModule : HubPipelineModule
    {
        protected override void OnIncomingError(ExceptionContext exceptionContext,
                                                  IHubIncomingInvokerContext invokerContext)
        {
            if (exceptionContext.Error is AjaxException || exceptionContext.Error is UnAuthorizeException)
            {
                invokerContext.Hub.Clients.Caller.Msg(exceptionContext.Error.Message);
            }
            else
            {
                invokerContext.Hub.Clients.Caller.ExceptionHandler(exceptionContext.Error.StackTrace);
            }
        }
    }

    [HubName("ScoreBoard")]
    public class ScoreHub : Hub
    {


        #region Private
        private static readonly RoomLogic RoomLogic = Singleton.RoomLogic;
        private static readonly UserLogic UserLogic = Singleton.UserLogic;

        private void RunCall(Action act, string msg = "", Action finallyAct = null)
        {
            try
            {
                act();
            }
            finally
            {
                Clients.Caller.Pong(msg);
                finallyAct?.Invoke();
            }
        }
        private void CloseRoom(Guid roomId, IEnumerable<string> expectConnectionIdList)
        {
            Clients.Group(roomId.ToString(), expectConnectionIdList.ToArray()).Close("所有人员均已退出,房间已关闭");
        }
        public void Ping()
        {
            RunCall(() => { });
        }
        #endregion

        #region Common
        public void JoinRoom(Guid roomId, bool isWeChat)
        {
            if (isWeChat)
            {
                UserLogic.CurrentPlayerJoinRoom(roomId, Context.ConnectionId);
            }
            Groups.Add(Context.ConnectionId, roomId.ToString());
        }
        public void AddMyScore(Guid roomId, int addCount)
        {
            RunCall(() =>
            {
                RoomLogic.PlayerAddScore(roomId, HttpContext.Current.User.Identity.Name, addCount, UpdateScore);
            });
        }
        public void UpdateScore(Guid roomId)
        {
            var room = RoomLogic.GetRoomById(roomId, false);
            Clients.Group(roomId.ToString()).UpdateScore(new { RoomInfo = room });
            room.InitPlayerIsBoom();
        }
        public void ExitRoom(Guid roomId)
        {
            var currentRoomConnectionIdList = new List<string>();
            RunCall(() =>
            {
                var openId = HttpContext.Current.User.Identity.Name;
                currentRoomConnectionIdList = UserLogic.GetUserConnectionIdList(roomId, openId).ToList();
                foreach (var currentRoomConnectionId in currentRoomConnectionIdList)
                {
                    Groups.Remove(currentRoomConnectionId, roomId.ToString());
                }
                if (RoomLogic.IsExistRoom(roomId, false))
                {
                    if (RoomLogic.ExitRoom(roomId, openId))
                    {
                        UpdateScore(roomId);
                    }
                    else
                    {
                        CloseRoom(roomId, currentRoomConnectionIdList);
                    }
                }
            }, finallyAct: () => { Clients.Clients(currentRoomConnectionIdList).ExitRoom(); });
        }
        #endregion

        #region HouseOwner
        public void OwnerAddUserScore(Guid roomId, string playerOpenId, int addCount)
        {
            RunCall(() =>
            {
                RoomLogic.OwnerAddScore(roomId, HttpContext.Current.User.Identity.Name, playerOpenId, addCount, UpdateScore);
                Clients.Caller.ModifyPlayerInfoSuccess();
            });
        }
        public void ModifyRoom(RoomInfo roomInfo)
        {
            RunCall(() =>
            {
                RoomLogic.ModifyRoom(roomInfo, () => { UpdateScore(roomInfo.RoomId); });
                Clients.Caller.ModifyRoomSuccess();
            });
        }
        public void ModifyPlayerInfo(Guid roomId, string playerOpenId, int score, int star)
        {
            RunCall(() =>
            {
                RoomLogic.OwnerModiftPlayerScore(roomId, HttpContext.Current.User.Identity.Name, playerOpenId, score, star, UpdateScore);
                Clients.Caller.ModifyPlayerInfoSuccess();
            });
        }
        //todo add to web
        public void KickUserOut(Guid roomId, string userOpenId)
        {
            var currentRoomConnectionIdList = UserLogic.GetUserConnectionIdList(roomId, userOpenId);
            var isRoomExist = RoomLogic.KickUserOut(roomId, userOpenId);
            foreach (var userConnectId in currentRoomConnectionIdList)
            {
                Groups.Remove(userConnectId, roomId.ToString());
            }
            Clients.Clients(currentRoomConnectionIdList).Kicked();
            if (isRoomExist)
            {
                UpdateScore(roomId);
            }
            else
            {
                CloseRoom(roomId, currentRoomConnectionIdList);
            }
            Clients.Caller.ModifyPlayerInfoSuccess();
        }
        //todo add to web
        public void CleanUpScore(Guid roomId)
        {
            RoomLogic.CleanUpScore(UpdateScore, roomId);
        }

        #endregion

        #region Player

        #endregion





    }
}
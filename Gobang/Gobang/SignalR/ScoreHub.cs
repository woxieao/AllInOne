using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using Gobang.Models;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using XASoft.CommonModel.ExceptionModel;

namespace Gobang.SignalR
{
    public class ScoreHubPipelineModule : HubPipelineModule
    {
        protected override void OnIncomingError(ExceptionContext exceptionContext,
                                                  IHubIncomingInvokerContext invokerContext)
        {
            invokerContext.Hub.Clients.Caller.Msg(exceptionContext.Error.Message);
        }
    }

    [HubName("chessboard")]
    public class ScoreHub : Hub
    {
        #region first version
        internal static readonly List<RoomInfo> RoomList;
        internal static bool IsBlackChessTurn = true;

        public RoomInfo GetRoom(string roomId)
        {
            var room = RoomList.FirstOrDefault(i => i.RoomId.Equals(roomId, StringComparison.OrdinalIgnoreCase));
            if (room == null)
            {
                throw new MsgException("房间不存在");
            }
            return room;
        }
        public void JoinRoom(string roomId, string roomPwd)
        {
            var room = GetRoom(roomId);
            if (!string.IsNullOrEmpty(room.RoomPwd) && room.RoomPwd != roomPwd)
            {
                throw new MsgException("房间密码错误");
            }
            var playerCount = room.PlayerConnectionIdList.Count;
       
            if (playerCount >= 2)
            {
                throw new MsgException("房间已满");
            }
            room.PlayerConnectionIdList.Add(Context.ConnectionId);
        }

        public void MakeChess(string roomId, bool isBlackChess, int x, int y)
        {
            var room = GetRoom(roomId);
            var turn = room.ChessData.Count;
            if (turn % 2 == 0 && Context.ConnectionId == room.PlayerConnectionIdList[turn % 2])
            {
                room.ChessData
            }
            else
            {
                throw new MsgException("当前不是你的回合~~");
            }
            if (room.ChessData.Any(i => i.X == x && i.Y == y))
            {
                throw new MsgException("这个地方已经有棋子了~~");
            }
            else
            {
                ChessData.Add(new Chess(x, y, isBlackChess));
            }
        }
        #endregion


    }
}
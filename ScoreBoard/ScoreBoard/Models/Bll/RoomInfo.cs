using System;
using System.Collections.Generic;

namespace ScoreBoard.Models.Bll
{
    public class RoomInfo
    {
        public RoomInfo()
        {
            CreateTime = DateTime.Now;
            PlayerList = new List<PlayerInfo>();
            RoomId = Guid.NewGuid();
        }

        public Guid RoomId { get; set; }
        public string RoomName { get; set; }
        public string RoomPwd { get; set; }
        public int CountingMaxValue { get; set; }
        public int PlayerCountLimit { get; set; }
        public string RoomOwnerOpenId { get; set; }
        public DateTime CreateTime { get; private set; }
        public List<PlayerInfo> PlayerList { get; set; }

        public void UpdatePlayerCountingMaxValue()
        {
            foreach (var player in PlayerList)
            {
                player.UpdateCountingMaxValue(CountingMaxValue);
            }
        }
        public void InitPlayerIsBoom()
        {
            foreach (var player in PlayerList)
            {
                player.InitBoom();
            }
        }

    }
}
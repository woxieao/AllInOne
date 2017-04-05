using System;
using System.Collections.Generic;
using System.Linq;

namespace ScoreBoard.Models.Bll
{
    public class RoomInfo
    {
        private DateTime _lastModifyScoreTime = DateTime.MinValue;

        private DateTime _lastTurnTimeStamp = DateTime.MinValue;

        public DateTime GetLastTurnTimeStamp()
        {
            return _lastTurnTimeStamp;
        }

        public int CurrentTurnTimeLeft
        {
            get
            {
                var lastModifyScoreTimeToNow = DateTime.Now - _lastModifyScoreTime;
                var currentTurnTimeLeft = Singleton.OneTurnSecond - (int)lastModifyScoreTimeToNow.TotalSeconds;
                return lastModifyScoreTimeToNow > TimeSpan.FromSeconds(Singleton.OneTurnSecond) ?
                    0 : (currentTurnTimeLeft > 0 ? currentTurnTimeLeft : 0);
            }
        }

        public RoomInfo()
        {
            CreateTime = DateTime.Now;
            PlayerList = new List<PlayerInfo>();
            RoomId = Guid.NewGuid();
        }

        public Guid RoomId { get; set; }
        public string RoomName { get; set; }
        public string RoomPwd {  get; set; }
        //public string RoomPwdJust4Set { set { RoomPwd = value; } }
        public int CountingMaxValue { get; set; }
        public int PlayerCountLimit { get; set; }
        public string RoomOwnerOpenId { get; set; }
        public DateTime CreateTime { get; private set; }
        public List<PlayerInfo> PlayerList { get; set; }

        public int GetCountingMaxValue()
        {
            return CountingMaxValue;
        }
        public void InitPlayerIsBoom()
        {
            foreach (var player in PlayerList)
            {
                player.InitBoom();
            }
        }
        public void SetLastModifyScoreTimeAndUpdateScore(Action<Guid> updateScore, Guid roomId)
        {
            var nowTime = DateTime.Now;
            if (nowTime - _lastModifyScoreTime - TimeSpan.FromSeconds(Singleton.OneTurnSecond) > TimeSpan.Zero)
            {
                //已过一轮的时间限制则刷新上一轮的时间戳,未过则不刷新
                _lastTurnTimeStamp = nowTime; ;
            }
            _lastModifyScoreTime = nowTime;
            updateScore(roomId);
        }
    }
}
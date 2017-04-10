using System;
using System.Collections.Generic;
using System.Linq;
//using Action = Antlr.Runtime.Misc.Action;

namespace ScoreBoard.Models.Bll
{
    public class PlayerInfo : UserInfo
    {
        public PlayerInfo(Func<int> getCountingMaxValue, Func<DateTime> getLastTurnTimeStamp)
        {
            RealScore = 0;
            Boom = false;
            ModifyScoreLog = new List<ModifyScoreInfo>();
            _getCountingMaxValue = getCountingMaxValue;
            _getLastTurnTimeStamp = getLastTurnTimeStamp;
        }
        private int _lastStar;
        private readonly Func<int> _getCountingMaxValue;
        private readonly Func<DateTime> _getLastTurnTimeStamp;
        internal readonly List<ModifyScoreInfo> ModifyScoreLog;

        public int CurrentTurnScoreAdded
        {
            get
            {
                return ModifyScoreLog.Where(i => i.ModifyTime >= _getLastTurnTimeStamp()).Sum(i => i.ScoreAdded);
            }
        }

        public int RealScore { get; private set; }
        private void SetRealScore(int realScore, Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId, bool addLog = true)
        {
            _lastStar = Stars;
            var lastRealScore = RealScore;
            RealScore = realScore;
            Boom = _lastStar < Stars;
            if (addLog)
            {
                ModifyScoreLog.Add(new ModifyScoreInfo
                {
                    ModifyTime = DateTime.Now,
                    CurrentRealScore = RealScore,
                    ScoreAdded = RealScore - lastRealScore
                });
            }
            setLastModifyScoreTimeAndUpdateScore(updateScore, roomId);
            Boom = false;
        }
        public void CleanUpScore(Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId)
        {
            ModifyScoreLog.Clear();
            SetRealScore(0, setLastModifyScoreTimeAndUpdateScore, updateScore, roomId, false);
        }


        public void AddScoreAndUpdateLastStar(int scoreToAdd, Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId)
        {
            SetRealScore(RealScore + scoreToAdd, setLastModifyScoreTimeAndUpdateScore, updateScore, roomId);
        }

        public void SetScoreAndStar(int score, int star, Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId)
        {
            SetRealScore(score + star * _getCountingMaxValue(), setLastModifyScoreTimeAndUpdateScore, updateScore, roomId);
        }

        public int Score => RealScore % _getCountingMaxValue();
        public int Stars => RealScore / _getCountingMaxValue();
        public bool Boom { get; private set; }
    }
}
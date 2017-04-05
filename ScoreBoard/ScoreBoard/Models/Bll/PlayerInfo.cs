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
            _modifyScoreLog = new List<ModifyScoreInfo>();
            _getCountingMaxValue = getCountingMaxValue;
            _getLastTurnTimeStamp = getLastTurnTimeStamp;
        }
        private int _lastStar;
        private readonly Func<int> _getCountingMaxValue;
        private readonly Func<DateTime> _getLastTurnTimeStamp;
        private readonly List<ModifyScoreInfo> _modifyScoreLog;

        public int CurrentSpanScoreAdded
        {
            get
            {
                return _modifyScoreLog.Where(i => i.ModifyTime >= _getLastTurnTimeStamp()).Sum(i => i.ScoreAdded);
            }
        }

        public int RealScore { get; private set; }
        private void SetRealScore(int realScore, Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId)
        {
            var lastRealScore = RealScore;
            RealScore = realScore;
            _modifyScoreLog.Add(new ModifyScoreInfo
            {
                ModifyTime = DateTime.Now,
                CurrentRealScore = RealScore,
                ScoreAdded = RealScore - lastRealScore
            });
            setLastModifyScoreTimeAndUpdateScore(updateScore, roomId);
        }

        public void UpdateBoomInfo(Action act)
        {
            _lastStar = Stars;
            act?.Invoke();
            Boom = _lastStar < Stars;
        }
        public void AddScoreAndUpdateLastStar(int scoreToAdd, Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId)
        {
            UpdateBoomInfo(() =>
            {
                SetRealScore(RealScore + scoreToAdd, setLastModifyScoreTimeAndUpdateScore, updateScore, roomId);
            });
        }

        public void InitBoom()
        {
            Boom = false;
        }

        public void SetScoreAndStar(int score, int star, Action<Action<Guid>, Guid> setLastModifyScoreTimeAndUpdateScore, Action<Guid> updateScore, Guid roomId)
        {
            UpdateBoomInfo(() => { SetRealScore(score + star * _getCountingMaxValue(), setLastModifyScoreTimeAndUpdateScore, updateScore, roomId); });
        }

        public int Score => RealScore % _getCountingMaxValue();
        public int Stars => RealScore / _getCountingMaxValue();
        public bool Boom { get; private set; }
    }
}
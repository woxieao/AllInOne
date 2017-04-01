using Antlr.Runtime.Misc;

namespace ScoreBoard.Models.Bll
{
    public class PlayerInfo : UserInfo
    {
        private int _countingMaxValue;
        private int _lastStar;
        private int _realScore;
        public PlayerInfo(int countingMaxValue)
        {
            Score = 0;
            _realScore = 0;
            _countingMaxValue = countingMaxValue;
            Boom = false;
        }
        public void UpdateBoomInfo(Action act)
        {
            _lastStar = Stars;
            act?.Invoke();
            Boom = _lastStar < Stars;
        }
        public void UpdateCountingMaxValue(int countingMaxValue)
        {
            UpdateBoomInfo(() => { _countingMaxValue = countingMaxValue; });
        }
        public void AddScoreAndUpdateLastStar(int scoreToAdd)
        {
            UpdateBoomInfo(() => { _realScore += scoreToAdd; });
        }
        
        public void InitBoom()
        {
            Boom = false;
        }
        
        public void SetScoreAndStar(int score, int star)
        {
            UpdateBoomInfo(() => { _realScore = score + star * _countingMaxValue; });
        }

        public int Score { get { return _realScore % _countingMaxValue; } private set { _realScore = value; } }
        public int Stars => _realScore / _countingMaxValue;
        public bool Boom { get; private set; }


    }
}
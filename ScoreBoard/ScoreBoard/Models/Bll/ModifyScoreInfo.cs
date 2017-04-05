using System;

namespace ScoreBoard.Models.Bll
{
    public class ModifyScoreInfo
    {
        public DateTime ModifyTime { get; set; }
        public int ScoreAdded { get; set; }
        public int CurrentRealScore { get; set; }
    }
}
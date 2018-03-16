using System.Collections.Generic;

namespace Gobang.Models
{
    public class Chess
    {
        public Chess(int x, int y, bool isBlackChess)
        {
            X = x;
            Y = y;
            IsBlackChess = isBlackChess;
        }
        public int X { get; set; }
        public int Y { get; set; }
        public bool IsBlackChess { get; set; }
    }

    public class RoomInfo
    {
        public RoomInfo()
        {
            ChessData = new List<Chess>();
            PlayerConnectionIdList = new List<string>();
        }
        public string RoomId { get; set; }
        public string RoomPwd { get; set; }
        public List<string> PlayerConnectionIdList { get; set; }
        public List<Chess> ChessData { get; set; }
    }
}
using System;
using System.Collections.Generic;

namespace ScoreBoard.Models.Bll
{
    public class UserInRoomInfo
    {
        public UserInRoomInfo()
        {
            ConnectionIdList = new List<string>();
        }
        public Guid RoomId { get; set; }
        public List<string> ConnectionIdList { get; set; }
    }
}
using System.Collections.Generic;

namespace ScoreBoard.Models.Bll
{
    public class UserInfo
    {
        public UserInfo()
        {
            UserInRoomInfoList = new List<UserInRoomInfo>();
        }
        public string PicUrl { get; set; }
        public string Username { get; set; }
        public string OpenId { get; set; }
        internal List<UserInRoomInfo> UserInRoomInfoList { get; set; }
    }
}
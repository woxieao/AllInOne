using System;
using Cloudatable.Configs;

namespace Cloudatable.Models
{
    public class UserInfo
    {
        public UserInfo()
        {
            Avatar = Config.DefaultValues.Avatar;
            Motto = Config.DefaultValues.Motto;
            Sex = Config.DefaultValues.Sex;
        }
        public string Motto { get; set; }
        public string Avatar { get; set; }
        public string Sex { get; set; }
    }
}

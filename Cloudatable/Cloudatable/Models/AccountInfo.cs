using System;
using Cloudatable.Core;

namespace Cloudatable.Models
{
    public class AccountInfo
    {
        private string _username;
        private string _accountEmail;
        private string _pwd;

        public AccountInfo()
        {
            CreateTime = DateTime.Now;
        }

        public string Username
        {
            get { return _username; }
            set
            {
                _username = value.GetUsername();
            }
        }

        public string AccountEmail
        {
            get { return _accountEmail; }
            set { _accountEmail = value.GetEmail(); }
        }

        public string Pwd
        {
            get { return _pwd; }
            set { _pwd = value.GetPwd(); }
        }

        public DateTime CreateTime { get; set; }
    }
}

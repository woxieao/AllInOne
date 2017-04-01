using System;

namespace ScoreBoard.Models.Exceptions
{
    public class UnAuthorizeException : Exception
    {
        public const string DefaultMsg = "用户未登录";

        public UnAuthorizeException() : base(DefaultMsg)
        {

        }

        public UnAuthorizeException(string errMsg) : base(errMsg)
        {

        }
    }
}
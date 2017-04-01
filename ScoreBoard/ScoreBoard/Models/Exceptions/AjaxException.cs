using System;

namespace ScoreBoard.Models.Exceptions
{
    public class AjaxException : Exception
    {
        public const string DefaultMsg = "服务器异常";

        public AjaxException() : base(DefaultMsg)
        {

        }

        public AjaxException(string errMsg) : base(errMsg)
        {

        }
    }
}
using System;

namespace AlexXieBrain
{
    public class MsgException : Exception
    {
        public const string DefaultMsg = "服务器异常";

        public MsgException() : base(DefaultMsg)
        {

        }

        public MsgException(string errMsg) : base(errMsg)
        {

        }
    }
    public class ServiceException : Exception
    {
        public const string DefaultMsg = "服务器异常";

        public ServiceException() : base(DefaultMsg)
        {

        }

        public ServiceException(string errMsg) : base(errMsg)
        {

        }
    }
    public static class ExceptionHelper
    {
        public static Exception InnermostEx(this Exception ex)
        {
            return ex.InnerException == null ? ex : ex.InnerException.InnermostEx();
        }
    }
}

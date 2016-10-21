using System;

namespace AlexXieBrain
{
    public class ExceptionCore
    {

    }
    public static class ExceptionHelper
    {
        public static Exception InnermostEx(this Exception ex)
        {
            return ex.InnerException == null ? ex : ex.InnerException.InnermostEx();
        }
    }
}

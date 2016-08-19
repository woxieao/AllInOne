using System;

namespace Cloudatable.WebCore
{
    public class ApiException : Exception
    {
        public ApiException(string msg) : base(msg)
        {
        }
    }
}

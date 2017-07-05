using System;
namespace SensitiveWordFilter
{
    public class SensitiveRequestException : Exception
    {
        public SensitiveRequestException() : base() { }
        public SensitiveRequestException(string msg) : base(msg) { }
    }
}

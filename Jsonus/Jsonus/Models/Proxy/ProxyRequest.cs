using Jsonus.Enum;

namespace Jsonus.Models.Proxy
{
    public class ProxyRequest
    {
        private string _body;
        private string _contentType;

        public ProxyRequest()
        {
            RequestType = RequestType.Get;
        }
        public string Host { get; set; }
        public string Url { get; set; }

        public string Body
        {
            get { return string.IsNullOrEmpty(_body) ? " " : _body; }
            set { _body = value; }
        }

        public RequestType RequestType { get; set; }

        public string ContentType
        {
            get { return string.IsNullOrEmpty(_contentType) ? "application/x-www-form-urlencoded" : _contentType; }
            set { _contentType = value; }
        }

        public string Cookies { get; set; }
    }
}
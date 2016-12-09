using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Jsonus.Enum;
using Jsonus.Extensions;
using Jsonus.Models.Proxy;

namespace Jsonus.Controllers.Page
{
    public class ProxyController : Controller
    {
        public void Forward(ProxyRequest request)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(request.Host);
            var cookieStr = string.Empty;
            foreach (var cookie in Request.Cookies)
            {
                var httpCookie = Request.Cookies[cookie.ToString()];
                if (httpCookie != null)
                {
                    cookieStr += $"{cookie}={httpCookie.Value};";
                }
            }
            client.DefaultRequestHeaders.Add("Cookies", cookieStr);
            Task<HttpResponseMessage> result;
            switch (request.RequestType)
            {
                case RequestType.Post:
                    {
                        result = client.PostAsyncEx(request.Url, new StringContent(request.Body, Encoding.UTF8, request.ContentType));
                        break;
                    }
                case RequestType.Get:
                    {
                        result = client.GetAsyncEx(request.Url);
                        break;
                    }
                default:
                    {
                        throw new Exception($"尚不支持{request.RequestType}方法");
                    }
            }

            var resultData = result.Result.Content.ReadAsStringAsync().Result;
            Response.Write(resultData);
            var resultHeader = result.Result.Headers.ToString();
            const string setCookieFlag = "Set-Cookie:";
            var cookieIndex = resultHeader.IndexOf(setCookieFlag, StringComparison.Ordinal);
            if (cookieIndex == -1) return;
            var tempCookieStr = resultHeader.Substring(cookieIndex);
            var lastIndex = tempCookieStr.IndexOf("\r\n", StringComparison.Ordinal);
            var cookieList = (lastIndex == -1 ? tempCookieStr : tempCookieStr.Substring(0, lastIndex)).Replace(setCookieFlag, string.Empty).Split(';');
            foreach (var cookieInfo in cookieList)
            {
                var cookieData = cookieInfo.Split('=');
                if (cookieData.Length == 2)
                {
                    Response.Cookies.Add(new HttpCookie(cookieData[0], cookieData[1]));
                }
            }
        }

        public string Test(string name = "there")
        {
            return $"Hey {name},Now is {DateTime.Now}";
        }
        public ActionResult Help()
        {
            return View();
        }
    }
}
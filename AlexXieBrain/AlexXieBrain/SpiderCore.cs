using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI.WebControls;
using Newtonsoft.Json;

namespace AlexXieBrain
{
    public static class HttpHelper
    {
        public static T As<T>(this HttpResponse response)
        {
            return JsonConvert.DeserializeObject<T>(response.ResponseStr);
        }
    }

    public class HttpResponse
    {
        public HttpStatusCode StatusCode { get; set; }
        public byte[] ResponseBytes { get; set; }
        public string ResponseStr { get; set; }
        public string SetCookie { get; set; }
    }
    public class Header
    {
        public Header(string keyName, string value)
        {
            KeyName = keyName;
            Value = value;
        }
        public Header(string str)
        {
            var index = str.IndexOf(":", StringComparison.Ordinal);
            if (index != -1)
            {
                KeyName = str.Substring(0, index);
                Value = str.Substring(index + 1);
            }
        }
        public string KeyName { get; set; }
        public string Value { get; set; }
    }
    public class CookieInfo
    {
        internal CookieContainer GetCookieContainer()
        {
            var cookieContainer = new CookieContainer();
            if (!string.IsNullOrEmpty(CookieStr))
            {
                var cookieList = CookieStr.Split(';');
                foreach (var cookieInfo in cookieList)
                {
                    var cookieData = cookieInfo.Split('=');
                    if (cookieData.Length >= 2)
                    {
                        cookieContainer.Add(new Uri(_domain), new Cookie(System.Uri.EscapeDataString(Uri.UnescapeDataString(cookieData[0].Trim())), Uri.EscapeDataString(Uri.UnescapeDataString(cookieData[1]))));
                    }
                }
            }
            return cookieContainer;
        }
        public string CookieStr { get; }
        private readonly string _domain;

        public CookieInfo(string domain, string cookieStr)
        {
            _domain = domain;
            CookieStr = cookieStr;
        }
    }
    public class RequestData
    {
        public RequestData()
        {
            Headers = new List<Header>();
            Accept = string.Empty;
            FailedReplayCount = 5;
            TimeOutMilliseconds = 30 * 1000;
        }
        //public string Domain { get; set; }
        //public bool NotEncodeCookie { get; set; }
        public List<Header> Headers { get; set; }
        public bool UseCookies { get; set; }
        public CookieInfo Cookie { get; set; }
        /// <summary>
        /// eg http://1.1.1.1:8080
        /// </summary>
        public string ProxyUri { get; set; }
        /// <summary>
        /// 为空时则为随机字符串,否则为指定ip
        /// </summary>
        public string XForwardedFor { get; set; }
        /// <summary>
        /// 请求失败的重发次数,默认重发五次
        /// </summary>
        public int FailedReplayCount { get; set; }
        /// <summary>
        /// "application/json"
        /// </summary>
        public string Accept { get; set; }
        public int TimeOutMilliseconds { get; set; }
    }
    public class RequestLogBase
    {
        public int RequestId { get; set; }
        public string RequestContent { get; set; }
        public string RequestHeader { get; set; }
        public string Url { get; set; }
        public string ResponseContent { get; set; }
        public string ResponseCookie { get; set; }
        public System.DateTime CreateTime { get; set; }
        public string Remark { get; set; }
    }
    public class SpiderCore
    {
        private static readonly Random Seed = new Random();

        private readonly RequestData _requestData = new RequestData();
        public static Action<string> LogoutAction;
        readonly HttpClient _httpClient;
        public SpiderCore() { _httpClient = new HttpClient(); }
        public SpiderCore(RequestData requestData)
        {
            _requestData = requestData;

            var handler = new HttpClientHandler
            {
                CookieContainer = requestData.Cookie?.GetCookieContainer() ?? new CookieContainer(),
            };
            if (!string.IsNullOrEmpty(requestData.ProxyUri))
            {
                handler.Proxy = new WebProxy()
                {
                    Address = new Uri(requestData.ProxyUri),
                    BypassProxyOnLocal = false,
                    UseDefaultCredentials = false,
                };
            }
            if (requestData.UseCookies)
            {
                handler.UseCookies = requestData.UseCookies;
            }
            _httpClient = new HttpClient(handler)
            {

            };
            if (requestData.TimeOutMilliseconds > 0)
            {
                _httpClient.Timeout = new TimeSpan(0, 0, 0, 0, requestData.TimeOutMilliseconds);
            }

            if (!string.IsNullOrEmpty(requestData.Accept))
            {
                _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(requestData.Accept));
            }
            foreach (var header in requestData.Headers)
            {
                _httpClient.DefaultRequestHeaders.Add(header.KeyName, header.Value);
            }
            _httpClient.DefaultRequestHeaders.Add("X-Forwarded-For",
                string.IsNullOrEmpty(requestData.XForwardedFor)
                    ? $"{Seed.Next(255)}.{Seed.Next(255)}.{Seed.Next(255)}.{Seed.Next(255)}"
                    : requestData.XForwardedFor);
        }

        private HttpResponse FuncCounter(Func<HttpResponse> func, Guid flag, string desc = "", int counter = 0)
        {
            ++counter;
            var flagStr = $"[{flag}](+{counter})\n";
            try
            {
                var result = func();
                if (counter != 1)
                {
                    Console.WriteLine($"{flagStr}重发成功");
                }
                return result;
            }
            catch (Exception e)
            {
                if (counter >= _requestData.FailedReplayCount)
                {
                    throw new MsgException($"{flagStr}超过失败重发次数上限{_requestData.FailedReplayCount}次");
                }
                else
                {
                    Console.WriteLine($"{desc}\n{flagStr}发送请求时出错:[{e.Message}],重发中");
                    var resp = FuncCounter(func, flag, desc, counter);
                    return resp;
                }
            }
        }
        public HttpResponse Get(string url)
        {
            var id = Guid.NewGuid();
            return FuncCounter(() =>
            {
                if (_httpClient.BaseAddress == null)
                { _httpClient.BaseAddress = new Uri(url); }
                var result = _httpClient.GetAsync(new Uri(url)).Result;
                var header = result.Headers;
                var cookie = header.FirstOrDefault(i => i.Key == "Set-Cookie");
                var setCookie = string.Empty;
                if (cookie.Key != null && cookie.Value != null)
                {
                    setCookie = string.Join(";", cookie.Value);
                }

                var response = new HttpResponse
                {
                    ResponseBytes = result.Content.ReadAsByteArrayAsync().Result,
                    ResponseStr = result.Content.ReadAsStringAsync().Result,
                    SetCookie = setCookie,
                    StatusCode = result.StatusCode
                };
                LogoutAction?.Invoke(JsonConvert.SerializeObject(new RequestLogBase
                {
                    Url = url,
                    CreateTime = DateTime.Now,
                    ResponseContent = response.ResponseStr,
                    ResponseCookie = setCookie,
                    RequestHeader = JsonConvert.SerializeObject(_requestData)
                }));
                return response;

            }, id, $"Url:{url },Proxy:{_requestData.ProxyUri}");
        }

        public string IpTest()
        {
            var resp = new Regex("\\[[\\d\\.]+\\]").Match(Get("http://2018.ip138.com/ic.asp").ResponseStr).Value;
            Console.WriteLine(resp);
            return resp;
        }
        public HttpResponse Post<T>(string url, T content, string contentType = "application/json")
        {
            var id = Guid.NewGuid();
            return FuncCounter(() =>
            {
                if (_httpClient.BaseAddress == null)
                { _httpClient.BaseAddress = new Uri(url); }
                var strContent = content is string ? content as string : JsonConvert.SerializeObject(content);

                var result = _httpClient.PostAsync(url, new StringContent(strContent, Encoding.UTF8, contentType)).Result;
                var header = result.Headers;
                var cookie = header.FirstOrDefault(i => i.Key == "Set-Cookie");
                var setCookie = string.Empty;
                if (cookie.Key != null && cookie.Value != null)
                {
                    setCookie = string.Join(";", cookie.Value);
                }
                var response = new HttpResponse
                {
                    ResponseBytes = result.Content.ReadAsByteArrayAsync().Result,
                    ResponseStr = result.Content.ReadAsStringAsync().Result,
                    SetCookie = setCookie,
                    StatusCode = result.StatusCode
                };
                LogoutAction?.Invoke(JsonConvert.SerializeObject(new RequestLogBase
                {
                    Url = url,
                    CreateTime = DateTime.Now,
                    ResponseContent = response.ResponseStr,
                    ResponseCookie = setCookie,
                    RequestContent = strContent,
                    RequestHeader = JsonConvert.SerializeObject(_requestData)
                }));
                return response;
            }, id, $"URL:{url },Proxy:{_requestData.ProxyUri}");
        }
        public HttpResponse Post<T>(string url, T content, string contentType = "application/json", params Header[] headers)
        {
            var id = Guid.NewGuid();
            return FuncCounter(() =>
            {
                if (_httpClient.BaseAddress == null)
                { _httpClient.BaseAddress = new Uri(url); }
                _httpClient.DefaultRequestHeaders.Clear();
                foreach (var h in headers)
                {
                    _httpClient.DefaultRequestHeaders.Add(h.KeyName, h.Value);
                }
                var strContent = content is string ? content as string : JsonConvert.SerializeObject(content);
                var result = _httpClient.PostAsync(url, new StringContent(strContent, Encoding.UTF8, contentType)).Result;
                var header = result.Headers;
                var cookie = header.FirstOrDefault(i => i.Key == "Set-Cookie");
                var setCookie = string.Empty;
                if (cookie.Key != null && cookie.Value != null)
                {
                    setCookie = string.Join(";", cookie.Value);
                }
                var response = new HttpResponse
                {
                    ResponseBytes = result.Content.ReadAsByteArrayAsync().Result,
                    ResponseStr = result.Content.ReadAsStringAsync().Result,
                    SetCookie = setCookie,
                    StatusCode = result.StatusCode
                };
                LogoutAction?.Invoke(JsonConvert.SerializeObject(new RequestLogBase
                {
                    Url = url,
                    CreateTime = DateTime.Now,
                    ResponseContent = response.ResponseStr,
                    ResponseCookie = setCookie,
                    RequestContent = strContent,
                    RequestHeader = JsonConvert.SerializeObject(_requestData)
                }));
                return response;
            }, id, $"URL:{url },Proxy:{_requestData.ProxyUri}");
        }
    }
}


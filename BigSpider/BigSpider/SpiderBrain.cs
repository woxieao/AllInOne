using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;

namespace BigSpider
{
    public class SpiderBrain
    {
        public HttpClient SpiderCore;

        public List<Regex> MatchCaseList = new List<Regex>();
        public List<Regex> NotMatchList = new List<Regex>();
        public SpiderBrain()
        {
        }

        public int MaxThread = 100;
        private List<Thread> _threadList = new List<Thread>();
        public virtual void SetCookies(ref CookieContainer cookieContainer, string host, string cookieStr)
        {
            if (string.IsNullOrEmpty(cookieStr))
            {
                return;
            }
            var cookies = cookieStr.Split(';');
            foreach (var cookie in cookies)
            {
                var cookieInfo = cookie.Split('=');
                cookieContainer.Add(new Cookie(cookieInfo[0].Trim(), cookieInfo[1].Trim(), "/", host));
            }
        }

        public virtual void InitHttpClient(string url, string cookieStr = "")
        {
            url = url.Trim();
            const string httpFlag = "http://";
            const string httpsFlag = "https://";
            if (url.Length >= httpsFlag.Length && url.Substring(0, httpFlag.Length).ToLower() != httpFlag && url.Substring(0, httpsFlag.Length).ToLower() != httpsFlag)
            {
                url = httpFlag + url;
            }
            var uri = new Uri(url);
            var cookieContainer = new CookieContainer();
            SetCookies(ref cookieContainer, uri.Host, cookieStr);
            var handler = new HttpClientHandler() { CookieContainer = cookieContainer };
            SpiderCore = new HttpClient(handler) { BaseAddress = new Uri(uri.AbsoluteUri) };
        }
    }
}

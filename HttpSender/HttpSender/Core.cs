using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace HttpSender
{
    internal class HttpCore
    {
        private static HttpClient _httpClient;
        public int MaxThread = 100;
        private List<Thread> _threadList = new List<Thread>();
        protected virtual void SetCookies(ref CookieContainer cookieContainer, string host, string cookieStr)
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

        protected virtual void InitHttpClient(string url, string cookieStr)
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
            _httpClient = new HttpClient(handler) { BaseAddress = new Uri(uri.AbsoluteUri) };
        }

        protected virtual void RunRequest(Action allDoneAct, Action<int> runningFunc)
        {
            var index = 0;
            while (_threadList.Any(i => i.ThreadState == ThreadState.Unstarted))
            {
                foreach (var thread in _threadList)
                {
                    var liveCount = _threadList.Count(i => i.IsAlive);
                    if (liveCount >= MaxThread)
                    {
                        break;
                    }
                    else
                    {
                        if (thread.ThreadState == ThreadState.Unstarted)
                        {
                            index++;
                            thread.Start();
                        }
                    }
                }
                runningFunc?.Invoke(index + 1);
            }
            allDoneAct?.Invoke();
        }

        protected bool CallBackFunc(string respond = "", Action<string> notMatchAct = null, string flag = "", Action matchedAct = null, int index = 0)
        {
            if (respond == flag)
            {
                matchedAct?.Invoke();
                return true;
            }
            else
            {
                notMatchAct?.Invoke(respond);
                return false;
            }
        }

        private string Send(string pathAndQuery, string requestData)
        {
            try
            {
                var result = _httpClient.PostAsync(pathAndQuery, new StringContent(requestData)).Result;
                return result.Content.ReadAsStringAsync().Result;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Task<string> Send(string url, string requestData, string cookieStr, int times = 1, Action allDoneAct = null, Action<int> runningAct = null)
        {
            return Task.Run(() =>
            {
                InitHttpClient(url, cookieStr);
                _threadList = new List<Thread>();
                var respond = string.Empty;
                var pathAndQuery = new Uri(url).PathAndQuery;
                for (var i = 0; i < times; i++)
                {
                    if (i == times - 1)
                    {
                        respond = Send(pathAndQuery, requestData);
                    }
                    else
                    {
                        var thread =
                        new Thread(() =>
                        {
                            Send(pathAndQuery, requestData);
                        });
                        _threadList.Add(thread);
                    }
                }
                RunRequest(allDoneAct, runningAct);
                return respond;
            });
        }

        public virtual void BotSend(string url, string cookieStr, string matchFlag, int times = 1, Action allDoneAct = null, Action<int> runningAct = null)
        {
            var flagStr = "";
      
            Task.Run(() =>
            {
                InitHttpClient(url, cookieStr);
                _threadList = new List<Thread>();
                var pathAndQuery = new Uri(url).PathAndQuery;

                for (var i = 0; i < times; i++)
                {
                    var a = "{i}";
                    var requestData = $"index={i}";
                    var thread =
                    new Thread(() =>
                    {
                        var result = Send(pathAndQuery, requestData);
                        CallBackFunc(result, NotMatchFunc, matchFlag, MatchFunc);
                    });
                    _threadList.Add(thread);
                }
                RunRequest(allDoneAct, runningAct);
            });
        }

        protected virtual void MatchFunc()
        {
            //todo
        }

        protected virtual void NotMatchFunc(string index)
        {
            //todo
            MessageBox.Show(index);
        }


    }
}

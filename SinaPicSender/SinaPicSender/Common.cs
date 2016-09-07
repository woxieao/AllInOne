using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Cache;
using System.Text;

namespace SinaPicSender
{
    class Common
    {

        public static string SendRequestWithCookies(string url, string data, string cookieStr)
        {
            try
            {
                cookieStr = cookieStr.Replace("Cookie: ", "").Replace("; ", ";");
                var cookieList = cookieStr.Split(';');
                var postData = Encoding.UTF8.GetBytes(data);
                var uri = new Uri(url);
                var policy = new HttpRequestCachePolicy(HttpRequestCacheLevel.Revalidate);
                HttpWebRequest.DefaultCachePolicy = policy;
                var request = (HttpWebRequest)WebRequest.Create(uri);
                request.AllowAutoRedirect = false;
                request.AllowWriteStreamBuffering = false;
                if (!string.IsNullOrWhiteSpace(cookieStr))
                {
                    request.Host = "rm.api.weibo.com";
                    request.Referer = "http://weibo.com/p/1005051806145492/home";
                    request.CookieContainer = new CookieContainer();
                    foreach (var s in cookieList)
                    {
                        var cookie = s.Split('=');
                        try
                        {
                            request.CookieContainer.Add(new Cookie(cookie[0], cookie[1], "/", "weibo.com"));
                        }
                        catch
                        {
                        }
                    }
                }
                request.Method = "Post";
                request.ContentType = "application/x-www-form-urlencoded";
                request.ContentLength = postData.Length;
                request.KeepAlive = false;
                Stream reqStream = request.GetRequestStream();
                reqStream.Write(postData, 0, postData.Length);
                reqStream.Close();
                var response = (HttpWebResponse)request.GetResponse();
                Stream resStream = response.GetResponseStream();
                var ms = new MemoryStream();
                var buf = new byte[4096];
                int count;
                while (resStream != null && (count = resStream.Read(buf, 0, buf.Length)) > 0)
                {
                    ms.Write(buf, 0, count);
                }
                if (resStream != null) resStream.Close();
                string respond = Encoding.UTF8.GetString(ms.ToArray());
                return respond;
            }
            catch (Exception ex)
            {
                throw new Exception("发送请求时异常:\n" + ex.Message, ex);
            }
        }
    }
}

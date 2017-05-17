using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AlexXieBrain
{
    public class SpiderCore
    {
        private HttpClient _client;
        public SpiderCore()//string baseAddress
        {
            //_client = new HttpClient
            //{
            //    BaseAddress = new Uri(baseAddress),
            //};
        }


        public byte[] Get(string url)
        {
            using (var client = new HttpClient
            {
                BaseAddress = new Uri(url)
            })
            {
                return client.GetAsync(new Uri(url)).Result.Content.ReadAsByteArrayAsync().Result;
            }
        }

        //public IEnumerable<string> GetAsync(string url, int times = 1)
        //{
        //    //var uri = new Uri(url);
        //    // uri.PathAndQuery;
        //    for (var i = 0; i < times; i++)
        //    {
        //        var fileInfo = new FileInfo($"{Environment.CurrentDirectory}/{ExtensionCore.GetTimeStamp()}_i.txt");
        //        TaskCore.AsyncRun(() => Get(url), result => { Core.File.SaveFile(result, fileInfo.FullName); });
        //        yield return $"response saved to:[{fileInfo.FullName}]";
        //    }
        //}
        //public IEnumerable<string> PostAsync(string url, string content = "", int times = 1)
        //{
        //    for (var i = 0; i < times; i++)
        //    {
        //        var fileInfo = new FileInfo($"{Environment.CurrentDirectory}/{ExtensionCore.GetTimeStamp()}_i.txt");
        //        TaskCore.AsyncRun(() => Post(url, content), result => { Core.File.SaveFile(result, fileInfo.FullName); });
        //        yield return $"response saved to:[{fileInfo.FullName}]";
        //    }
        //}

        public byte[] Post(string url, string content)
        {
            using (var client = new HttpClient
            {
                BaseAddress = new Uri(url)
            })
            {
                return client.PostAsync(url, new StringContent(content)).Result.Content.ReadAsByteArrayAsync().Result;
            }
        }
    }
    public static class HttpClientExtensions
    {
        private static readonly Action<ApiLogInfo> LogAct = (data) => { };
        private static readonly bool TurnOnLog = ConfigurationManager.AppSettings[nameof(TurnOnLog)] != "false";
        private static readonly LogCore LogHelper = Core.Log;


        private static void EnsureSuccessStatusCode(Task<HttpResponseMessage> result, Action<ApiLogInfo> logAct, string content = null)
        {
            if (TurnOnLog)
            {
                var act = logAct ?? LogAct;
                var httpInfo = result.Result;
                act(new ApiLogInfo
                {
                    CreateTime = DateTime.Now,
                    Remark = string.Empty,
                    RequestData = content,
                    ResponseData = httpInfo.Content.ReadAsStringAsync().Result,
                    StatusCode = httpInfo.StatusCode,
                    Type = httpInfo.RequestMessage.Method.ToString(),
                    Url = httpInfo.RequestMessage.RequestUri.ToString(),
                    IsSuccess = true,
                });
            }
        }

        public static Task<HttpResponseMessage> PostAsyncEx(this HttpClient client, string requestUri, HttpContent content = null, Action<ApiLogInfo> logAct = null)
        {
            var dataStr = content==null?string.Empty:content.ReadAsStringAsync().Result;
            var result = client.PostAsync(requestUri, content);
            EnsureSuccessStatusCode(result, logAct, dataStr);
            return result;
        }

        public static Task<HttpResponseMessage> DeleteAsyncEx(this HttpClient client, string requestUri, Action<ApiLogInfo> logAct = null)
        {
            var result = client.DeleteAsync(requestUri);
            EnsureSuccessStatusCode(result, logAct);
            return result;
        }
        public static Task<HttpResponseMessage> PutAsyncEx(this HttpClient client, string requestUri, HttpContent content = null, Action<ApiLogInfo> logAct = null)
        {
            var dataStr = content == null ? string.Empty : content.ReadAsStringAsync().Result;
            var result = client.PutAsync(requestUri, content);
            EnsureSuccessStatusCode(result, logAct, dataStr);
            return result;
        }
        //public static Task<HttpResponseMessage> PutAsJsonAsyncEx<T>(this HttpClient client, string requestUri, T value)
        //{
        //    //var stopwatch = new Stopwatch();
        //    //stopwatch.Start();
        //    //var result = client.PutAsJsonAsync(requestUri, value);
        //    //EnsureSuccessStatusCode(result, value);
        //    //return result;
        //}
        public static Task<HttpResponseMessage> GetAsyncEx(this HttpClient client, string requestUri, Action<ApiLogInfo> logAct = null)
        {
            var result = client.GetAsync(requestUri);
            EnsureSuccessStatusCode(result, logAct);
            return result;
        }

        //public static T ReadAsAsync<T>(this Task<HttpResponseMessage> result)
        //{
        //   // return result.Result.Content.ReadAsAsync<T>().Result;
        //}
    }
    public class ApiLogInfo
    {
        public ApiLogInfo()
        {
            CreateTime = DateTime.Now;
        }
        public string Url { get; set; }
        public string RequestData { get; set; }
        public string Type { get; set; }
        public string ResponseData { get; set; }
        public string Remark { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public DateTime CreateTime { get; set; }
        public bool IsSuccess { get; set; }
    }
}

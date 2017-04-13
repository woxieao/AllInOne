using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;

using System.Net.Http;
using System.Threading.Tasks;

namespace AlexXieBrain
{
    public class SpiderCore
    {

        //public SpiderCore(string baseAddress)
        //{
        //    //      private HttpClient _client;
        //    //_client = new HttpClient
        //    //    {
        //    //        BaseAddress = new Uri(baseAddress),
        //    //    };
        //}


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

        public IEnumerable<string> GetAsync(string url, int times = 1)
        {
            //var uri = new Uri(url);
            // uri.PathAndQuery;
            for (var i = 0; i < times; i++)
            {
                var fileInfo = new FileInfo($"{Environment.CurrentDirectory}/{ExtensionCore.GetTimeStamp()}_i.txt");
                TaskCore.AsyncRun(() => Get(url), result => { Core.File.SaveFile(result, fileInfo.FullName); });
                yield return $"response saved to:[{fileInfo.FullName}]";
            }
        }
        public IEnumerable<string> PostAsync(string url, string content = "", int times = 1)
        {
            for (var i = 0; i < times; i++)
            {
                var fileInfo = new FileInfo($"{Environment.CurrentDirectory}/{ExtensionCore.GetTimeStamp()}_i.txt");
                TaskCore.AsyncRun(() => Post(url, content), result => { Core.File.SaveFile(result, fileInfo.FullName); });
                yield return $"response saved to:[{fileInfo.FullName}]";
            }
        }

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

        private static readonly bool TurnOnLog = ConfigurationManager.AppSettings[nameof(TurnOnLog)] == "true";
        private static readonly LogCore LogHelper = Core.Log;
        private static void LogRequest(Task<HttpResponseMessage> result, object data)
        {
            if (TurnOnLog)
            {
                var resultInfo = result.Result;
                LogHelper.Log(LogHelper.DefaultLogFileName, new { });
            }
        }

        private static void EnsureSuccessStatusCode(Task<HttpResponseMessage> result, object data)
        {
            LogRequest(result, data);

        }
        //public static Task<HttpResponseMessage> PostAsJsonAsyncEx<T>(this HttpClient client, string requestUri, T value)
        //{
        //    var result = client.PostAsJsonAsync(requestUri, value);
        //    EnsureSuccessStatusCode(result, value);
        //    return result;
        //}
        public static Task<HttpResponseMessage> PostAsyncEx(this HttpClient client, string requestUri, HttpContent content = null)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var result = client.PostAsync(requestUri, content);
            EnsureSuccessStatusCode(result, content);
            return result;
        }

        public static Task<HttpResponseMessage> DeleteAsyncEx(this HttpClient client, string requestUri)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var result = client.DeleteAsync(requestUri);
            EnsureSuccessStatusCode(result, null);
            return result;
        }
        public static Task<HttpResponseMessage> PutAsyncEx(this HttpClient client, string requestUri, HttpContent content = null)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var result = client.PutAsync(requestUri, content);
            EnsureSuccessStatusCode(result, content);
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
        public static Task<HttpResponseMessage> GetAsyncEx(this HttpClient client, string requestUri)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var result = client.GetAsync(requestUri);
            EnsureSuccessStatusCode(result, null);
            return result;
        }

        //public static T ReadAsAsync<T>(this Task<HttpResponseMessage> result)
        //{
        //   // return result.Result.Content.ReadAsAsync<T>().Result;
        //}
    }
}

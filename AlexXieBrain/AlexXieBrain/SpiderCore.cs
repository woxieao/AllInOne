using System;
using System.Configuration;
using System.Diagnostics;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AlexXieBrain
{
    public class SpiderCore
    {
        private readonly HttpClient Client;
        public SpiderCore(string baseAddress)
        {
            Client = new HttpClient
            {
                BaseAddress = new Uri(baseAddress),
            };
        }

    }
    public static class HttpClientExtensions
    {

        private static readonly bool TurnOnLog = ConfigurationManager.AppSettings[nameof(TurnOnLog)] == "true";
        private static readonly LogCore LogHelper = new LogCore();
        private static void LogRequest(Task<HttpResponseMessage> result, object data)
        {
            if (TurnOnLog)
            {
                var resultInfo = result.Result;
                LogHelper.Log(LogHelper.DefaultLogFileName, new { });
                Log.Log(new Log
                {
                    Category = "INFO",
                    Method = resultInfo.RequestMessage.Method.ToString(),
                    Response = resultInfo.Content.ReadAsStringAsync().Result,
                    Url = resultInfo.RequestMessage.RequestUri.ToString(),
                    Payload = JsonConvert.SerializeObject(data),
                    Message = "ApiRequest",
                });
            }
        }

        private static void EnsureSuccessStatusCode(Task<HttpResponseMessage> result, object data)
        {
            LogRequest(result, data);
            if (result.Result.StatusCode == HttpStatusCode.NotFound)
                throw new ChapiException<ExceptionCode>(ExceptionCode.ChapiNotFound);
            if (result.Result.IsSuccessStatusCode) return;
            var r = result.Result.Content.ReadAsAsync<ChapiResponse<ExceptionCode>>().Result;
            throw new ChapiException<ExceptionCode>(r.Code, r.Message);
        }
        public static Task<HttpResponseMessage> PostAsJsonAsyncEx<T>(this HttpClient client, string requestUri, T value)
        {
            var result = client.PostAsJsonAsync(requestUri, value);
            EnsureSuccessStatusCode(result, value);
            return result;
        }
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
        public static Task<HttpResponseMessage> PutAsJsonAsyncEx<T>(this HttpClient client, string requestUri, T value)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var result = client.PutAsJsonAsync(requestUri, value);
            EnsureSuccessStatusCode(result, value);
            return result;
        }
        public static Task<HttpResponseMessage> GetAsyncEx(this HttpClient client, string requestUri)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var result = client.GetAsync(requestUri);
            EnsureSuccessStatusCode(result, null);
            return result;
        }

        public static T ReadAsAsync<T>(this Task<HttpResponseMessage> result)
        {
            return result.Result.Content.ReadAsAsync<T>().Result;
        }
    }
}

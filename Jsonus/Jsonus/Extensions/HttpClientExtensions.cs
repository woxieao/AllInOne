using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Jsonus.Extensions
{

    public static class HttpClientExtensions
    {
        private static void EnsureSuccessStatusCode(HttpResponseMessage result)
        {
            //if (result.StatusCode != HttpStatusCode.)
            //    throw new ChapiException<ExceptionCode>(ExceptionCode.ChapiNotFound);
            //if (result.IsSuccessStatusCode) return;
            //var r = result.Content.ReadAsAsync<ChapiResponse<ExceptionCode>>().Result;
            //throw new ChapiException<ExceptionCode>(r.Code, r.Message);
        }
        public static Task<HttpResponseMessage> PostAsJsonAsyncEx<T>(this HttpClient client, string requestUri, T value)
        {
            var result = client.PostAsJsonAsync(requestUri, value);
            EnsureSuccessStatusCode(result.Result);
            return result;
        }
        public static Task<HttpResponseMessage> PostAsyncEx(this HttpClient client, string requestUri, HttpContent content = null)
        {
            var result = client.PostAsync(requestUri, content);
            EnsureSuccessStatusCode(result.Result);
            return result;
        }

        public static Task<HttpResponseMessage> DeleteAsyncEx(this HttpClient client, string requestUri)
        {
            var result = client.DeleteAsync(requestUri);
            EnsureSuccessStatusCode(result.Result);
            return result;
        }
        public static Task<HttpResponseMessage> PutAsyncEx(this HttpClient client, string requestUri, HttpContent content = null)
        {
            var result = client.PutAsync(requestUri, content);
            EnsureSuccessStatusCode(result.Result);
            return result;
        }
        public static Task<HttpResponseMessage> PutAsJsonAsyncEx<T>(this HttpClient client, string requestUri, T value)
        {
            var result = client.PutAsJsonAsync(requestUri, value);
            EnsureSuccessStatusCode(result.Result);
            return result;
        }
        public static Task<HttpResponseMessage> GetAsyncEx(this HttpClient client, string requestUri)
        {
            var result = client.GetAsync(requestUri);
            EnsureSuccessStatusCode(result.Result);
            return result;
        }

        public static T ReadAsAsync<T>(this Task<HttpResponseMessage> result)
        {
            return result.Result.Content.ReadAsAsync<T>().Result;
        }
    }
}

using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace GitPwdCatcher
{
    class Program
    {
        private static readonly HttpClient ApiSpider = new HttpClient()
        {
            BaseAddress = new Uri("https://api.github.com"),
        };

        static void Init()
        {
            ApiSpider.DefaultRequestHeaders.Add("User-Agent", ("Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36"));
        }
        static void Main(string[] args)
        {
            Init();
            var xxxx = ApiSpider.GetStringAsync("users/tj/followers?page=").Result;
            for (var i = 0; i < 1000; i++)
            {
                var i1 = i;
                var xx = new Thread(() =>
                {
                    var result = ApiSpider.GetStringAsync("users/tj/followers?page=" + i1);
               //     Console.WriteLine(result.Result);
                });

                xx.Start();
                Console.WriteLine(2);
            }
            Console.WriteLine(1);
        }
    }


}

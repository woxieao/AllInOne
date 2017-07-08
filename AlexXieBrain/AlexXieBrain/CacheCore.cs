using System;
using System.Runtime.Caching;
using Newtonsoft.Json;

namespace AlexXieBrain
{

    public class CacheCore

    {
        /// <summary>
        /// 默认缓存时间
        /// </summary>
        public const int CacheTime = 20;

        public CacheCore()
        {
            //todo
        }

        /// <summary>
        /// 返回当前时间/缓存时间
        /// </summary>
        /// <param name="anyParam">传入不同的数字即可刷新时间,测试本方法是否正常工作</param>
        /// <returns>当前时间</returns>
        public static DateTime Just4Test<T>(T anyParam)
        {
            return DateTime.Now;
        }

        /// <summary>
        ///清理缓存,获取即时信息 
        /// </summary>
        /// <param name="cahceName">指定缓存名称,传空字符串则释放所有缓存</param>
        public static void CleanCache(string cahceName = "")
        {
            if (string.IsNullOrEmpty(cahceName))
            {
                MemoryCache.Default.Dispose();
            }
            else
            {
                MemoryCache.Default.Remove(cahceName);
            }
        }

        /// <summary>
        /// 根据委托方法名称,参数初始化缓存名称
        /// </summary>
        /// <param name="func">委托</param>
        /// <param name="paramList">委托方法的参数集合</param>
        /// <returns>缓存名</returns>
        private static string FormatCacheName(Delegate func, params dynamic[] paramList)
        {
            try
            {
                var funcName = $"{func.Target}.{func.Method}";
                var argsStr = string.Empty;
                foreach (var param in paramList)
                {
                    var valueType = param?.GetType().ToString() ?? "NULL";
                    argsStr += $"[{valueType}:{JsonConvert.SerializeObject(param)}]";
                }
                return $"{funcName}[{ EncryptCore.GetMd5(argsStr)}]";
            }
            catch (Exception ex)
            {
                throw new Exception("格式化缓存名称时出错", ex);
            }
        }

        /// <summary>
        /// 返还缓存的过期时间
        /// </summary>
        /// <param name="cacheTime">缓存时间</param>
        /// <param name="isAbsoluteExpiration">true:绝对过期时间/false:相对过期时间</param>
        /// <returns>CacheItemPolicy对象</returns>
        private static CacheItemPolicy GetCacheItemPolicy(int cacheTime, bool isAbsoluteExpiration)
        {
            var cacheItemPolicy = new CacheItemPolicy();
            if (isAbsoluteExpiration)
            {
                cacheItemPolicy.AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(cacheTime);
            }
            else
            {
                cacheItemPolicy.SlidingExpiration = new TimeSpan(0, cacheTime, 0);
            }
            return cacheItemPolicy;
        }


        public static TResult GetCache<TResult>(Func<TResult> func,
        int cacheTime = CacheTime,
        bool isRefresh = false, bool isAbsoluteExpiration = true)
        {
            try
            {
                var cacheName = FormatCacheName(func);
                var cacheData = MemoryCache.Default.Get(cacheName);
                if (cacheData == null || isRefresh)
                {
                    var data = func();
                    MemoryCache.Default.Set(cacheName, data, GetCacheItemPolicy(cacheTime, isAbsoluteExpiration));
                    return data;
                }
                else
                {
                    return (TResult)cacheData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("处理缓存时出错 " + ex.Message, ex);
            }
        }
        /// <summary>
        /// 调用委托方法并将结果存入缓存
        /// </summary>
        /// <typeparam name="TResult">委托的返回值类型</typeparam>
        /// <typeparam name="T0">委托的第一个参数</typeparam>
        /// <param name="func">委托</param>
        /// <param name="t0">委托的第一个参数</param>
        /// <param name="cacheTime">缓存时间</param>
        /// <param name="isRefresh">是否强制刷新</param>
        /// <param name="isAbsoluteExpiration">true:绝对过期时间/false:相对过期时间</param>
        /// <returns>委托的返回值</returns>
        public static TResult GetCache<T0, TResult>(Func<T0, TResult> func,
            T0 t0,
            int cacheTime = CacheTime,
            bool isRefresh = false
            , bool isAbsoluteExpiration = true)
        {
            try
            {
                var cacheName = FormatCacheName(func, t0);
                var cacheData = MemoryCache.Default.Get(cacheName);
                if (cacheData == null || isRefresh)
                {
                    var data = func(t0);
                    MemoryCache.Default.Set(cacheName, data, GetCacheItemPolicy(cacheTime, isAbsoluteExpiration));
                    return data;
                }
                else
                {
                    return (TResult)cacheData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("处理缓存时出错 " + ex.Message, ex);
            }
        }

        public static TResult GetCache<T0, T1, TResult>(Func<T0, T1, TResult> func,
            T0 t0,
            T1 t1,
            int cacheTime = CacheTime,
            bool isRefresh = false,
            bool isAbsoluteExpiration = true)
        {
            try
            {
                var cacheName = FormatCacheName(func, t0, t1);
                var cacheData = MemoryCache.Default.Get(cacheName);
                if (cacheData == null || isRefresh)
                {
                    var data = func(t0, t1);
                    MemoryCache.Default.Set(cacheName, data, GetCacheItemPolicy(cacheTime, isAbsoluteExpiration));
                    return data;
                }
                else
                {
                    return (TResult)cacheData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("处理缓存时出错 " + ex.Message, ex);
            }
        }

        public static TResult GetCache<T0, T1, T2, TResult>(Func<T0, T1, T2, TResult> func,
            T0 t0,
            T1 t1,
            T2 t2,
            int cacheTime = CacheTime,
            bool isRefresh = false,
            bool isAbsoluteExpiration = true)
        {
            try
            {
                var cacheName = FormatCacheName(func, t0, t1, t2);
                var cacheData = MemoryCache.Default.Get(cacheName);
                if (cacheData == null || isRefresh)
                {
                    var data = func(t0, t1, t2);
                    MemoryCache.Default.Set(cacheName, data, GetCacheItemPolicy(cacheTime, isAbsoluteExpiration));
                    return data;
                }
                else
                {
                    return (TResult)cacheData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("处理缓存时出错 " + ex.Message, ex);
            }
        }

        public static TResult GetCache<T0, T1, T2, T3, TResult>(
            Func<T0, T1, T2, T3, TResult> func,
            T0 t0,
            T1 t1,
            T2 t2,
            T3 t3,
            int cacheTime = CacheTime,
            bool isRefresh = false,
            bool isAbsoluteExpiration = true)
        {
            try
            {
                var cacheName = FormatCacheName(func, t0, t1, t2, t3);
                var cacheData = MemoryCache.Default.Get(cacheName);
                if (cacheData == null || isRefresh)
                {
                    var data = func(t0, t1, t2, t3);
                    MemoryCache.Default.Set(cacheName, data, GetCacheItemPolicy(cacheTime, isAbsoluteExpiration));
                    return data;
                }
                else
                {
                    return (TResult)cacheData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("处理缓存时出错 " + ex.Message, ex);
            }
        }


        public static TResult GetCache<T0, T1, T2, T3, T4, TResult>(
            Func<T0, T1, T2, T3, T4, TResult> func,
            T0 t0,
            T1 t1,
            T2 t2,
            T3 t3,
            T4 t4,
            int cacheTime = CacheTime,
            bool isRefresh = false,
            bool isAbsoluteExpiration = true)
        {
            try
            {
                var cacheName = FormatCacheName(func, t0, t1, t2, t3, t4);
                var cacheData = MemoryCache.Default.Get(cacheName);
                if (cacheData == null || isRefresh)
                {
                    var data = func(t0, t1, t2, t3, t4);
                    MemoryCache.Default.Set(cacheName, data, GetCacheItemPolicy(cacheTime, isAbsoluteExpiration));
                    return data;
                }
                else
                {
                    return (TResult)cacheData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("处理缓存时出错 " + ex.Message, ex);
            }
        }
    }
}
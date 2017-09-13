using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Dynamic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AlexXieBrain
{
    public static class ExtensionCore
    {
        public static string GetTimeStamp()
        {
            return DateTime.Now.ToString("yyyyMMddHHmmss");
        }
        public static string GetTimeStamp()
        {
            return DateTime.Now.ToString("yyyyMMddHHmmss");
        }
        private static void Copy2Dynamic<T>(T sourceData, IDictionary<string, object> resultRef) where T : class
        {
            if (sourceData == null)
            {
                return;
            }
            foreach (var pi in sourceData.ToJobj().Properties())
            {
                resultRef[pi.Name] = pi.Value;
            }
        }

        private static void SetVal<T0>(Func<T0, object> combineValFunc, T0 sourceData, IDictionary<string, object> resultRef) where T0 : class
        {
            if (sourceData == null)
            {
                return;
            }
            var result = combineValFunc(sourceData);
            Copy2Dynamic(result, resultRef);
        }

        /// <summary>
        /// create a new dynamic object not reference sourceData
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="sourceData">sourceData</param>
        /// <returns>new dynamic object not reference sourceData</returns>
        public static IDictionary<string, object> ToDynamic<T>(this T sourceData) where T : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            Copy2Dynamic(sourceData, result);
            return result;
        }

        /// <summary>
        /// create a new dynamic object not reference sourceData
        /// </summary>
        /// <typeparam name="T0"></typeparam>
        /// <typeparam name="T1"></typeparam>
        /// <param name="sourceData">sourceData</param>
        /// <param name="combineVal">combineValue</param>
        /// <returns>new dynamic object not reference sourceData</returns>
        public static IDictionary<string, object> ToDynamic<T0, T1>(this T0 sourceData, T1 combineVal)
            where T0 : class
            where T1 : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            Copy2Dynamic(sourceData, result);
            Copy2Dynamic(combineVal, result);
            return result;
        }

        public static IDictionary<string, object> ToDynamic<T0, T1>(this T0 sourceData, Func<T0, T1> combineValFunc)
            where T0 : class
            where T1 : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            Copy2Dynamic(sourceData, result);
            SetVal(combineValFunc, sourceData, result);
            return result;
        }

        public static IDictionary<string, object> ToDynamic<T0, T1, T2>(this T0 sourceData, T1 combineVal0, T2 combineVal1)
            where T0 : class
            where T1 : class
            where T2 : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            Copy2Dynamic(sourceData, result);
            Copy2Dynamic(combineVal0, result);
            Copy2Dynamic(combineVal1, result);
            return result;
        }

        public static IEnumerable<IDictionary<string, object>> ToDynamicList<T>(this IEnumerable<T> sourceDataList) where T : class
        {
            var resultList = new List<IDictionary<string, object>>();
            foreach (var sourceData in sourceDataList)
            {
                resultList.Add(sourceData.ToDynamic());
            }
            return resultList;
        }

        public static IEnumerable<IDictionary<string, object>> ToDynamicList<T0, T1>(this IEnumerable<T0> sourceDataList, Func<T0, T1> func)
            where T0 : class
            where T1 : class
        {
            var resultList = new List<IDictionary<string, object>>();
            foreach (var sourceData in sourceDataList)
            {
                resultList.Add(sourceData.ToDynamic(func));
            }
            return resultList;
        }


        public static JObject ToJobj<T>(this T source)
        {
            var serialized = JsonConvert.SerializeObject(source);
            return JObject.Parse(serialized);
            //return JsonConvert.DeserializeObject<T>(serialized);
        }
        public static T SimpleClone<T>(this T source) where T : class
        {
            var serialized = JsonConvert.SerializeObject(source);
            return JsonConvert.DeserializeObject<T>(serialized);
        }


        public static T DeepClone<T>(this T source)
        {
            if (!typeof(T).IsSerializable)
            {
                throw new ArgumentException("The type must be serializable.", nameof(source));
            }
            if (ReferenceEquals(source, null))
            {
                return default(T);
            }
            using (var stream = new MemoryStream())
            {
                var formatter = new BinaryFormatter();
                formatter.Serialize(stream, source);
                stream.Seek(0, SeekOrigin.Begin);
                return (T)formatter.Deserialize(stream);
            }
        }

        public static T As<T>(this byte[] bytes)
        {
            return JsonConvert.DeserializeObject<T>(System.Text.Encoding.UTF8.GetString(bytes));
        }

        /// <summary>
        /// run action ant reckon time 
        /// </summary>
        /// <param name="act"></param>
        /// <param name="times"></param>
        /// <param name="description"></param>
        /// <returns>Action Run ElapsedTicks</returns>
        public static long RunAndTime(this Action act, int times = 1, string description = "")
        {
            times = times <= 0 ? 1 : times;
            var stopWatch = new Stopwatch();
            stopWatch.Start();
            for (var i = 0; i < times; i++)
            {
                act();
            }
            var ticks = stopWatch.ElapsedTicks;
            if (!string.IsNullOrEmpty(description))
            {
                Console.WriteLine($"[{description}][EachTurn]:{ticks / times}");
            }
            return ticks;
        }
        private static string FastCheckStr(this string strToCheck, int currentIndex, WordTree wordTree)
        {
            if (currentIndex >= strToCheck.Length)
            {
                return null;
            }
            else
            {
                if (wordTree.Children.TryGetValue(strToCheck[currentIndex], out WordTree dict))
                {
                    return dict.IsEnd ? dict.WhoAmI() : strToCheck.FastCheckStr(++currentIndex, dict);
                }
                else
                {
                    return null;
                }
            }
        }
        public static string IsContains(string str, IEnumerable<string> strList)
        {
            if (string.IsNullOrEmpty(str) || strList == null)
            {
                return string.Empty;
            }
            else
            {
                var wordTree = new WordTree();
                foreach (var s in strList)
                {
                    wordTree.PushIn(s);
                }
                str = str.ToUpper();
                for (var i = 0; i < str.Length; i++)
                {
                    var word = str.FastCheckStr(i, wordTree);
                    if (word != null)
                    {
                        return word;
                    }
                }
                return string.Empty;
            }
        }
    }
}

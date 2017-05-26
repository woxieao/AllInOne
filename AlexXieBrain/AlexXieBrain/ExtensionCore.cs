using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Dynamic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Newtonsoft.Json;

namespace AlexXieBrain
{
    public static class ExtensionCore
    {
        public static string GetTimeStamp()
        {
            return DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss");
        }

        private static void SetVal<T>(T sourceDataRef, IDictionary<string, object> resultRef) where T : class
        {
            var localData = sourceDataRef.SimpleClone();
            foreach (var pi in localData.GetType().GetProperties())
            {
                var val = pi.GetValue(localData);
                resultRef[pi.Name] = val;
            }
        }

        /// <summary>
        /// create a new dynamic object not reference sourceData
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="sourceData">sourceData</param>
        /// <returns>new dynamic object not reference sourceData</returns>
        public static dynamic ToDynamic<T>(this T sourceData) where T : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            SetVal(sourceData, result);
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
        public static dynamic ToDynamic<T0, T1>(this T0 sourceData, T1 combineVal)
            where T0 : class
            where T1 : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            SetVal(sourceData, result);
            SetVal(combineVal, result);
            return result;
        }

        public static dynamic ToDynamic<T0, T1>(this T0 sourceData, Func<T0, T1> combineValFunc)
            where T0 : class
            where T1 : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            SetVal(sourceData, result);
            SetVal(combineValFunc(sourceData), result);
            return result;
        }

        public static dynamic ToDynamic<T0, T1, T2>(this T0 sourceData, T1 combineVal0, T2 combineVal1)
            where T0 : class
            where T1 : class
            where T2 : class
        {
            IDictionary<string, object> result = new ExpandoObject();
            SetVal(sourceData, result);
            SetVal(combineVal0, result);
            SetVal(combineVal1, result);
            return result;
        }

        public static IEnumerable<dynamic> ToDynamicList<T>(this IEnumerable<T> sourceDataList) where T : class
        {
            var resultList = new List<IDictionary<string, object>>();
            foreach (var sourceData in sourceDataList)
            {
                resultList.Add(sourceData.ToDynamic());
            }
            return resultList;
        }

        public static IEnumerable<dynamic> ToDynamicList<T0, T1>(this IEnumerable<T0> sourceDataList, Func<T0, T1> func)
            where T0 : class
            where T1 : class
        {
            var resultList = new List<IDictionary<string, object>>();
            foreach (var sourceData in sourceDataList)
            {
                resultList.Add(sourceData.ToDynamic(func(sourceData)));
            }
            return resultList;
        }

        public static T SimpleClone<T>(this T source)
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

        public static void When_<T>(this T val, params Action<Func<T, bool>>[] cases)
        {
            //if (check(val))
            //{
            //    act();
            //}
        }
    }
}

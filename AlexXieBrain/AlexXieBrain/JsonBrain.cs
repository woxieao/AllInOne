using Newtonsoft.Json;

namespace AlexXieBrain
{
    public static class JsonBrain
    {
        public static string SerializeToJsonStr<T>(this T stuff)
        {
            return JsonConvert.SerializeObject(stuff);
        }
        public static T ConverTo<T>(this string jsonStr)
        {
            return JsonConvert.DeserializeObject<T>(jsonStr);
        }
    }
}

using System;

namespace AlexXieBrain
{
    //public class JsonConvert
    //{
    //    private static Func<object, string> _serializeObject;
    //    private static Func<string, object> _deserializeObject;
    //    public JsonConvert(Func<object, string> serializeObjectFunc, Func<string, object> deserializeObjectFunc)
    //    {
    //        _serializeObject = serializeObjectFunc;
    //        _deserializeObject = deserializeObjectFunc;
    //    }
    //    public static bool IsInited()
    //    {
    //        return _serializeObject != null && _deserializeObject != null;
    //    }
    //    public static string SerializeObject<T>(T stuff)
    //    {
    //        if (_serializeObject == null)
    //        {
    //            throw new MsgException("若要序列化,请先在构造函数中初始化序列化方法");
    //        }
    //        return _serializeObject(stuff);
    //    }

    //    public static T DeserializeObject<T>(string jsonStr)
    //    {
    //        if (_deserializeObject == null)
    //        {
    //            throw new MsgException("若要反序列化,请先在构造函数中初始化反序列化方法");
    //        }
    //        return (T)_deserializeObject(jsonStr);
    //    }
    //}
}

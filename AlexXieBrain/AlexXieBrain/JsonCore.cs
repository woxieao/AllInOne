using System;

namespace AlexXieBrain
{

    //public static class JsonCore
    //{
    //    private static Func<object, string> _serializeObject;
    //    private static Func<string, object> _deserializeObject;
    //    public static void Init(Func<object, string> serializeObjectFunc, Func<string, object> deserializeObjectFunc)
    //    {
    //        _serializeObject = serializeObjectFunc;
    //        _deserializeObject = deserializeObjectFunc;
    //    }
    //    public static string SerializeToJsonStr<T>(T stuff)
    //    {
    //        if (_serializeObject == null)
    //        {
    //            throw new MsgException("若要序列化,请先初始化序列化方法");
    //        }
    //        return _serializeObject(stuff);
    //    }
    //    public static T ConverTo<T>(string jsonStr)
    //    {
    //        if (_deserializeObject == null)
    //        {
    //            throw new MsgException("若要反序列化,请先初始化反序列化方法");
    //        }
    //        return (T)_deserializeObject(jsonStr);
    //    }
    //}
}

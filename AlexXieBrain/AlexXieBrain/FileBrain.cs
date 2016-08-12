using System;
using Newtonsoft.Json;

namespace AlexXieBrain
{
    public class FileBrain
    {
        public readonly static string DefaultSavePath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);

        public void SaveAsJson<T>(T stuff, string savePath)
        {

        }
        public T ReadAsJson<T>(string savePath)
        {
            return ReadAsString(savePath).ConverTo<T>();
        }

        public string ReadAsString(string savePath)
        {
            //todo 
            return string.Empty;
        }
    }
}

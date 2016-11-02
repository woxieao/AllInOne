using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace AlexXieBrainv
{
    public class FileCore
    {
        public readonly static string DefaultSavePath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);

        public DirectoryInfo[] GetFolderList(string dirPath)
        {
            var a = new DirectoryInfo(dirPath);
            return a.GetDirectories();
        }

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

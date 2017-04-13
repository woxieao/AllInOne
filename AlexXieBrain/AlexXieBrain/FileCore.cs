using System;
using System.IO;

namespace AlexXieBrain
{
    public class FileCore
    {
        public readonly string DefaultSaveFolder = $"{Environment.GetFolderPath(Environment.SpecialFolder.Desktop)}/AlexXieBrain/";
        public readonly string CurrentFilePath = $"{Environment.CurrentDirectory}/";
        public DirectoryInfo[] GetFolderList(string dirPath)
        {
            var a = new DirectoryInfo(dirPath);
            return a.GetDirectories();
        }

        public void SaveAsString(string stuff, string savePath, bool append = true)
        {
            var directoryInfo = new FileInfo(savePath).Directory;
            if (directoryInfo != null)
            {
                var dir = directoryInfo.FullName;
                if (!Directory.Exists(dir))
                {
                    Directory.CreateDirectory(dir);
                }
            }
            using (var sw = new StreamWriter(savePath, append))
            {
                sw.Write(stuff);
            }
        }
        public void SaveAsJson<T>(T stuff, string savePath, bool append = true)
        {
            CreateIfNotExist(savePath);
            using (var sw = new StreamWriter(savePath, append))
            {
                sw.Write(stuff.SerializeToJsonStr());
            }
        }

        public T ReadAsJson<T>(string savePath)
        {
            return ReadAsString(savePath).ConverTo<T>();
        }

        public string ReadAsString(string savePath)
        {
            using (var sr = new StreamReader(savePath))
            {
                return sr.ReadToEnd();
            }
        }

        public void CreateIfNotExist(string filePath, string defaultValue = "")
        {
            if (!File.Exists(filePath))
            {
                SaveAsString(defaultValue, filePath, false);
            }
        }

        public void SaveFile(byte[] buffer, string fileFullPath)
        {
            CreateIfNotExist(fileFullPath);
            File.WriteAllBytes(fileFullPath, buffer);
        }
    }
}

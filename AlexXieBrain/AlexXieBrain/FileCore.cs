using System;
using System.IO;
using System.Text;
using Newtonsoft.Json;

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
            CreateDirectoryIfNotExist(savePath);
            using (var sw = new StreamWriter(savePath, append, Encoding.UTF8))
            {
                sw.Write(stuff);
            }
        }
        public void SaveAsJson<T>(string savePath, T stuff, bool append = true)
        {
            CreateDirectoryIfNotExist(savePath);
            using (var sw = new StreamWriter(savePath, append, Encoding.UTF8))
            {
                sw.Write(JsonConvert.SerializeObject(stuff) + "\r\n");
            }
        }

        public T ReadAsJson<T>(string savePath)
        {
            return JsonConvert.DeserializeObject<T>(ReadAsString(savePath));
        }

        public string ReadAsString(string savePath)
        {
            using (var sr = new StreamReader(savePath, Encoding.UTF8))
            {
                return sr.ReadToEnd();
            }
        }

        public void CreateDirectoryIfNotExist(string filePath)
        {
            var directoryInfo = new FileInfo(filePath).Directory;
            if (directoryInfo != null)
            {
                var dir = directoryInfo.FullName;
                if (!Directory.Exists(dir))
                {
                    Directory.CreateDirectory(dir);
                }
            }
        }

        public void SaveFile(byte[] buffer, string fileFullPath)
        {
            CreateDirectoryIfNotExist(fileFullPath);
            File.WriteAllBytes(fileFullPath, buffer);
        }
    }
}

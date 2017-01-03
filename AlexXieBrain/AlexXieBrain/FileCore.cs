using System;
using System.IO;

namespace AlexXieBrain
{
    public class FileCore
    {
        public readonly string DefaultSaveFolder = $"{Environment.GetFolderPath(Environment.SpecialFolder.Desktop)}/AlexXieBrain";

        public DirectoryInfo[] GetFolderList(string dirPath)
        {
            var a = new DirectoryInfo(dirPath);
            return a.GetDirectories();
        }

        public void SaveAsString<T>(T stuff, string savePath, bool append = true)
        {
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

        public void SaveFile(byte[] buffer, string fileFullPath)
        {
            using (var stream = new MemoryStream(buffer))
            {
                File.WriteAllBytes(fileFullPath, stream.GetBuffer());
            }
        }
    }
}

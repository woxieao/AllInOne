using System;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AlexXieBrain
{
    public class LogCore
    {

        public readonly string DefaultLogFileName;
        private readonly FileCore _fileHelper = Core.File;
        public readonly string DefaultSaveFolder;
        public long MaxLogFileSize = 1024 * 1024;
        public LogCore()
        {
            DefaultSaveFolder = _fileHelper.DefaultSaveFolder;
            DefaultLogFileName = $"{DefaultSaveFolder}/log.txt";
        }
        public virtual void LogInDesktop<T>(T stuff, bool append = true)
        {
            _fileHelper.SaveAsString($"LOG:\r\n[{DateTime.Now}]\r\n[{JsonConvert.SerializeObject(stuff)}]\r\n", DefaultLogFileName, append);
        }
   
        public void Log<T>(string logFilePath, T stuff)
        {
            var filePath = $"{DefaultSaveFolder}/{logFilePath}";
            if (File.Exists(filePath) && new FileInfo(filePath).Length >= MaxLogFileSize)
            {
                filePath = $"{DefaultSaveFolder}/log-{ExtensionCore.GetTimeStamp()}.txt";
            }
            _fileHelper.SaveAsJson(stuff, filePath);
        }
    }
}

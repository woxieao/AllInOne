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
        public string StampLogName => $"log.{ExtensionCore.GetTimeStamp()}.txt";

        public LogCore()
        {
            DefaultSaveFolder = _fileHelper.DefaultSaveFolder;
            DefaultLogFileName = $"{DefaultSaveFolder}/{StampLogName}";
        }
        public virtual void LogInDesktop<T>(T stuff, bool append = true)
        {
            Log(DefaultLogFileName, new { LogTime = DateTime.Now, LogDetail = JsonConvert.SerializeObject(stuff) }, append);
        }

        public void Log<T>(string logFilePath, T stuff, bool append = true)
        {
            _fileHelper.SaveAsJson(logFilePath, stuff, append);
        }
    }
}

using System;
using System.IO;

namespace AlexXieBrain
{
    public class LogCore
    {
        public readonly string DefaultLogFileName;
        private readonly FileCore _fileHelper;
        public readonly string DefaultSaveFolder;
        public long MaxLogFileSize = 1024 * 1024;
        public LogCore()
        {
            _fileHelper = new FileCore();
            DefaultSaveFolder = _fileHelper.DefaultSaveFolder;
            DefaultLogFileName = $"{DefaultSaveFolder}/log.txt";
        }
        public void LogInDesktop<T>(T stuff, bool append = true)
        {
            _fileHelper.SaveAsJson(stuff, DefaultLogFileName, append);
        }
        public void Log<T>(string logFilePath, T stuff)
        {
            var filePath = $"{DefaultSaveFolder}/{logFilePath}";
            if (File.Exists(filePath) && new FileInfo(filePath).Length >= MaxLogFileSize)
            {
                filePath = $"{DefaultSaveFolder}/log-{(DateTime.Now - new DateTime(1970, 1, 1)).TotalMilliseconds}.txt";
            }
            _fileHelper.SaveAsJson(stuff, filePath);
        }
    }
}


using System;
using System.IO;

namespace VideoCuter
{
    internal class VideoInfo
    {
        const string OutputFlag = ".cut";
        public double StartIndex { get; set; }
        public double EndPoint { get; set; }
        public string FileOriginalPath { get; set; }
        public string FileName => new FileInfo(FileOriginalPath).Name;
        public string FileOutputPath
        {
            get
            {
                var index = FileOriginalPath.LastIndexOf(".", StringComparison.Ordinal);
                if (index != -1)
                {
                    return FileOriginalPath.Substring(0, index) + OutputFlag + FileOriginalPath.Substring(index);
                }
                else
                {
                    return FileOriginalPath;
                }
            }
        }
        public bool IsFinish { get; set; }
    }
}

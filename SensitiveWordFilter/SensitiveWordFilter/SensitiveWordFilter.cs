using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;

namespace SensitiveWordFilter
{
    public class SensitiveWordFilter
    {
        public static HashSet<string> SensitiveWordList;
        public static DateTime ExcelLastWriteTime;
        public static readonly string TextFilePath;
        public const string SensitiveWordsExcelFileName = "SensitiveWords.txt";

        static SensitiveWordFilter()
        {
            TextFilePath = string.IsNullOrEmpty(ConfigurationManager.AppSettings["SensitiveWordsPath"]) ? System.Web.HttpContext.Current.Server.MapPath($"~/{SensitiveWordsExcelFileName}") : ConfigurationManager.AppSettings["SensitiveWordsPath"];

            var fileInfo = new FileInfo(TextFilePath);
            if (!fileInfo.Exists)
            {
                throw new FileNotFoundException($"敏感词文件[{fileInfo.FullName}]不存在,\n" +
                                                $"请将敏感词文件{SensitiveWordsExcelFileName}放入项目根目录\n"
                                                + $"或\n配置web.config中的\"SensitiveWordsPath\"字段为路径后重试");
            }
        }
        public SensitiveWordFilter()
        {
            if (SensitiveWordList == null || IsUpdated(TextFilePath))
            {
                InitWordsData(TextFilePath);
            }
        }
        private void InitWordsData(string filePath)
        {
            using (var sr = new StreamReader(filePath))
            {
                if (SensitiveWordList != null)
                {
                    SensitiveWordList.Clear();
                }
                else
                {
                    SensitiveWordList = new HashSet<string>();
                }
                while (sr.Peek() > -1)
                {
                    var word = sr.ReadLine();
                    if (!string.IsNullOrEmpty(word))
                    {
                        SensitiveWordList.Add(word);
                    }
                }
            }
        }
        private bool IsUpdated(string filePath)
        {
            var fileInfo = new FileInfo(filePath);
            return fileInfo.Exists && fileInfo.LastWriteTime > ExcelLastWriteTime;
        }

        private IEnumerable<string> LoadWords(string filePath)
        {
            if (IsUpdated(filePath))
            {
                InitWordsData(filePath);
            }
            return SensitiveWordList;
        }
        public string HasSensitiveWord(string str)
        {
            var wordsData = LoadWords(TextFilePath);
            var result = wordsData.FirstOrDefault(i => str.IndexOf(i, StringComparison.CurrentCultureIgnoreCase) != -1);
            return result ?? string.Empty;
        }
    }
}

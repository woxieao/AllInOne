using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web.Helpers;

namespace SensitiveWordFilter
{
    public class SensitiveWordCore
    {
        #region 变量
        private static List<SensitiveWordPackage> _sensitiveWordList;
        public static DateTime ExcelLastWriteTime;
        public static readonly string TextFilePath;
        public const string SensitiveWordsExcelFileName = "SensitiveWords.txt";
        #endregion

        #region 构造函数
        static SensitiveWordCore()
        {
            TextFilePath = string.IsNullOrEmpty(ConfigurationManager.AppSettings["SensitiveWordsPath"]) ? System.Web.HttpContext.Current.Server.MapPath($"~/{SensitiveWordsExcelFileName}") : ConfigurationManager.AppSettings["SensitiveWordsPath"];
        }

        public SensitiveWordCore()
        {
            GetSensitiveWordPackage();
        }
        #endregion

        #region 私有函数
        private FileInfo GetFile(string dataPath, bool thr = true)
        {
            var fileInfo = new FileInfo(dataPath);
            if (!fileInfo.Exists && thr)
            {
                throw new FileNotFoundException($"敏感词文件[{fileInfo.FullName}]不存在,\n" +
                                                $"请将敏感词文件{SensitiveWordsExcelFileName}放入项目根目录\n"
                                                + $"或\n配置web.config中的\"SensitiveWordsPath\"字段为路径后重试");
            }
            return fileInfo;
        }

        private bool IsUpdated(string filePath)
        {
            var fileInfo = GetFile(filePath, false);
            var flag = fileInfo.Exists && fileInfo.LastWriteTime > ExcelLastWriteTime;
            if (flag)
            {
                ExcelLastWriteTime = fileInfo.LastWriteTime;
            }
            return flag;
        }

        private static string GetSpanData(string flag, ref string baseStr)
        {
            var startFlag = $"#{flag}#";
            var endFlag = $"#{flag}e#";
            var startIndex = baseStr.IndexOf(startFlag, StringComparison.Ordinal);
            if (startIndex != -1)
            {
                var endIndex = baseStr.IndexOf(endFlag, StringComparison.Ordinal);
                var result = baseStr.Substring(startIndex + startFlag.Length, endIndex - startIndex - startFlag.Length);
                baseStr = baseStr.Substring(endIndex + endFlag.Length);
                return result;
            }
            else
            {
                return string.Empty;
            }
        }
        private static List<string> GetStrList(string dataListStr)
        {
            return dataListStr.Split(new[] { Environment.NewLine }, StringSplitOptions.None).Where(i => !string.IsNullOrWhiteSpace(i)).ToList();
        }
        private void InitWordsData(string filePath)
        {
            string dataStr;
            const string packageFlag = "p";
            const string verbFlag = "v";
            const string nounFlag = "n";
            const string exclusiveNounsFlag = "e";
            using (var sr = new StreamReader(GetFile(filePath).FullName))
            {

                dataStr = sr.ReadToEnd();
            }
            var tempList = new List<SensitiveWordPackage>();
            while (true)
            {
                var package = GetSpanData(packageFlag, ref dataStr);
                if (string.IsNullOrEmpty(package))
                {
                    break;
                }
                var packageData = package;
                tempList.Add(new SensitiveWordPackage
                {
                    VerbList = GetStrList(GetSpanData(verbFlag, ref packageData)),
                    NounList = GetStrList(GetSpanData(nounFlag, ref packageData)),
                    ExclusiveNounsList = GetStrList(GetSpanData(exclusiveNounsFlag, ref packageData)),
                });
            }
            if (tempList == null || !tempList.Any())
            {
                throw new ArgumentNullException("敏感词文件序列化结果为空");
            }
            _sensitiveWordList = tempList;
        }

        #endregion

        #region 公共函数
        public List<SensitiveWordPackage> GetSensitiveWordPackage()
        {
            if (_sensitiveWordList == null || IsUpdated(TextFilePath))
            {
                InitWordsData(TextFilePath);
            }
            return _sensitiveWordList;
        }

        public string HasSensitiveWord(string str)
        {
            if (string.IsNullOrEmpty(str))
            {
                return string.Empty;
            }
            else
            {
                str = str.ToUpper();
                var wordsData = GetSensitiveWordPackage();
                foreach (var package in wordsData)
                {
                    foreach (var word in package.ExclusiveNounsList)
                    {
                        if (str.ContainsSenstiveWord(word))
                        {
                            return word;
                        }
                    }
                    var firstArr = package.NounList.Count > package.VerbList.Count ? package.VerbList : package.NounList;
                    var secondArr = package.NounList.Count > package.VerbList.Count ? package.NounList : package.VerbList;
                    var firstWord = string.Empty;
                    foreach (var word in firstArr)
                    {
                        if (str.ContainsSenstiveWord(word))
                        {
                            firstWord = word;
                            break;
                        }
                    }
                    if (string.IsNullOrEmpty(firstWord))//&& firstWord.Any()
                    {
                        continue;
                    }
                    else
                    {
                        var secondWord = string.Empty;
                        foreach (var word in secondArr)
                        {
                            if (str.ContainsSenstiveWord(word))
                            {
                                secondWord = word;
                                break;
                            }
                        }
                        if (string.IsNullOrEmpty(secondWord))//&& secondArr.Any()
                        {
                            continue;
                        }
                        else
                        {
                            var strAdded1 = firstWord + secondWord;
                            var strAdded2 = secondWord + firstWord;
                            if (str.ContainsSenstiveWord(strAdded1))
                            {
                                return strAdded1;
                            }
                            else if (str.ContainsSenstiveWord(strAdded2))
                            {
                                return strAdded2;
                            }
                            else
                            {
                                continue;
                            }
                        }
                    }
                }
                return string.Empty;
            }
        }

        #endregion
    }

    internal static class SensitiveWordHelper
    {
        public static bool ContainsSenstiveWord(this string strToCheck, string someSenstiveWord)
        {
            return strToCheck.IndexOf(someSenstiveWord, StringComparison.Ordinal) != -1;
        }
        //public static bool ContainsSenstiveWord(this string strToCheck, string someSenstiveWord)
        //{
        //    if (string.IsNullOrEmpty(strToCheck) || string.IsNullOrEmpty(someSenstiveWord))
        //    {
        //        return false;
        //    }
        //    var strToCheckLen = strToCheck.Length;
        //    var someSenstiveWordLen = someSenstiveWord.Length;
        //    return strToCheck.Length >= someSenstiveWord.Length && strToCheck.PrivateContainsSenstiveWord(someSenstiveWord, strToCheckLen, someSenstiveWordLen, 0, 0);
        //}

        /// <summary>
        /// check is contain some word
        /// </summary>
        /// <param name="strToCheck">the string has been to upper</param>
        /// <param name="someSenstiveWord">the string has been to upper</param>
        /// <param name="strToCheckLen"></param>
        /// <param name="someSenstiveWordLen"></param>
        /// <param name="indexI"></param>
        /// <param name="indexX"></param>
        /// <returns></returns>
        private static bool PrivateContainsSenstiveWord(this string strToCheck, string someSenstiveWord, int strToCheckLen, int someSenstiveWordLen, int indexI, int indexX)
        {
            if (indexX < someSenstiveWordLen)
            {
                for (var i = indexI; i < strToCheckLen; i++)
                {
                    if (strToCheck[i] == someSenstiveWord[indexX])
                    {
                        if (indexX == someSenstiveWordLen - 1)
                        {
                            return true;
                        }
                        else
                        {
                            return strToCheck.PrivateContainsSenstiveWord(someSenstiveWord, strToCheckLen, someSenstiveWordLen, i + 1, indexX + 1);
                        }
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            else
            {
                return false;
            }
            return false;
        }
    }
}

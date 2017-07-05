﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.Helpers;

namespace SensitiveWordFilter
{
    public class SensitiveWordCore
    {
        #region 变量
        public static DateTime ExcelLastWriteTime;
        public static readonly string TextFilePath = string.IsNullOrEmpty(ConfigurationManager.AppSettings["SensitiveWordsPath"]) ? System.Web.HttpContext.Current.Server.MapPath($"~/{SensitiveWordsExcelFileName}") : ConfigurationManager.AppSettings["SensitiveWordsPath"];

        private static WordTree _sensitiveWordList;
        public const string SensitiveWordsExcelFileName = "SensitiveWords.txt";
        #endregion

        #region 构造函数
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


        private void InitWordsData(string filePath)
        {
            var tempList = new WordTree();
            using (var sr = new StreamReader(GetFile(filePath).FullName))
            {
                while (!sr.EndOfStream)
                {
                    tempList.PushIn(sr.ReadLine());
                }
            }
            _sensitiveWordList = tempList;
        }

        #endregion

        #region 公共函数
        public WordTree GetSensitiveWordPackage()
        {
            if (_sensitiveWordList == null || IsUpdated(TextFilePath))
            {
                InitWordsData(TextFilePath);
            }
            return _sensitiveWordList;
        }

        public string CheckSensitiveStr(string str)
        {
            if (string.IsNullOrEmpty(str))
            {
                return string.Empty;
            }
            else
            {
                var wordTree = GetSensitiveWordPackage();
                str = str.ToUpper();
                for (var i = 0; i < str.Length; i++)
                {
                    var word = str.FastCheckStr(i, wordTree);
                    if (word != null)
                    {
                        return word;
                    }
                }
                return string.Empty;
            }
        }
        #endregion
        public enum TestCaseEnum
        {
            NoSensitiveWord = 1,
            SensitiveWordAtTail = 2,
            SensitiveWordAtHead = 3,
        }

        public string TestCase(Func<string, string> checkFunc, int stringLen = 1024 * 100, int times = 10, TestCaseEnum testCase = TestCaseEnum.NoSensitiveWord)
        {
            var sb = new StringBuilder();
            var testArr = new[] { "免定金雄鹰AWP", "货到付款92式", "卖假车牌", "DIY拆弹闹钟", "炸弹闹钟清单", "订购地洛西泮", "代购56式刺刀" };
            for (var i = 0; i < stringLen; i++)
            {
                sb.Append(i % 10);
            }
            var strToCheck = sb.ToString();
            var senWord = string.Empty;
            switch (testCase)
            {
                case TestCaseEnum.NoSensitiveWord:
                    break;
                case TestCaseEnum.SensitiveWordAtTail:
                    {
                        senWord = testArr[new Random().Next(testArr.Length)];
                        strToCheck += senWord;
                        break;
                    }
                case TestCaseEnum.SensitiveWordAtHead:
                    {
                        senWord = testArr[new Random().Next(testArr.Length)];
                        strToCheck = senWord + strToCheck;
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            GetSensitiveWordPackage();
            var stopWatch = new Stopwatch();
            stopWatch.Start();
            long firstTicks = 0;
            var result = string.Empty;
            for (var i = 0; i < times; i++)
            {
                result = checkFunc(strToCheck);
                if (i == 0)
                {
                    firstTicks = stopWatch.ElapsedTicks;
                }
            }
            var ticks = stopWatch.ElapsedTicks;
            return $"[Function]:{checkFunc.Method.Name}\n" +
                   $"[Times]:{times}\n" +
                   $"[Ticks]:{ticks}\n" +
                   $"[FirstTicks]:{firstTicks}\n" +
                   $"[AverageTime]:{ticks / times}\n" +
                   $"[SensitiveWord]:{senWord}\n" +
                   $"[CheckResult]:{result}\n" +
                   $"[StringLength]:{strToCheck.Length}\n";
        }
    }

    internal static class SensitiveWordHelper
    {
        public static string FastCheckStr(this string strToCheck, int currentIndex, WordTree wordTree)
        {
            if (currentIndex >= strToCheck.Length)
            {
                return null;
            }
            else
            {
                if (wordTree.Children.TryGetValue(strToCheck[currentIndex], out WordTree dict))
                {
                    return dict.IsEnd ? dict.WhoAmI() : strToCheck.FastCheckStr(++currentIndex, dict);
                }
                else
                {
                    return null;
                }
            }
        }
    }
}

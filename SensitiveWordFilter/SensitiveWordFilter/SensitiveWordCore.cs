using System;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Text;

namespace SensitiveWordFilter
{

    public class SensitiveWordCore
    {
        #region 变量
        private static readonly Random Ran = new Random();
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

        public string CheckSensitiveStr(string str, bool checkSensitiveWordListUpdate = true)
        {
            if (string.IsNullOrEmpty(str))
            {
                return string.Empty;
            }
            else
            {
                var wordTree = checkSensitiveWordListUpdate || _sensitiveWordList == null ? GetSensitiveWordPackage() : _sensitiveWordList;
                var strLen = str.Length;
                for (var i = 0; i < strLen; i++)
                {
                    var word = str.FastCheckStr(i, strLen, wordTree);
                    if (word != null)
                    {
                        return word;
                    }
                }
                return string.Empty;
            }
        }

        public unsafe string UnsafeCheckSensitiveStr(string str, bool checkSensitiveWordListUpdate = true)
        {
            if (string.IsNullOrEmpty(str))
            {
                return string.Empty;
            }
            else
            {
                str = str.Replace("\0", string.Empty);
                var wordTree = checkSensitiveWordListUpdate || _sensitiveWordList == null ? GetSensitiveWordPackage() : _sensitiveWordList;
                fixed (char* pointer = str)
                {
                    var tempPointer = pointer;
                    while (true)
                    {
                        var word = SensitiveWordHelper.UnsafeFastCheckStr(tempPointer, wordTree);
                        if (word != null)
                        {
                            return word;
                        }
                        if (*++tempPointer == 0)
                        {
                            return string.Empty;
                        }
                    }
                }
            }
        }
        #endregion
        public enum TestCaseEnum
        {
            NoSensitiveWord = 1,
            SensitiveWordAtTail = 2,
            SensitiveWordAtHead = 3,
        }
        /// <summary>
        /// 检测敏感词:不检查敏感词文件是否已更新
        /// </summary>
        /// <param name="strToCheck"></param>
        /// <returns></returns>
        public string CheckSensitiveStrNoCheckFileUpdate(string strToCheck)
        {
            return CheckSensitiveStr(strToCheck, false);
        }
        /// <summary>
        /// 检测敏感词:不检查敏感词文件是否已更新
        /// </summary>
        /// <param name="strToCheck"></param>
        /// <returns></returns>
        public string UnsafeCheckSensitiveStrNoCheckFileUpdate(string strToCheck)
        {
            return UnsafeCheckSensitiveStr(strToCheck, false);
        }
        public string TestCase(Func<string, string> checkFunc, int stringLen = 1024 * 10, int times = 10, TestCaseEnum testCase = TestCaseEnum.NoSensitiveWord, string appendToString = "")
        {
            var sb = new StringBuilder();
            var testArr = new[] { "免定金雄鹰AWP", "货到付款92式", "卖假车牌", "DIY拆弹闹钟", "炸弹闹钟清单", "订购地洛西泮", "代购56式刺刀" };
            for (var i = 0; i < stringLen; i++)
            {
                //  sb.Append("免定金东京丸井MARUIPSG0123456789abcdefghijklmopqrstuvwxyz");
                sb.Append("abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
            }

            var strToCheck = sb.ToString();
            var senWord = appendToString;

            Console.ForegroundColor = (ConsoleColor)Ran.Next(1, 16); ;
            switch (testCase)
            {
                case TestCaseEnum.NoSensitiveWord:
                    break;
                case TestCaseEnum.SensitiveWordAtTail:
                    {
                        senWord = string.IsNullOrEmpty(senWord) ? testArr[Ran.Next(testArr.Length)] : senWord;
                        strToCheck += senWord;
                        break;
                    }
                case TestCaseEnum.SensitiveWordAtHead:
                    {
                        senWord = string.IsNullOrEmpty(senWord) ? testArr[Ran.Next(testArr.Length)] : senWord;
                        strToCheck = senWord + strToCheck;
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            GetSensitiveWordPackage();
            long firstTicks = 0;
            var result = string.Empty;
            var stopWatch = new Stopwatch();
            stopWatch.Start();
            for (var i = 0; i < times; i++)
            {
                result = checkFunc(strToCheck);
                if (i == 0)
                {
                    firstTicks = stopWatch.ElapsedTicks;
                }
            }
            var ticks = stopWatch.ElapsedTicks;
            var msg = $"[Function]:{checkFunc.Method.Name}\n" +
                   $"[Times]:{times}\n" +
                   $"[Ticks]:{ticks}\n" +
                   $"[FirstTicks]:{firstTicks}\n" +
                   $"[AverageTime]:{ticks / times}\n" +
                   $"[SensitiveWord]:{senWord}\n" +
                   $"[CheckResult]:{result}\n" +
                   $"[StringLength]:{strToCheck.Length}\n";
            Console.WriteLine(msg);
            return msg;
        }
    }
}

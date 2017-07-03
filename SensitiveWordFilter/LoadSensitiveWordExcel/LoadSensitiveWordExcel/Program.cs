
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using NPOI.XSSF.UserModel;

namespace LoadSensitiveWordExcel
{
    class Program
    {
        private static List<List<string>> LoadSensitiveWordFromExcel()
        {
            try
            {
                var fileName = "SensitiveWords.xlsx";
                var fileInfo = new FileInfo(fileName);
                if (!fileInfo.Exists)
                {
                    throw new FileNotFoundException($"敏感词文件[{fileInfo.FullName}]不存在,\n" +
                                                    $"请将敏感词文件{fileName}放入项目根目录");
                }
                using (var fs = new FileStream(fileInfo.FullName, FileMode.Open))
                {
                    var fsLen = (int)fs.Length;
                    var heByte = new byte[fsLen];
                    fs.Read(heByte, 0, heByte.Length);
                    using (var stream = new MemoryStream(heByte))
                    {
                        var workbook = new XSSFWorkbook(stream);
                        var sheet = workbook.GetSheetAt(0);
                        var rows = sheet.GetRowEnumerator();
                        var data = new List<List<string>>();
                        var index = 0;
                        while (rows.MoveNext())
                        {
                            var row = (XSSFRow)rows.Current;
                            var tempRow = new List<string>();
                            var isEmptyRow = true;
                            for (var i = 0; i < sheet.GetRow(index).LastCellNum; i++)
                            {
                                var cell = row.GetCell(i);
                                var cellText = cell?.ToString() ?? string.Empty;
                                if (!string.IsNullOrEmpty(cellText))
                                {
                                    isEmptyRow = false;
                                }
                                tempRow.Add(cellText);
                            }
                            if (!isEmptyRow)
                            {
                                data.Add(tempRow);
                            }
                            ++index;
                        }
                        return data;
                    }
                }
            }
            catch (Exception e)
            {
                throw new Exception("解析敏感词库Excel文件时出错,请检查文件是否有效", e);
            }
        }

        private static List<SensitiveWordPackage> GetSensitiveWordPackageList()
        {
            try
            {
                const int dataStartRow = 3;
                var data = LoadSensitiveWordFromExcel();
                var mainTypeList = new List<int>();
                var firstRow = data[0];
                var maxCellNum = firstRow.Count;
                for (var i = 0; i < maxCellNum; i++)
                {
                    if (!string.IsNullOrEmpty(firstRow[i]))
                    {
                        mainTypeList.Add(i);
                    }
                }
                var sensitiveWordPackageList = new List<SensitiveWordPackage>();
                foreach (var currentMainTypeIndex in mainTypeList)
                {
                    var sensitiveWordPackage = new SensitiveWordPackage();
                    var verbNotFinish = true;
                    var nounNotFinish = true;
                    var exclusiveNounsNotFinish = true;
                    for (var y = dataStartRow; y < data.Count; y++)
                    {

                        var currentRow = data[y];
                        var lastCellNum = currentRow.Count - 1;
                        verbNotFinish = verbNotFinish && lastCellNum >= currentMainTypeIndex;
                        nounNotFinish = nounNotFinish && lastCellNum >= currentMainTypeIndex + 2;
                        exclusiveNounsNotFinish = exclusiveNounsNotFinish && lastCellNum >= currentMainTypeIndex + 4;
                        sensitiveWordPackage.Type = firstRow[currentMainTypeIndex];
                        if (verbNotFinish)
                        {
                            var verb = currentRow[currentMainTypeIndex];
                            if (!string.IsNullOrEmpty(verb))
                            {

                                sensitiveWordPackage.VerbList.Add(verb.ToUpper());
                            }
                            else
                            {
                                verbNotFinish = false;
                            }
                        }
                        if (nounNotFinish)
                        {
                            var noun = currentRow[currentMainTypeIndex + 2];
                            if (!string.IsNullOrEmpty(noun))
                            {
                                sensitiveWordPackage.NounList.Add(noun.ToUpper());
                            }
                            else
                            {
                                nounNotFinish = false;
                            }
                        }
                        if (exclusiveNounsNotFinish)
                        {
                            var exclusiveNouns = currentRow[currentMainTypeIndex + 4];
                            if (!string.IsNullOrEmpty(exclusiveNouns))
                            {
                                sensitiveWordPackage.ExclusiveNounsList.Add(exclusiveNouns.ToUpper());
                            }
                            else
                            {
                                exclusiveNounsNotFinish = false;
                            }
                        }
                        if (!verbNotFinish && !nounNotFinish && !exclusiveNounsNotFinish)
                        {
                            break;
                        }

                    }
                    sensitiveWordPackageList.Add(sensitiveWordPackage);
                }
                return sensitiveWordPackageList;
            }
            catch (Exception e)
            {
                throw new Exception("解析敏感词库数组时出错,请检查数据是否正确", e);
            }
        }


        //private static List<string> GetSensitiveWordList(List<SensitiveWordPackage> sensitiveWordPackageList)
        //{
        //    var strList = new List<string>();
        //    foreach (var type in sensitiveWordPackageList)
        //    {
        //        var hasVerb = type.VerbList.Any();
        //        foreach (var noun in type.NounList)
        //        {
        //            if (hasVerb)
        //            {
        //                foreach (var verb in type.VerbList)
        //                {
        //                    strList.Add($"{verb}{noun}");
        //                }
        //            }
        //            else
        //            {
        //                strList.Add(noun);
        //            }
        //        }
        //        foreach (var exclusiveNounsList in type.ExclusiveNounsList)
        //        {
        //            strList.Add(exclusiveNounsList);
        //        }
        //    }
        //    return strList;
        //}
        static void Main(string[] args)
        {
            using (var sw = new StreamWriter("SensitiveWords.txt", false))
            {
                var list = GetSensitiveWordPackageList();
                var sb = new StringBuilder();
                foreach (var wordPackage in list)
                {
                    sb.AppendLine("#p#");
                    sb.AppendLine("#v#");
                    foreach (var verb in wordPackage.VerbList)
                    {
                        sb.AppendLine(verb);
                    }
                    sb.AppendLine("#ve#");
                    sb.AppendLine("#n#");
                    foreach (var noun in wordPackage.NounList)
                    {
                        sb.AppendLine(noun);
                    }
                    sb.AppendLine("#ne#");
                    sb.AppendLine("#e#");
                    foreach (var exclusiveNouns in wordPackage.ExclusiveNounsList)
                    {
                        sb.AppendLine(exclusiveNouns);
                    }
                    sb.AppendLine("#ee#");
                    sb.AppendLine("#pe#");
                }
                sw.Write(sb);
            }
        }
    }
}

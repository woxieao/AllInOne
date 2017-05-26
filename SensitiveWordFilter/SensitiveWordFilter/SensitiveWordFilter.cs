using System.Collections.Generic;
using System.IO;
using System.Linq;
using NPOI.XSSF.UserModel;

namespace SensitiveWordFilter
{
    public class SensitiveWordFilter
    {
        public static readonly List<SensitiveWordPackage> SensitiveWordPackagesList = GetSensitiveWordPackageList();
        public static List<string> SensitiveWordList = GetSensitiveWordList(SensitiveWordPackagesList);
        private static List<List<string>> LoadSensitiveWordFromExcel()
        {
            using (var stream = new MemoryStream(Properties.Resources.SensitiveWords))
            {
                var workbook = new XSSFWorkbook(stream);
                var sheet = workbook.GetSheetAt(0);
                var rows = sheet.GetRowEnumerator();
                var data = new List<List<string>>();
                while (rows.MoveNext())
                {
                    var row = (XSSFRow)rows.Current;
                    var tempRow = new List<string>();
                    var isEmptyRow = true;
                    for (var i = 0; i < sheet.GetRow(0).LastCellNum; i++)
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
                }
                return data;
            }
        }
        private static List<SensitiveWordPackage> GetSensitiveWordPackageList()
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
                var isVerbFinish = false;
                var isNounFinish = false;
                var isExclusiveNounsFinish = false;
                for (var y = dataStartRow; y < data.Count; y++)
                {
                    var currentRow = data[y];
                    sensitiveWordPackage.Type = firstRow[currentMainTypeIndex];
                    if (!isVerbFinish)
                    {
                        var verb = currentRow[currentMainTypeIndex];
                        if (!string.IsNullOrEmpty(verb))
                        {
                            sensitiveWordPackage.VerbList.Add(verb);
                        }
                        else
                        {
                            isVerbFinish = true;
                        }
                    }
                    if (!isNounFinish)
                    {
                        var noun = currentRow[currentMainTypeIndex + 2];
                        if (!string.IsNullOrEmpty(noun))
                        {
                            sensitiveWordPackage.NounList.Add(noun);
                        }
                        else
                        {
                            isNounFinish = true;
                        }
                    }
                    if (!isExclusiveNounsFinish)
                    {
                        var exclusiveNouns = currentRow[currentMainTypeIndex + 4];
                        if (!string.IsNullOrEmpty(exclusiveNouns))
                        {
                            sensitiveWordPackage.ExclusiveNounsList.Add(exclusiveNouns);
                        }
                        else
                        {
                            isExclusiveNounsFinish = true;
                        }
                    }
                    if (isVerbFinish && isNounFinish && isExclusiveNounsFinish)
                    {
                        break;
                    }
                }
                sensitiveWordPackageList.Add(sensitiveWordPackage);
            }
            return sensitiveWordPackageList;
        }
        private static List<string> GetSensitiveWordList(List<SensitiveWordPackage> sensitiveWordPackageList)
        {
            var strList = new List<string>();
            foreach (var type in sensitiveWordPackageList)
            {
                var hasVerb = type.VerbList.Any();
                foreach (var noun in type.NounList)
                {
                    if (hasVerb)
                    {
                        foreach (var verb in type.VerbList)
                        {
                            strList.Add($"{verb}{noun}");
                        }
                    }
                    else
                    {
                        strList.Add(noun);
                    }
                }
                foreach (var exclusiveNounsList in type.ExclusiveNounsList)
                {
                    strList.Add(exclusiveNounsList);
                }
            }
            return strList;
        }

        public static string HasSensitiveWord(string str)
        {
            var result = SensitiveWordList.FirstOrDefault(str.Contains);
            return result ?? string.Empty;
        }
    }
}

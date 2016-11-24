using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadCsv
{
    class Program
    {
        static void Main(string[] args)
        {
            var folderPath = @"C:\Data\Qfile\551results\551results";
            var dir = new DirectoryInfo(folderPath);
            var sb = new StringBuilder();
            var fileList = dir.GetFiles().OrderBy(i => Convert.ToInt32(i.Name.Replace(".xlsx", ""))).Select(i => i.FullName);
            foreach (var file in fileList)
            {
                sb.Append($"{GetExcelToDataTableBySheet(file)}\n");
            }
            using (var sw = new StreamWriter($"{folderPath}\\result.csv", false))
            {
                sw.Write(sb.ToString());
            }
            Console.WriteLine("Done!");
        }
        public static string GetExcelToDataTableBySheet(string fileFullPath, string sheetName = "Sheet1$")
        {
            Console.WriteLine(fileFullPath);
            //string strConn = "Provider=Microsoft.Jet.OleDb.4.0;" + "data source=" + FileFullPath + ";Extended Properties='Excel 8.0; HDR=NO; IMEX=1'"; //此連接只能操作Excel2007之前(.xls)文件
            string strConn = "Provider=Microsoft.Ace.OleDb.12.0;" + "data source=" + fileFullPath + ";Extended Properties='Excel 12.0; HDR=NO; IMEX=1'"; //此連接可以操作.xls與.xlsx文件
            using (var conn = new OleDbConnection(strConn))
            {
                conn.Open();
                var ds = new DataSet();
                var odda = new OleDbDataAdapter(string.Format("SELECT * FROM [{0}]", sheetName), conn); //("select * from [Sheet1$]", conn);
                odda.Fill(ds, sheetName);
                conn.Close();
                var sb = new StringBuilder();
                for (var i = 0; i < ds.Tables[0].Rows.Count; i++)
                {
                    sb.Append($"{ds.Tables[0].Rows[i].ItemArray[0]},");
                }
                return sb.ToString();
            }
        }

        private static string[] GetFileStr(string filePath)
        {
            using (var sr = new StreamReader(filePath))
            {
                return sr.ReadToEnd().Split('\n');
            };
        }
    }
}

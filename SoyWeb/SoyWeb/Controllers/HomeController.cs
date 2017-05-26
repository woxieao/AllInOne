using System;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices.ComTypes;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Mvc;
using AlexXieBrain;
using Newtonsoft.Json;
using NPOI.XWPF.Extractor;
using NPOI.XWPF.UserModel;

namespace SoyWeb.Controllers
{
    public static class ModelHelper
    {


    }

    public class HomeController : Controller
    {

        public void Test()
        {
            var file = new StreamReader(@"C:\Data\Qfile\计分牌修改.docx");
            var doc = new XWPFDocument(file.BaseStream);
            XWPFWordExtractor extractor = new XWPFWordExtractor(doc);
            String text = extractor.Text;
            dynamic a;

        }
        public void WriteExcelWorkbook(List<DataTable> dataTables, List<string> worksheetNames, string workbookName = "file", bool includeHeaders = true)
        {
            NPOI.HSSF.UserModel.HSSFWorkbook wb = new NPOI.HSSF.UserModel.HSSFWorkbook();
            //create bold font for headers
            var font = wb.CreateFont();
            font.Boldweight = (short)NPOI.SS.UserModel.FontBoldWeight.Bold;

            List<string> usedNames = new List<string>();
            for (var xTable = 0; xTable < dataTables.Count; xTable++)
            {
                var nameMatches = usedNames.Count(a => a == worksheetNames[xTable]);

                string rawWorksheetName = worksheetNames[xTable];

                string worksheetName = rawWorksheetName;

                if (worksheetName.Length > 26)
                {
                    worksheetName = worksheetName.Substring(0, 25);
                }

                if (nameMatches > 0)
                {
                    worksheetName = worksheetName + "(" + (nameMatches + 1) + ")";
                }

                var sheet = (NPOI.HSSF.UserModel.HSSFSheet)wb.CreateSheet(worksheetName);
                //sheet.DefaultColumnWidth = 30;
                usedNames.Add(rawWorksheetName);
                if (includeHeaders)
                {
                    var xRow = sheet.CreateRow(0);
                    for (var iCol = 0; iCol < dataTables[xTable].Columns.Count; iCol++)
                    {
                        var cell = xRow.CreateCell(iCol);
                        cell.SetCellValue((string)dataTables[xTable].Columns[iCol].ColumnName.ToString());
                        cell.CellStyle = wb.CreateCellStyle();
                        cell.CellStyle.SetFont(font);

                    }
                }

                for (var iRow = 0; iRow < dataTables[xTable].Rows.Count; iRow++)
                {
                    var currRow = iRow;
                    if (includeHeaders == true)
                    {
                        currRow = currRow + 1;
                    }
                    var xRow = sheet.CreateRow(currRow);
                    for (var iCol = 0; iCol < dataTables[xTable].Columns.Count; iCol++)
                    {
                        var cell = xRow.CreateCell(iCol);
                        cell.SetCellValue((string)dataTables[xTable].Rows[iRow][iCol].ToString());
                    }
                }

                for (var iCol = 0; iCol < dataTables[xTable].Columns.Count; iCol++)
                {
                    sheet.AutoSizeColumn(iCol);
                    sheet.SetColumnWidth(iCol, sheet.GetColumnWidth(iCol) + 2);
                }
            }

            var response = Response;

            response.ContentType = "application/octet-stream";

            response.AppendHeader("Content-Disposition", "attachment; filename=" + workbookName + ".xls");

            System.IO.MemoryStream fs = new System.IO.MemoryStream();

            wb.Write(Response.OutputStream);

        }

        public ActionResult Index()
        {


          

            return View();
        }

        public ActionResult About()
        {

            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
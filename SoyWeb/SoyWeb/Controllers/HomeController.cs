using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using NPOI.XWPF.Extractor;
using NPOI.XWPF.UserModel;

namespace SoyWeb.Controllers
{
    public class HomeController : Controller
    {

        public void Test()
        {
            var file = new StreamReader(@"C:\Data\Qfile\计分牌修改.docx");
            var doc = new XWPFDocument(file.BaseStream);
            XWPFWordExtractor extractor = new XWPFWordExtractor(doc);
            String text = extractor.Text;
        }

        public ActionResult Index()
        {
            var file = new StreamReader(@"C:\Data\Qfile\计分牌修改.docx");
            var doc = new XWPFDocument(file.BaseStream);
            XWPFWordExtractor extractor = new XWPFWordExtractor(doc);
            
            String text = extractor.Text;
            Response.Write(text);
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
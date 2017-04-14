using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices.ComTypes;
using System.Web;
using System.Web.Mvc;
using AlexXieBrain;
using Microsoft.Office.Interop.Excel;
using Newtonsoft.Json;
using NPOI.XWPF.Extractor;
using NPOI.XWPF.UserModel;
using Action = System.Action;
using Point = System.Drawing.Point;

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

        [Serializable]
        public class MyClass
        {
            private int _a = DateTime.Now.Millisecond;
            public int A { get; set; }
            public MyClass2 ClassA { get; set; }
        }

        [Serializable]
        public class MyClass2
        {
            public int A { get; set; }
        }
        public class DyClass : DynamicObject
        {
        }
        public dynamic Test2(dynamic t)
        {

            return t;
        }
        public ActionResult Index()
        {

            var a = new MyClass
            {
                A = 1,
                ClassA = new MyClass2
                {
                    A = 2
                }

            };
            //var ccccc = a.SimpleClone();
            //var ccccc2 = a.DeepClone();
            int aaasasas = 1 | 2;
            var x = (aaasasas == 222 == true);

            var b = a.ToDynamic(new { a = 1, c = 3 }, new { a = 2, ccc = 3 });
            a.A = 11;
            a.ClassA.A = 22;

            Test2(new ExpandoObject());

            return View();
            ViewBag.aa = 2;
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
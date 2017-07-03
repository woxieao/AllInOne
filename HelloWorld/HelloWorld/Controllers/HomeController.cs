using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HelloWorld.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string msg = "你好啊,大胖")
        {
            ViewBag.Msg = msg;
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

        public void Test(string msg = "Hello There")
        {
            Response.Clear();
            Response.Write(string.Format("<script>alert('[{1}]{0}')</script>", msg, DateTime.Now.ToString("g")));
            Response.End();
        }

        public string TestII(string data)
        {
            return data;
        }
    }
}
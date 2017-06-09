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

namespace SoyWeb.Controllers
{
    public static class ModelHelper
    {


    }

    public class HomeController : Controller
    {



        public ActionResult Index()
        {
            new SensitiveWordFilter.SensitiveWordFilter().HasSensitiveWord("Test");

          

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
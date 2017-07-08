using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices.ComTypes;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Text.RegularExpressions;
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



        public ActionResult Index(string str = "")
        {
            var xx = str == "\0";
            Response.Write(xx);
            Response.Write(str);

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
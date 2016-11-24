using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace Just4TestWeb.Controllers
{
    public class TestController : Controller
    {
        public ActionResult GetWebScoketFunc()
        {
            var str = Encoding.UTF8.GetBytes("function Test(){console.log(1);} Test();");
            return new FileContentResult(str, "text/javascript");
        }
    }
}
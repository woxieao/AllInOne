using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace ThisIsIt.Controllers
{
    public class TestController : Controller
    {

        public void Test(DateTime time)
        {
            Response.Write(time);
        }
    }
}
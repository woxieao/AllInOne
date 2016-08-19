using System;
using System.IO;
using System.Web.Mvc;
using Cloudatable.Configs;
using Cloudatable.Core;
using Cloudatable.Models;
using Cloudatable.WebCore;

namespace Cloudatable.Controllers
{
    [RoutePrefix("Data")]
    public class DataController : Controller
    {

        public DataController()
        {
            FileCore.SaveFile();
        }

        [Route("Test")]
        [HttpGet]
        public string Test(string email = "867993946@qq.com")
        {
            throw new ApiException("");
            return "";
        }



    }
}
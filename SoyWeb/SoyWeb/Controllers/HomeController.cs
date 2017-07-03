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

            var stopWatch = new Stopwatch();
            stopWatch.Start();
            string hash;

            hash = "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";

            using (var sr = new StreamReader("/test.txt"))
            {
                hash = sr.ReadToEnd();
            }

            //     var rr = hash.IndexOf("比方说第二a", StringComparison.CurrentCultureIgnoreCase) ;

            var result = new SensitiveWordFilter.SensitiveWordCore().HasSensitiveWord(null);// (hash + str);
            //new SensitiveWordFilter.SensitiveWordFilter();
            //var sensitiveWordList = SensitiveWordFilter.SensitiveWordFilter.SensitiveWordList;

            //var word = sensitiveWordList.First();


            //for (var i = 0; i < word.NounList.Count; i++)
            //{
            //    var tStr = "";
            //    try
            //    {
            //        var verbList = $"({string.Join("|", word.VerbList)})";
            //        var nounList = "";
            //        for (var x = 0; x <= i; x++)
            //        {
            //            nounList += (string.IsNullOrEmpty(nounList) ? "" : "|") + word.NounList[i];
            //        }
            //        string sb = ($"((?=.*出售)(?=.*{nounList}))");//|{specList})
            //        tStr = sb;
            //        var flag = new Regex(sb).IsMatch(str);
            //    }
            //    catch(Exception e)
            //    {
            //        throw new Exception(i.ToString() + tStr+ "\n"+e);
            //    }
            //}



            //var sb = new StringBuilder();
            //foreach (var word in sensitiveWordList)
            //{
            //    var verbList = word.VerbList.Any() ? $"(?=.*({string.Join("|", word.VerbList.Select(Regex.Escape))}))" : string.Empty;
            //    var nounList = word.NounList.Any() ? $"(?=.*({string.Join("|", word.NounList.Select(Regex.Escape))}))" : string.Empty;
            //    var exclusiveNounsList = $"({string.Join("|", word.ExclusiveNounsList.Select(Regex.Escape))})";
            //    var tag = string.IsNullOrEmpty(sb.ToString()) ? string.Empty : "|";
            //    if (!word.VerbList.Any() && !word.NounList.Any())
            //    {
            //        if (word.ExclusiveNounsList.Any())
            //        {
            //            sb.Append($"{tag}({exclusiveNounsList})");
            //        }
            //    }
            //    else
            //    {
            //        var eStr = word.ExclusiveNounsList.Any() ? "|" + exclusiveNounsList : string.Empty;
            //        sb.Append($"{tag}(({verbList}{nounList}){eStr})");
            //    }
            //}

            //var flag = new Regex(sb.ToString(), RegexOptions.IgnoreCase).Matches(hash + str);

            //Response.Write("\n<br>");
            //if (flag.Count > 0)
            //{
            //    Response.Write("数量:" + flag.Count);
            //    if (flag.Count > 1)
            //    {
            //        Response.Write("下标:" + flag[1].Index);
            //    }
            //    Response.Write("\n<br>");
            //}

            Response.Write(result);
            Response.Write("\n<br>");
            Response.Write(stopWatch.ElapsedMilliseconds);
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
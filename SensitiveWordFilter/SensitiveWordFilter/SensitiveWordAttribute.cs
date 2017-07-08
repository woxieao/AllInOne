using System;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace SensitiveWordFilter
{
    public class SensitiveWordAttribute : ActionFilterAttribute
    {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var parms = new StringBuilder();
            var parameters = filterContext.ActionDescriptor.GetParameters();
            foreach (var parameter in parameters)
            {
                if (parameter.ParameterType != typeof(HttpPostedFileBase))
                {
                    var arg = filterContext.ActionParameters[parameter.ParameterName];
                    if (parameter.ParameterType == typeof(string))
                    {
                        var str = filterContext.ActionParameters[parameter.ParameterName];
                        if (str != null)
                        {
                            parms.AppendLine(str.ToString());
                        }
                    }
                    else
                    {
                        foreach (var pi in parameter.ParameterType.GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(i => i.CanRead && i.CanWrite).Where(i => i.PropertyType == typeof(string)))
                        {
                            if (arg != null)
                            {
                                var val = pi.GetValue(arg) ?? string.Empty;
                                parms.AppendLine(val.ToString());
                            }
                        }
                    }
                }
            }
            var unvalidatedRequest = filterContext.RequestContext.HttpContext.Request.Unvalidated;
            var urlStr = HttpUtility.UrlDecode(unvalidatedRequest.RawUrl);
            var bodyStr = HttpUtility.UrlDecode(unvalidatedRequest.Form.ToString());
            parms.AppendLine(urlStr);
            parms.AppendLine(bodyStr);
            var result = new SensitiveWordCore().CheckSensitiveStr(parms.ToString());
            if (!string.IsNullOrEmpty(result))
            {
                throw new SensitiveRequestException($"由于请求中包含敏感词[{result}],请求已被拦截!");
            }
        }
    }
}

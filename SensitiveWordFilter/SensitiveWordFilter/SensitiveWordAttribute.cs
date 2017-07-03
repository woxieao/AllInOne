using System;
using System.Globalization;
using System.IO;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace SensitiveWordFilter
{
    public class SensitiveWordAttribute : ActionFilterAttribute
    {
        private readonly string _hasSensitiveWordRectUrl;
        /// <summary>
        /// 敏感词过滤器 
        /// XA 2017/26
        /// </summary>
        /// <param name="redirectUrl">错误页面重定向地址,若无则直接输出alert</param>
        public SensitiveWordAttribute(string redirectUrl = "")
        {
            _hasSensitiveWordRectUrl = redirectUrl;
        }


        /// <summary>
        /// 用AuthorizeAttribute会有问题
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
                    parms.AppendLine(Json.Encode(arg));
                }
            }
            var unvalidatedRequest = filterContext.RequestContext.HttpContext.Request.Unvalidated;
            var urlStr = HttpUtility.UrlDecode(unvalidatedRequest.RawUrl);
            var bodyStr = HttpUtility.UrlDecode(unvalidatedRequest.Form.ToString());
            parms.AppendLine(urlStr);
            parms.AppendLine(bodyStr);
            var result = new SensitiveWordCore().HasSensitiveWord(parms.ToString());
            if (!string.IsNullOrEmpty(result))
            {
                var response = filterContext.RequestContext.HttpContext.Response;
                response.Clear();
                response.AddHeader("HasSensitiveWord", "true");
                var oriMsg = $"由于请求中包含敏感词[{result}],请求已被拦截!";
                var msg = HttpUtility.UrlEncode(oriMsg);
                if (filterContext.RequestContext.HttpContext.Request.IsAjaxRequest())
                {
                    response.StatusCode = (int)HttpStatusCode.Forbidden;
                    filterContext.Result = new ContentResult
                    {
                        ContentType = "text/javascript; charset=UTF-8",
                        Content = $"{oriMsg}",
                        ContentEncoding = Encoding.UTF8,
                    };
                }
                else
                {
                    if (string.IsNullOrEmpty(_hasSensitiveWordRectUrl))
                    {
                        filterContext.Result = new ContentResult
                        {
                            ContentType = "text/html; charset=UTF-8",
                            Content = $"<script>alert(decodeURIComponent('{msg}'));history.go(-1);</script>",
                            ContentEncoding = Encoding.UTF8
                        };
                    }
                    else
                    {
                        filterContext.Result = new RedirectResult($"{_hasSensitiveWordRectUrl}?msg={Convert.ToBase64String(Encoding.UTF8.GetBytes(msg))}"); ;
                    }
                }
                response.End();
            }
            else
            {
                base.OnActionExecuting(filterContext);
            }
        }
    }
}

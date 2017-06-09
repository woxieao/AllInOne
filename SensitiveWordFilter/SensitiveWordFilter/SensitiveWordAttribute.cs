using System;
using System.Net;
using System.Text;
using System.Web;
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
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var queryStr = HttpUtility.UrlDecode(filterContext.RequestContext.HttpContext.Request.QueryString.ToString());
            var formStr = HttpUtility.UrlDecode(filterContext.RequestContext.HttpContext.Request.Form.ToString());
            var urlStr = HttpUtility.UrlDecode(filterContext.RequestContext.HttpContext.Request.RawUrl);
            var result = new SensitiveWordFilter().HasSensitiveWord(queryStr + formStr + urlStr);
            if (!string.IsNullOrEmpty(result))
            {
                var oriMsg = $"由于请求中包含敏感词[{result}],请求已被拦截!";
                var msg = HttpUtility.UrlEncode(oriMsg);
                if (filterContext.RequestContext.HttpContext.Request.IsAjaxRequest())
                {
                    var response = filterContext.RequestContext.HttpContext.Response;
                    response.Clear();
                    response.StatusCode = (int)HttpStatusCode.Forbidden;
                    filterContext.Result = new ContentResult
                    {
                        ContentType = "text/javascript; charset=UTF-8",
                        Content = $"'{oriMsg}'",
                        ContentEncoding = Encoding.UTF8
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
            }
            else
            {
                base.OnActionExecuting(filterContext);
            }
        }
    }
}

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
            var result = SensitiveWordFilter.HasSensitiveWord(queryStr + formStr);
            if (!string.IsNullOrEmpty(result))
            {
                var msg = HttpUtility.UrlEncode($"由于请求中包含敏感词[{result}],请求失败!");
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
                    filterContext.Result = new RedirectResult($"{_hasSensitiveWordRectUrl}?msg={msg}"); ;
                }
            }
            else
            {
                base.OnActionExecuting(filterContext);
            }
        }
    }
}

using System;
using System.Web;
using System.Web.Mvc;
using ScoreBoard.Models.Exceptions;
using ScoreBoard.Models.Extensions;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Models
{
    public class BaseController : Controller
    {
        protected override void OnException(ExceptionContext filterContext)
        {
            var ex = filterContext.Exception;
            string errorMsg;
            if (ex is ArgumentException)
            {
                errorMsg = "参数有误";
            }
            else
            {
                errorMsg = (ex is AjaxException || ex is UnAuthorizeException) ? ex.GetInnerEx() : AjaxException.DefaultMsg;
            }
            filterContext.HttpContext.Response.Clear();
            filterContext.Result = new RedirectResult($"/Home/Error?msg={HttpUtility.UrlEncode(errorMsg)}");
            filterContext.ExceptionHandled = true;
        }
    }
}
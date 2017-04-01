using System;
using System.Web.Mvc;
using ScoreBoard.Models.Exceptions;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Models
{
    public class AjaxController : Controller
    {
        private static string GetInnerEx(Exception ex)
        {
            return ex.InnerException != null ? GetInnerEx(ex.InnerException) : ex.Message;
        }
        protected override void OnException(ExceptionContext filterContext)
        {
            var ex = filterContext.Exception;
            var errorMsg = (ex is AjaxException || ex is UnAuthorizeException) ? GetInnerEx(ex) : AjaxException.DefaultMsg;
            filterContext.HttpContext.Response.Clear();
            filterContext.Result = new AjaxResult(new AjaxResultPackage
            {
                Status = ex is UnAuthorizeException ? -1 : 0,
                Msg = errorMsg,
            });
            filterContext.ExceptionHandled = true;
        }
    }
}
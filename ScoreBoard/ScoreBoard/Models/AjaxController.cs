using System;
using System.Web.Mvc;
using ScoreBoard.Models.Exceptions;
using ScoreBoard.Models.Extensions;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Models
{
    public class AjaxController : Controller
    {
        protected override void OnException(ExceptionContext filterContext)
        {
            var ex = filterContext.Exception;
            var errorMsg = (ex is AjaxException || ex is UnAuthorizeException) ? ex.GetInnerEx() : AjaxException.DefaultMsg;
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
using System.Web;
using System.Web.Mvc;

namespace AlexXieBrain.MvcCore.BackEnd
{
    public class AutoHandleExceptionController : Controller
    {
        static AutoHandleExceptionController()
        {
            ErrorPage = "/Error/Error";
        }
        protected internal static string ErrorPage { get; private set; }
        protected void SetGlobalErrorPage(string errorPage)
        {
            ErrorPage = errorPage;
        }
        protected override void OnException(ExceptionContext filterContext)
        {
            var ex = filterContext.Exception;
            var errorMsg = ex is MsgException ? ex.InnermostEx().Message : MsgException.DefaultMsg;
            filterContext.HttpContext.Response.Clear();
            if (filterContext.RequestContext.HttpContext.Request.IsAjaxRequest())
            {
                filterContext.Result = new AjaxResult(new AjaxResultPackage
                {
                    Status = AjaxStatus.Error,
                    Msg = errorMsg,
                });
            }
            else
            {
                filterContext.Result = new RedirectResult($"{ErrorPage}?msg={HttpUtility.UrlEncode(errorMsg)}");
            }
            filterContext.ExceptionHandled = true;
        }
    }
}

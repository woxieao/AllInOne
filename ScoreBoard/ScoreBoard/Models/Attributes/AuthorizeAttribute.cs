using System.Web;
using System.Web.Mvc;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Models.Attributes
{

    public class AjaxAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (Singleton.UserLogic.GetCurrentUserInfo(false) == null)
            {
                return false;
            }
            else
            {
                return base.AuthorizeCore(httpContext);
            }
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new AjaxResult(new AjaxResultPackage
            {
                Status = -1,
                Msg = "用户尚未登录",
            });
        }
    }
    public class BaseAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (Singleton.UserLogic.GetCurrentUserInfo(false) == null)
            {
                return false;
            }
            else
            {
                return base.AuthorizeCore(httpContext);
            }
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            var actionName = filterContext.ActionDescriptor.ActionName;

            filterContext.RequestContext.HttpContext.Response.Redirect("http://wx.xinstudy.cn/checkUser.htm?tarURL=jf.xinstudy.cn%2FHome%2FGetUserWeChatInfo");
        }
    }
}

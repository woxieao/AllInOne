using System.Web;
using System.Web.Mvc;
using ScoreBoard.Controllers.WeChat;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Models.Attributes
{

    public class AjaxAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (Singleton.UserLogic.GetCurrentUserInfo(httpContext.User, false) == null)
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
            if (Singleton.UserLogic.GetCurrentUserInfo(httpContext.User, false) == null)
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
            filterContext.RequestContext.HttpContext.Response.Redirect("http://wx.xinstudy.cn/checkUser.htm?tarURL=jf.xinstudy.cn%2FHome%2FGetUserWeChatInfo");
        }
    }

    public class WeChatOneStepAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (Singleton.UserLogic.GetCurrentUserInfo(httpContext.User, false) == null)
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
            filterContext.RequestContext.HttpContext.Response.Redirect($"http://wx.xinstudy.cn/checkUser.htm?tarURL={HttpUtility.UrlEncode($"jf.xinstudy.cn/{WeChatAuthorizeAndRedirectController.WeChatLogin}{filterContext.HttpContext.Request.Url.AbsolutePath}")}");
        }
    }
}

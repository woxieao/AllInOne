using System.Runtime.Remoting;
using System.Web.Mvc;

namespace AlexXieBrain.MvcCore.BackEnd
{

    public class XAuthorizeAttribute : AuthorizeAttribute
    {
        private readonly string _loginPage;

        /// <summary>
        /// for ajax
        /// </summary>
        public XAuthorizeAttribute()
        {

        }
        /// <summary>
        /// for pages 
        /// </summary>
        /// <param name="loginPage">login page</param>
        public XAuthorizeAttribute(string loginPage)
        {
            _loginPage = loginPage;
        }


        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            if (filterContext.RequestContext.HttpContext.Request.IsAjaxRequest())
            {
                filterContext.Result = new AjaxResult(new AjaxResultPackage
                {
                    Status = AjaxStatus.LoggedOut,
                    Msg = "用户尚未登录",
                });
            }
            else
            {
                if (string.IsNullOrWhiteSpace(_loginPage))
                {
                    throw new ServerException("非Ajax请求时,登录页面的配置是必须的");
                }
                else
                {
                    filterContext.Result = new RedirectResult(_loginPage);
                }
            }
        }
    }
}

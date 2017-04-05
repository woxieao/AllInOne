using System;
using System.Web.Mvc;
using ScoreBoard.Models;

namespace ScoreBoard.Controllers.WeChat
{
    [ValidateInput(false)]
    [RoutePrefix(WeChatLogin)]
    public class WeChatAuthorizeAndRedirectController : BaseController
    {
        public const string WeChatLogin = nameof(WeChatLogin);
        [Route("ScanRoom/{roomId}/{base64Pwd}")]
        public ActionResult ScanRoom(Guid roomId, string base64Pwd, string wxInfo)
        {
            Singleton.UserLogic.WeChatUserLogin(wxInfo);
            return Redirect(Request.Url.AbsolutePath.Substring(WeChatLogin.Length + 1));
        }
    }
}
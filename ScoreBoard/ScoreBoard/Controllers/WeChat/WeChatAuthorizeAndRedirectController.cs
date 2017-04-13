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
        [Route("ScanRoom/{roomId}/{md5Pwd}")]
        public ActionResult ScanRoom(Guid roomId, string md5Pwd, string wxInfo)
        {
            Singleton.UserLogic.WeChatUserLogin(wxInfo, User);
            return Redirect(Request.Url.AbsolutePath.Substring(WeChatLogin.Length + 1));
        }
    }
}
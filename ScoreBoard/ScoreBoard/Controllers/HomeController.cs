using System;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using ScoreBoard.Models;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Exceptions;
using ScoreBoard.Models.Extensions;

namespace ScoreBoard.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Room(Guid roomId)
        {
            if (roomId.IsNull())
            {
                return Redirect("/Home/Index");
            }
            else
            {
                return View();
            }
        }

        public ActionResult Login(string redirectUrl = "")
        {
            return View();
        }
        [ValidateInput(false)]
        public ActionResult FakeWeChatInterface(string tarUrl = "")
        {
            if (string.IsNullOrWhiteSpace(tarUrl))
            {
                throw new AjaxException("回调地址不能为空");
            }
            var ran = new Random();
            var imgList = new[] { "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490335263233&di=cc8102451c8e25cace8e735104e00fb3&imgtype=0&src=http%3A%2F%2Fimg2.pcpop.com%2FArticleImages%2F0x0%2F0%2F556%2F000556752.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2650854882,2248561106&fm=206&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=802997689,3302301143&fm=23&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=906998094,2765529766&fm=23&gp=0.jpg" };
            var fakeWeChatInfo = new
            {
                openid = Guid.NewGuid(),
                nickname = "运动厂商" + Singleton.UserLogic.GetUserCount(),
                headimgurl = imgList[ran.Next(imgList.Length)]
            };
            return Redirect($"{tarUrl}?wxInfo={HttpUtility.UrlEncode(JsonConvert.SerializeObject(fakeWeChatInfo))}");
        }


        public ActionResult GetUserWeChatInfo(string wxInfo)
        {
            if (!User.Identity.IsAuthenticated)
            {
                var userInfo = JsonConvert.DeserializeObject<WeChatInfo>(wxInfo);
                if (userInfo == null)
                {
                    throw new AjaxException("序列化微信登录信息失败,请重新打开页面再试");
                }
                if (userInfo.errcode == 40001)
                {
                    throw new AjaxException("微信登录Token已失效,请重新打开页面再试");
                }
                Singleton.UserLogic.UserLogin(new UserInfo
                {
                    OpenId = userInfo.openid,
                    Username = string.IsNullOrEmpty(userInfo.nickname) ? "--" : userInfo.nickname,
                    PicUrl = string.IsNullOrEmpty(userInfo.headimgurl) ? "http://img4.imgtn.bdimg.com/it/u=3443117432,1239143495&fm=214&gp=0.jpg" : userInfo.headimgurl,
                });
            }
            return new RedirectResult("/Room/Main");
        }

        public ActionResult Error()
        {
            return View();
        }
    }
}
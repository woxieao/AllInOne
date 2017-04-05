using System;
using System.IO;
using System.Text;
using System.Web.Mvc;
using ScoreBoard.Models;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Results;
using ThoughtWorks.QRCode.Codec;

namespace ScoreBoard.Controllers.Api
{
    [ValidateInput(false)]
    public class ApiController : AjaxController
    {
        public AjaxResult Login(UserInfo userInfo)
        {
            Singleton.UserLogic.UserLogin(userInfo);
            return new AjaxResult(new { });
        }
        public AjaxResult IsExistRoom(string roomName)
        {
            var isExist = Singleton.RoomLogic.IsExistRoom(roomName, false);
            var roomId = Guid.Empty;
            if (isExist)
            {
                roomId = Singleton.RoomLogic.GetRoomByName(roomName).RoomId;
            }
            return new AjaxResult(new { IsExist = isExist, RoomId = roomId });
        }
        public AjaxResult ZombieJoinRoom(string roomName, string roomPwd, int peopleCount)
        {
            var ran = new Random();
            var imgList = new[] { "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490335263233&di=cc8102451c8e25cace8e735104e00fb3&imgtype=0&src=http%3A%2F%2Fimg2.pcpop.com%2FArticleImages%2F0x0%2F0%2F556%2F000556752.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2650854882,2248561106&fm=206&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=802997689,3302301143&fm=23&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=906998094,2765529766&fm=23&gp=0.jpg" };
            var index = 0;
            var errorMsg = string.Empty;
            try
            {
                for (var i = 0; i < peopleCount; i++)
                {
                    var guid = Guid.NewGuid().ToString("N");
                    var fakeWeChatInfo = new UserInfo
                    {
                        OpenId = guid,
                        Username = "僵尸用户" + guid.Substring(30),
                        PicUrl = imgList[ran.Next(imgList.Length)]
                    };
                    Singleton.RoomLogic.PlayerJoinRoom(roomName, roomPwd, fakeWeChatInfo);
                    index = i + 1;
                }
            }
            catch (Exception e)
            {
                errorMsg = e.Message;
                return new AjaxResult(new { ErrorMsg = errorMsg, Result = $"{index}个僵尸用户添加完毕" });
            }
            return new AjaxResult(new { ErrorMsg = errorMsg, Result = $"{index}个僵尸用户添加完毕" });
        }
        public void CreateQrCode(string str = "")
        {
            var qrCodeEncoder = new QRCodeEncoder
            {
                QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.BYTE,
                QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.M,
                QRCodeVersion = 7,
                QRCodeScale = 4
            };
            using (var mem = new MemoryStream())
            {
                var image = qrCodeEncoder.Encode(str, Encoding.UTF8);
                image.Save(mem, System.Drawing.Imaging.ImageFormat.Png);
                var byData = new byte[mem.Length];
                mem.Position = 0;
                mem.Read(byData, 0, byData.Length);
                Response.ContentType = "image/png";
                Response.BinaryWrite(byData);
                mem.Close();
            }
        }

        [Route("Test2")]
        public AjaxResult Test()
        {
            return new AjaxResult(123);
        }
    }
}

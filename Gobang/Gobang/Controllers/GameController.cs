using System.Collections.Generic;
using System.Drawing;
using System.Web.Mvc;
using XASoft.BaseMvc;

namespace Gobang.Controllers
{
    public class GameController : BaseApiController
    {
        #region test version
      
        public ActionResult Gobang()
        {
            GobangData
            return View();
        }
        public Ok CleanRoom()
        {
            GobangData.Clear();
            return new Ok();
        }

        #endregion

        #region full version
        [Route("gobang/{roomId}/{roomPwd}")]
        public ActionResult Gobang(string roomId, string roomPwd)
        {
            return View();
        }

        [HttpPost]
        [Route("createroom/{roomId}/{roomPwd}")]
        public Ok CreateRoom(string roomId, string roomPwd)
        {
            return new Ok();
        }

        #endregion


    }
}
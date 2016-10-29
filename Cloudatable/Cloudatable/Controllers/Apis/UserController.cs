using System.Web.Http;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using Cloudatable.Core;
using Cloudatable.Models;
using Cloudatable.Models.CommonModel;

namespace Cloudatable.Controllers.Apis
{
    public class UserController : ApiController
    {
        public UserController()
        {
         var x=   new Test();
        }

        public IHttpActionResult Register(AccountInfo accountInfo)
        {
            UserCore.Register(accountInfo);
            return Ok();
        }
    }
}
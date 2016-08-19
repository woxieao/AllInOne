using System.IO;
using System.Web.Mvc;
using Cloudatable.Configs;
using Cloudatable.Core;
using Cloudatable.Models;

namespace Cloudatable.Controllers
{
    public class UserController : Controller
    {

        public UserController()
        {

        }

        public ActionResult Register()
        {
            return View();
        }
    }
}
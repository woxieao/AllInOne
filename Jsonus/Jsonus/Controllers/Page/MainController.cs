using System.Web;
using System.Web.Mvc;

namespace Jsonus.Controllers.Page
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
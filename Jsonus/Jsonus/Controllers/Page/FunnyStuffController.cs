using System.Web;
using System.Web.Mvc;

namespace Jsonus.Controllers.Page
{
    public class FunnyStuffController : Controller
    {
        public ActionResult Bus()
        {
            return View("Bus/BusIndex");
        }
        public ActionResult Domain()
        {
            return View("Domain/Index");
        }
    }
}
using System.Web;
using System.Web.Mvc;
using SensitiveWordFilter;

namespace SoyWeb
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new SensitiveWordAttribute());
        }
    }
}

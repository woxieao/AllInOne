using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Just4TestWeb.Startup))]
namespace Just4TestWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            Microsoft.AspNet.SignalR.StockTicker.Startup.ConfigureSignalR(app);
        }
    }
}

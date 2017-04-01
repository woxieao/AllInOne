using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SoyWeb.Startup))]
namespace SoyWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

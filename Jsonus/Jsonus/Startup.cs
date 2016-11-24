using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Jsonus.Startup))]
namespace Jsonus
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

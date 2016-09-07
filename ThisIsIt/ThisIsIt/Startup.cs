using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ThisIsIt.Startup))]
namespace ThisIsIt
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

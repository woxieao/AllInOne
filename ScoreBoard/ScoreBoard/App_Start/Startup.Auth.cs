using Microsoft.AspNet.SignalR;
using Owin;
using ScoreBoard.SignalR;

namespace ScoreBoard
{
    public partial class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {
            GlobalHost.HubPipeline.AddModule(new ScoreHubPipelineModule());
            var hubConfiguration = new HubConfiguration { EnableDetailedErrors = true };
            app.MapSignalR(hubConfiguration);
        }
    }
}
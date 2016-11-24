using Microsoft.AspNet.SignalR.Hubs;

namespace Just4TestWeb.Hub
{

    [HubName("ChatCore")]
    public class ChatHub : Microsoft.AspNet.SignalR.Hub
    {
        public void Send(string name, string message)
        {
            //send message to all pages
            Clients.All.SentMsgToPages(name, message);
            
        }
        public void Send2(string name, string message)
        {
            //send message to all pages
            Clients.All.SentMsgToPages(name, message);

        }
    }
}
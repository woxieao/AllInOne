using System.IO;
using ScoreBoard.Core;

namespace ScoreBoard
{
    public class Singleton
    {
        public static readonly UserLogic UserLogic = new UserLogic(CacheHolder.UserList);
        public static readonly RoomLogic RoomLogic = new RoomLogic(CacheHolder.RoomList);
        public static readonly long CurrentToken = new FileInfo(System.Reflection.Assembly.GetExecutingAssembly().GetName().CodeBase.Replace("file:///", "")).LastWriteTime.Ticks;
    }
}
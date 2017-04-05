using System;
using System.Configuration;
using System.IO;
using ScoreBoard.Core;
using ScoreBoard.Models.Exceptions;

namespace ScoreBoard
{
    public class Singleton
    {
        public static readonly UserLogic UserLogic = new UserLogic(CacheHolder.UserList);
        public static readonly RoomLogic RoomLogic = new RoomLogic(CacheHolder.RoomList);
        public static readonly long CurrentToken = new FileInfo(System.Reflection.Assembly.GetExecutingAssembly().GetName().CodeBase.Replace("file:///", "")).LastWriteTime.Ticks;
        public static readonly int OneTurnSecond = GetIntConfig(nameof(OneTurnSecond));
        private static int GetIntConfig(string configName)
        {
            var val = ConfigurationManager.AppSettings[configName];
            if (string.IsNullOrWhiteSpace(val))
            {
                throw new ArgumentException($"配置[{configName}]值不能为空");
            }
            return Convert.ToInt32(val);
        }
    }
}
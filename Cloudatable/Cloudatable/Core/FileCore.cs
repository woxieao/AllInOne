using System.IO;
using System.Linq;
using Cloudatable.Configs;
using Cloudatable.Models;
using Newtonsoft.Json;

namespace Cloudatable.Core
{
    internal class FileCore
    {
        public static bool IsEmailFolderExist(string email)
        {
            var folderInfo = new DirectoryInfo(Config.FilePath.UserData);
            return folderInfo.GetDirectories($"[{email.GetEmail()}]*").Any();
        }

        public static bool IsUsernameFolderExist(string username)
        {
            var folderInfo = new DirectoryInfo(Config.FilePath.UserData);
            return folderInfo.GetDirectories($"*[{username.GetUsername()}]*").Any();
        }

    

        public static void SaveFile()
        {
        }

        public static string Test()
        {
            return "";
        }
    }
}
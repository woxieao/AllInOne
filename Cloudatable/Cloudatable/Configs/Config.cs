using System;
using System.Web.Configuration;

namespace Cloudatable.Configs
{
    internal class Config
    {
        public struct FilePath
        {
            public static readonly string RootPath = System.Web.Hosting.HostingEnvironment.MapPath("~/");
            public static readonly string UserData =
                $"{RootPath}{WebConfigurationManager.AppSettings[nameof(UserData)]}";
            public static readonly string Picture =
           $"{RootPath}{WebConfigurationManager.AppSettings[nameof(Picture)]}";
        }

        public struct DefaultValues
        {
            public readonly static string Avatar = $"/{FilePath.Picture}/XA.png";
            public readonly static string Motto = "All work and no play makes Jack a dull boy";
            public readonly static string Sex = "男";
        }

        public struct Exception
        {
            public static readonly bool ShowServiceError = WebConfigurationManager.AppSettings[nameof(ShowServiceError)] == "1" || WebConfigurationManager.AppSettings[nameof(ShowServiceError)] == "true";
        }
    }
}
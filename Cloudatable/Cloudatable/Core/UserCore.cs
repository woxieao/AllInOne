using System.IO;
using System.Text.RegularExpressions;
using Cloudatable.Configs;
using Cloudatable.Models;
using Cloudatable.WebCore;
using Newtonsoft.Json;

namespace Cloudatable.Core
{
    internal static class UserCore
    {
        public static readonly Regex EmailReg = new Regex("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?$", RegexOptions.IgnoreCase | RegexOptions.ExplicitCapture | RegexOptions.Compiled);
        public static readonly Regex UsernameReg = new Regex("^[a-zA-Z0-9]{1,20}$");
        public static readonly Regex UserPwdReg = new Regex("^[a-zA-Z0-9]{1,20}$");
        public const string AccountInfoFileName = "account.ini";

        public static string GetEmail(this string email)
        {
            email = (email ?? string.Empty).Trim();
            if (!EmailReg.IsMatch(email) || email.Length > 30)
            {
                throw new ApiException("Email格式错误");
            }
            else
            {
                return email.ToLower();
            }
        }
        public static string GetUsername(this string username)
        {
            username = (username ?? string.Empty).Trim();
            if (!UsernameReg.IsMatch(username))
            {
                throw new ApiException("用户名只能是1--20位字母与数字的组合");
            }
            else
            {
                return username.ToLower();
            }
        }
        public static string GetPwd(this string pwd)
        {
            pwd = (pwd ?? string.Empty).Trim();
            if (!UsernameReg.IsMatch(pwd))
            {
                throw new ApiException("密码只能是1--20位字母与数字的组合");
            }
            else
            {
                return pwd.ToLower();
            }
        }

        public static void Register(AccountInfo accountInfo)
        {
            if (!FileCore.IsEmailFolderExist(accountInfo.AccountEmail) && !FileCore.IsUsernameFolderExist(accountInfo.Username))
            {
                var userFolder = $"{Config.FilePath.UserData}/[{accountInfo.AccountEmail}][{accountInfo.Username}]";
                new DirectoryInfo(userFolder).Create();
                var accountInfoPath = $"{userFolder}/{UserCore.AccountInfoFileName}";
                using (var sw = new StreamWriter(accountInfoPath, false))
                {
                    sw.Write(JsonConvert.SerializeObject(accountInfo));
                }
            }
            else
            {
                throw new ApiException("[账户邮箱已注册]或[用户名已存在]");
            }
        }
    }
}
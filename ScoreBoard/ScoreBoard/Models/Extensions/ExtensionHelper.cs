using System;
using System.Security.Cryptography;
using System.Text;

namespace ScoreBoard.Models.Extensions
{

    public static class ExtensionHelper
    {
        internal const string Md5Salt = "2b|!2b==?";

        public static bool IsNull(this Guid guid)
        {
            return guid.Equals(Guid.Empty);
        }
        public static string GetMd5(this string str, string salt = Md5Salt)
        {
            return BitConverter.ToString(new MD5CryptoServiceProvider().ComputeHash(Encoding.UTF8.GetBytes(salt + str))).Replace("-", string.Empty).ToLower();
        }
        /// <summary>
        /// 判断是否签名相等
        /// </summary>
        /// <param name="md5Str">MD5签名值</param>
        /// <param name="str">需要对比未签名的值</param>
        /// <param name="salt">料</param>
        /// <returns></returns>
        public static bool IsMd5Equal(this string md5Str, string str, string salt = Md5Salt)
        {
            return str.GetMd5(salt) == md5Str;
        }
        public static string GetInnerEx(this Exception ex)
        {
            return ex.InnerException != null ? ex.InnerException.GetInnerEx() : ex.Message;
        }
    }

}

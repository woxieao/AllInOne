using System;
using System.Security.Cryptography;
using System.Text;

namespace AlexXieBrain
{
    public class EncryptCore
    {
        internal const string DefaulfSalt = "2b|!2b==?";
        
        public static string GetMd5(string str, string salt = "")
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
        public static bool IsMd5Equal(string md5Str, string str, string salt = "")
        {
            return GetMd5(str, salt) == md5Str;
        }

    }
}

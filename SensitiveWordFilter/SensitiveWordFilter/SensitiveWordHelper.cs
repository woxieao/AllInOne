
namespace SensitiveWordFilter
{
    internal static class SensitiveWordHelper
    {
        public static long Counter1 = 0;
        public static long Counter2 = 0;
        public static long Counter3 = 0;


        public static string FastCheckStr(this string strToCheck, WordTree wordTree)
        {
            var currentWordTree = wordTree;
            foreach (var t in strToCheck)
            {
                if (currentWordTree.TryGetChild(t, out var dict))
                {
                    if (dict.IsEnd)
                    {
                        return dict.WhoAmI();
                    }
                    else
                    {
                        currentWordTree = dict;
                    }
                }
                else
                {
                    currentWordTree = wordTree;
                }
            }
            return string.Empty;
        }

        //public static unsafe string UnsafeFastCheckStr(char* pointer, WordTree wordTree)
        //{
        //    while (true)
        //    {
        //        if (wordTree.TryGetChild(*pointer, out var dict))
        //        {
        //            if (dict.IsEnd)
        //            {
        //                return dict.WhoAmI();
        //            }
        //            else
        //            {
        //                if (*++pointer == 0)
        //                {
        //                    return null;
        //                }
        //                else
        //                {
        //                    wordTree = dict;
        //                }
        //            }
        //        }
        //        else
        //        {
        //            return null;
        //        }
        //    }
        //}
    }
}

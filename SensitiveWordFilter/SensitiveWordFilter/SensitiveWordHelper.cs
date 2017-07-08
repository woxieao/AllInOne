
namespace SensitiveWordFilter
{
    internal static class SensitiveWordHelper
    {
        public static long Counter1 = 0;
        public static long Counter2 = 0;
        public static long Counter3 = 0;

        public static  string FastCheckStr(this string strToCheck, int currentIndex, int strLen, WordTree wordTree)
        {
            while (true)
            {
                if (wordTree.TryGetChild(strToCheck[currentIndex], out var dict))
                {
                    if (dict.IsEnd)
                    {
                        return dict.WhoAmI();
                    }
                    else
                    {
                        if (++currentIndex >= strLen)
                        {
                            return null;
                        }
                        else
                        {
                            wordTree = dict;
                        }
                    }
                }
                else
                {
                    return null;
                }
            }
        }


        public static unsafe string UnsafeFastCheckStr(char* pointer, WordTree wordTree)
        {
            while (true)
            {
                if (wordTree.TryGetChild(*pointer, out var dict))
                {
                    if (dict.IsEnd)
                    {
                        return dict.WhoAmI();
                    }
                    else
                    {
                        if (*++pointer == 0)
                        {
                            return null;
                        }
                        else
                        {
                            wordTree = dict;
                        }
                    }
                }
                else
                {
                    return null;
                }
            }
        }
    }
}

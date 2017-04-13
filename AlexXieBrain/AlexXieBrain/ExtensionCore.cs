using System;

namespace AlexXieBrain
{
    public static class ExtensionCore
    {
        public static string GetTimeStamp()
        {
            return DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss");
        }
    }
}

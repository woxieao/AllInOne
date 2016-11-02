using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace ThisIsit.Config
{
    public class Config
    {
        public static long CurrentToken =
            new FileInfo(System.Reflection.Assembly.GetExecutingAssembly()
                .GetName()
                .CodeBase.Replace("file:///", "")).LastWriteTime.Ticks;

        public struct System
        {
        }
    }
}
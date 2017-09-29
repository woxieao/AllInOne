using System;
using System.Collections.Generic;
using Wox.Plugin;

namespace EncodeHelper
{
    public class Main : IPlugin
    {
        public List<Result> Query(Query query)
        {
            var result = new List<Result>();
            result.Add(new Result
            {
                Title = "Title",
                SubTitle = "SubTitle",
                Action = (a) => { return true; }
            });
            return result;
        }

        public void Init(PluginInitContext context)
        {

        }
    }
}

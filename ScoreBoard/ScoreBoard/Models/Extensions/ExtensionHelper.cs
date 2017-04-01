using System;
using System.Web;
using System.Web.Mvc;
using ScoreBoard.Models.Results;

namespace ScoreBoard.Models.Extensions
{

    public static class ExtensionHelper
    {
        public static bool IsNull(this Guid guid)
        {
            return guid.Equals(Guid.Empty);
        }
    }

}

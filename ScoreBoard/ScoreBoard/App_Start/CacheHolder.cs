using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Runtime.Caching;
using System.Web.Security;
using ScoreBoard.FluentValidations;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Exceptions;

namespace ScoreBoard
{
    public static class CacheHolder
    {
        public static readonly MemoryCache RoomList = new MemoryCache(nameof(RoomList));
        public static readonly MemoryCache UserList = new MemoryCache(nameof(UserList));
    }
}
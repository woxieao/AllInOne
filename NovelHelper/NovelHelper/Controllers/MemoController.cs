using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NovelHelper.Models;

namespace NovelHelper.Controllers
{
    [Route("api/[controller]")]
    public class MemoController : Controller
    {
        [HttpGet("[action]")]
        public List<Memo> List()
        {
            return new NovelContext().Memo.ToList();
        }
    }
}

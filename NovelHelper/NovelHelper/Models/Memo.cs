using System;
using System.Collections.Generic;

namespace NovelHelper.Models
{
    public partial class Memo
    {
        public Guid MemoId { get; set; }
        public string Content { get; set; }
        public int? Sort { get; set; }
        public DateTime CreateDate { get; set; }
        public bool DelFlag { get; set; }
        public Guid? RelationId { get; set; }
        public int Type { get; set; }
        public DateTime LastUpdateTime { get; set; }
    }
}

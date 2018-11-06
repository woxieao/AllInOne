using System;
using System.Collections.Generic;

namespace NovelHelper.Models
{
    public partial class Chapter
    {
        public Guid ChapterId { get; set; }
        public int ChapterNumber { get; set; }
        public string Name { get; set; }
        public string Outline { get; set; }
        public string Content { get; set; }
        public string Remark { get; set; }
        public DateTime CreateDate { get; set; }
        public bool DelFlag { get; set; }
    }
}

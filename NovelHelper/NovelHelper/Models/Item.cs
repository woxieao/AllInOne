using System;
using System.Collections.Generic;

namespace NovelHelper.Models
{
    public partial class Item
    {
        public Guid ItemId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string SpecialEffect { get; set; }
        public int Type { get; set; }
        public int Rarity { get; set; }
        public string Remark { get; set; }
        public int Level { get; set; }
        public DateTime CreateDate { get; set; }
        public bool DelFlag { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace NovelHelper.Models
{
    public partial class Character
    {
        public Guid CharacterId { get; set; }
        public string Name { get; set; }
        public int? Level { get; set; }
        public int? Talent { get; set; }
        public bool? Gender { get; set; }
        public string Description { get; set; }
        public bool DelFlag { get; set; }
        public DateTime CreateDate { get; set; }
        public int Intimacy { get; set; }
    }
}

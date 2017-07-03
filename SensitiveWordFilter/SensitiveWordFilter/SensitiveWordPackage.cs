using System.Collections.Generic;

namespace SensitiveWordFilter
{
    public class SensitiveWordPackage
    {
        public SensitiveWordPackage()
        {
            VerbList = new List<string>();
            NounList = new List<string>();
            ExclusiveNounsList = new List<string>();
        }
        public string Type { get; set; }
        public List<string> VerbList { get; set; }
        public List<string> NounList { get; set; }
        public List<string> ExclusiveNounsList { get; set; }
        public HashSet<char> VerbCharList { get; set; }
        public HashSet<char> NounCharList { get; set; }
        public HashSet<char> ExclusiveNounsCharList { get; set; }
    }
}
using System.Collections.Generic;

namespace LoadSensitiveWordExcel
{
    public class SensitiveWordPackage
    {
        public SensitiveWordPackage()
        {
            VerbList = new HashSet<string>();
            NounList = new HashSet<string>();
            ExclusiveNounsList = new HashSet<string>();
        }
        public string Type { get; set; }
        public HashSet<string> VerbList { get; set; }
        public HashSet<string> NounList { get; set; }
        public HashSet<string> ExclusiveNounsList { get; set; }
    }
}
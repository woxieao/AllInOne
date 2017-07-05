using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SensitiveWordFilter
{
    public class WordTree
    {
        private bool HasChild()
        {
            return Children.Any();
        }

        public WordTree()
        {
            Children = new Dictionary<char, WordTree>();
        }
        public string WhoAmI()
        {
            var sb = new StringBuilder();
            sb.Append(Key);
            var papa = Papa;
            while (papa != null && papa.Papa != null)
            {
                sb.Append(papa.Key);
                papa = papa.Papa;
            }
            var sbResult = new StringBuilder();
            for (var i = sb.ToString().Length - 1; i >= 0; i--)
            {
                sbResult.Append(sb[i]);
            }
            return sbResult.ToString();
        }
        public void PushIn(string word)
        {
            if (string.IsNullOrEmpty(word))
            {
                IsEnd = true;
                return;
            }
            var key = word[0];
            if (Children.ContainsKey(key))
            {
                if (!HasChild())
                {
                    return;
                }
                else
                {
                    var child = Children[key];
                    child.PushIn(word.Substring(1));
                }
            }
            else
            {
                var child = new WordTree
                {
                    Key = key,
                    Papa = this,
                };
                child.PushIn(word.Substring(1));
                Children.Add(key, child);
                Children = Children.OrderByDescending(i => i.Key).ToDictionary(pair => pair.Key, pair => pair.Value);
            }
        }
        public bool IsEnd { get; set; }
        public char Key { get; set; }
        public WordTree Papa { get; set; }
        public Dictionary<char, WordTree> Children { get; set; }
    }
}
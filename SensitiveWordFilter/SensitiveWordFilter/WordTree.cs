﻿using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SensitiveWordFilter
{
    public class WordTree
    {
        private bool HasChild()
        {
            return OriginalChildren.Any() || CapitalChildren.Any();
        }

        public WordTree()
        {
            OriginalChildren = new Dictionary<char, WordTree>();
            CapitalChildren = new Dictionary<char, WordTree>();
        }

        public string WhoAmI()
        {
            var sb = new StringBuilder();
            sb.Append(Key);
            var papa = Papa;
            while (papa?.Papa != null)
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

        private static bool IsCapital(char ch)
        {
            return ch >= 'A' && ch <= 'Z';
        }

        private void PushToChild(char key, string word, IDictionary<char, WordTree> tree)
        {

            if (tree.TryGetValue(key, out WordTree oldChild))
            {
                if (!HasChild())
                {
                    return;
                }
                else
                {
                    oldChild.PushIn(word.Substring(1));
                }
            }
            else
            {
                var child = new WordTree()
                {
                    Key = key,
                    Papa = this
                };
                child.PushIn(word.Substring(1));
                tree.Add(key, child);
            }
        }

        public void PushIn(string word)
        {
            if (string.IsNullOrEmpty(word))
            {
                IsEnd = true;
                return;
            }
            var key = word[0];
            var isCapital = IsCapital(key);
            PushToChild(key, word, isCapital ? CapitalChildren : OriginalChildren);
            if (OriginalChildren.Any() && CapitalChildren.Any())
            {
                TryGetChild = GetAllChildren;
            }
            else
            {
                if (OriginalChildren.Any())
                {
                    TryGetChild = GetOriChildren;
                }
                if (CapitalChildren.Any())
                {
                    TryGetChild = GetCapitalChildren;
                }
            }
        }

        private bool GetAllChildren(char key, out WordTree wordTree)
        {
            return GetCapitalChildren(key, out wordTree) || GetOriChildren(key, out wordTree);
        }

        private bool GetCapitalChildren(char key, out WordTree wordTree)
        {
            if (key >= 'a' && key <= 'z')
            {
                key = (char)(key - 32);
            }
            return CapitalChildren.TryGetValue(key, out wordTree);
        }

        private bool GetOriChildren(char key, out WordTree wordTree)
        {
            return OriginalChildren.TryGetValue(key, out wordTree);
        }

        public bool IsEnd;/*{ get; set; }*/
        protected char Key;/* { get; set; }*/
        protected WordTree Papa; /*{ get; set; }*/
        public TryGetChildDelegate TryGetChild;
        protected Dictionary<char, WordTree> OriginalChildren;/* { get; set; }*/
        protected Dictionary<char, WordTree> CapitalChildren; /*{ get; set; }*/
    }

    public delegate bool TryGetChildDelegate(char input, out WordTree output);
}
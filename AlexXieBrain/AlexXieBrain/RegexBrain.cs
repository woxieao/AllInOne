using System;
using System.Text.RegularExpressions;

namespace AlexXieBrain
{
    public class RegexBrain
    {
        protected virtual void MatchToRun(string str, Regex reg, Action<string> act)
        {
        }
        protected virtual void NotMatchToRun(string str, Regex reg, Action<string> act)
        {
        }
    }
}

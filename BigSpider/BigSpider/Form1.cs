using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace BigSpider
{
    public partial class Form1 : Form
    {
        private SpiderBrain _spiderBrain = new SpiderBrain();
        public Form1()
        {
            InitializeComponent();
        }


        private const int LikeLimit = 50;
        private List<string> _picList = new List<string>();
        private readonly int currentIndex = 10000;
        public void Test()
        {
            _spiderBrain.InitHttpClient("http://www.poocg.com/");
            for (var id = 0; id < 10000; id++)
            {
                try
                {
                    var result = _spiderBrain.SpiderCore.GetStringAsync("works/view/" + (currentIndex + id)).Result;
                    var likeCount = Convert.ToInt32(new Regex("<p><strong>(\\d+)</strong><span>喜欢</span></p>").Match(result).Groups[1].ToString());
                    if (likeCount >= LikeLimit)
                    {
                        var imgReg = new Regex("\"(\\S+)\\!photo\\.middle\\.jpg");
                        var pics = imgReg.Matches(result);
                        for (var i = 0; i < pics.Count; i++)
                        {
                            var picUrl = pics[i].Groups[1].ToString();
                            using (var sw = new StreamWriter("C:\\data\\test.txt", true))
                            {
                                sw.WriteLine($"<img src='{picUrl}' height='240'/><br/>");
                                sw.Close();
                            }
                            //   _picList.Add(picUrl);
                        }
                    }
                }
                catch
                {

                    //
                }
            }
            //var str = _picList.Aggregate(string.Empty, (current, pic) => current + ($"<img height='240' src='{pic}'/><br>\r\n"));
            //foreach (var VARIABLE in COLLECTION)
            //{

            //}

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Test();
        }
    }
}

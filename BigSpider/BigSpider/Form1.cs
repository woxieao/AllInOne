using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using AlexXieBrain;
using Newtonsoft.Json;

namespace BigSpider
{
    public partial class Form1 : Form
    {
        private SpiderBrain _spiderBrain = new SpiderBrain();
        ThreadBrain threadBrain = new ThreadBrain();
        public Form1()
        {
            InitializeComponent();
        }


        private const int LikeLimit = 50;
        private List<string> _picList = new List<string>();
        private readonly int currentIndex = 44884;
        public void Test()
        {

            _spiderBrain.InitHttpClient("http://www.poocg.com/");
            for (var id = 0; id < 470000; id++)
            {
                var id1 = id;
                threadBrain.PushInThreadList(() =>
                {
                    try
                    {
                        var result = _spiderBrain.SpiderCore.GetStringAsync("works/view/" + (currentIndex + id1)).Result;
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
                            }
                        }
                    }
                    catch
                    {
                        //
                    }
                });
            }

            var xxx = threadBrain.StartThread();
            //    threadBrain.PauseThread();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Test();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            textBox1.Text = threadBrain.GetUnstartedThreadCount().ToString();
        }
    }
}

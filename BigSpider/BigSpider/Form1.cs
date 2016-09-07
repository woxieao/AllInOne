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
        private readonly ThreadCore _threadCore = new ThreadCore();
        public Form1()
        {
            InitializeComponent();
        }


        private const int LikeLimit = 50;
        private List<string> _picList = new List<string>();
        private readonly int currentIndex = 44884;

        public void Test2()
        {
            var pisList = new List<string>();
            _spiderBrain.InitHttpClient("https://www.uktights.com/");
            var flagStr = "https://www.uktights.com/tightsimages/";
            for (var id = 2000; id < 3000; id++)
            {
                var id1 = id;
                _threadCore.PushInThreadList(() =>
                {
                    try
                    {
                        var result = _spiderBrain.SpiderCore.GetStringAsync("product/" + id1).Result;
                        var imgs = new Regex($"{flagStr}(\\S+)\\.jpg");
                        var pics = imgs.Matches(result);
                        for (var i = 0; i < pics.Count; i++)
                        {
                            var picUrl = pics[i].Groups[1].ToString();
                            if (pisList.All(x => x != picUrl))
                            { pisList.Add(picUrl); }
                        }
                    }
                    catch
                    {
                        //
                    }
                });
            }
            _threadCore.StartThread(() =>
                  {
                      var str = string.Empty;
                      foreach (var pic in pisList)
                      {
                          str += $"<img src='{flagStr}{pic}' height='240'/><br/>";
                      }
                      using (var sw = new StreamWriter("C:\\data\\socks2.htm", true))
                      {
                          sw.WriteLine(str);
                          sw.Close();
                      }
                  });
            //    threadBrain.PauseThread();
        }


        public void Test()
        {
            //5196
            _spiderBrain.InitHttpClient("http://www.poocg.com/");

            // _spiderBrain.InitHttpClient("https://www.uktights.com/product/");
            for (var id = 0; id < 470000; id++)
            {
                var id1 = id;
                _threadCore.PushInThreadList(() =>
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

            var xxx = _threadCore.StartThread();
            //    threadBrain.PauseThread();
        }


        private void button1_Click(object sender, EventArgs e)
        {

            Test2();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            textBox1.Text = $"{_threadCore.GetUnstartedThreadCount()}___{_threadCore.GetLiveThreadCount()}";
        }
    }
}

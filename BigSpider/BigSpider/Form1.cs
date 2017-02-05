using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using AlexXieBrain;
using Newtonsoft.Json;

namespace BigSpider
{
    public partial class Form1 : Form
    {
        private static readonly SpiderBrain SpiderBrain = new SpiderBrain();
        private static readonly ThreadCore ThreadCore = new ThreadCore();
        private static readonly FileCore FileCore = new FileCore();
        private static readonly string CounterPath = $"{FileCore.CurrentFilePath}CounterPath.txt";
        private const int LikeLimit = 50;
        private bool _isRun = false;
        private static int _currentCounter;
        public Form1()
        {
            InitializeComponent();
            SpiderBrain.InitHttpClient("http://www.poocg.com/");
            FileCore.CreateIfNotExist(CounterPath, 44884.ToString());
        }

        int index = 0;
        int saveCount = 0;
        public void InitThread()
        {
            int.TryParse(FileCore.ReadAsString(CounterPath), out _currentCounter);
            ThreadCore.DisposeAllThread();
            var eachTurn = 10000;
            for (var id = _currentCounter; id < _currentCounter + eachTurn; id++)
            {
                var id1 = id;
                ThreadCore.PushInThreadList(() =>
                {
                    try
                    {
                        var result = SpiderBrain.SpiderCore.GetStringAsync($"works/view/{id1}").Result;
                        var likeCount = Convert.ToInt32(new Regex("<p><strong>(\\d+)</strong><span>喜欢</span></p>").Match(result).Groups[1].ToString());
                        if (likeCount >= LikeLimit)
                        {
                            var imgReg = new Regex("\"(\\S+)\\!photo\\.middle\\.jpg");
                            var pics = imgReg.Matches(result);
                            for (var i = 0; i < pics.Count; i++)
                            {
                                var picUrl = pics[i].Groups[1].ToString();
                                FileCore.SaveAsString($"<img src='{picUrl}' title='图片ID:{id1} 获赞数:{likeCount}' height='240'/><br/>", $"{FileCore.DefaultSaveFolder}/wallpapers.htm");
                            }
                            saveCount++;
                        }
                    }
                    catch
                    {
                        // ignored
                    }
                    finally
                    {
                        if (id1 >= index)
                        {
                            label7.Text = id1.ToString();
                            FileCore.SaveAsString(id1.ToString(), CounterPath, false);
                        }
                    }
                });
            }
            ThreadCore.StartThread(() => MessageBox.Show($"{eachTurn}条数据抓取完毕,是否开始下一轮?"));
            _isRun = true;
            button2.Visible = true;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            InitThread();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            label3.Text = ThreadCore.GetLiveThreadCount().ToString();
            label4.Text = ThreadCore.GetUnstartedThreadCount().ToString();
            label5.Text = (ThreadCore.ThreadList.Count() - ThreadCore.GetUnstartedThreadCount()).ToString();
            button2.Text = !_isRun ? "开始" : "暂停";
            label9.Text = saveCount.ToString();
        }

        private void Pause()
        {
            ThreadCore.PauseThread();
        }
        private void button2_Click(object sender, EventArgs e)
        {
            if (_isRun)
            {
                Pause();
            }
            else
            {
                ThreadCore.StartThread();
            }
            _isRun = !_isRun;
            button2.Text = _isRun ? "暂停" : "开始";
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            Pause();
        }
    }
}

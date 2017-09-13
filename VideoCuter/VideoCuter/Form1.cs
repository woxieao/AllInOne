using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using System.Windows.Forms;
using Newtonsoft.Json;
using ThreadState = System.Threading.ThreadState;

namespace VideoCuter
{
    public partial class Form1 : Form
    {
        const string VideoCutInfoPath = "VideoCutInfo.txt";
        public Form1()
        {
            InitializeComponent();
        }

        private void WriteInfo<T>(T data)
        {
            using (var sw = File.AppendText(VideoCutInfoPath))
            {
                sw.WriteLine(JsonConvert.SerializeObject(data));
            }
        }

        HashSet<VideoInfo> _videoList = new HashSet<VideoInfo>();
        VideoInfo _currentVideoInfo;
        readonly List<Thread> _threadList = new List<Thread>();

        private bool PlayFirst()
        {
            label1.Text = @"0";
            label2.Text = @"0";
            var video = _videoList.FirstOrDefault(i => !i.IsFinish);
            _currentVideoInfo = video;
            if (video != null)
            {
                axWindowsMediaPlayer1.URL = video.FileOriginalPath;
                axWindowsMediaPlayer1.Ctlcontrols.play();
                return true;
            }
            else
            {
                return false;
            }
        }

        private void initBtn_Click(object sender, EventArgs e)
        {
            var openFileDialog = new OpenFileDialog { Filter = @"视频列表文件|*.txt" };
            if (openFileDialog.ShowDialog() == DialogResult.OK)
            {
                _videoList = new HashSet<VideoInfo>();
                using (var sr = new StreamReader(openFileDialog.FileName))
                {
                    while (!sr.EndOfStream)
                    {
                        var video = new VideoInfo
                        {
                            FileOriginalPath = sr.ReadLine(),
                            IsFinish = false,
                        };
                        _videoList.Add(video);
                    }
                }
                MessageBox.Show(@"视频列表解析完成,开始播放");
                PlayFirst();
            }
        }

        private void startBtn_Click(object sender, EventArgs e)
        {
            _currentVideoInfo.StartIndex = axWindowsMediaPlayer1.Ctlcontrols.currentPosition;
            label1.Text = _currentVideoInfo.StartIndex.ToString("f1");
        }

        private void endBtn_Click(object sender, EventArgs e)
        {
            _currentVideoInfo.EndPoint = axWindowsMediaPlayer1.Ctlcontrols.currentPosition;
            label2.Text = _currentVideoInfo.EndPoint.ToString("f1");
        }

        private void cutBtn_Click(object sender, EventArgs e)
        {
            if (_currentVideoInfo.EndPoint <= _currentVideoInfo.StartIndex)
            {
                MessageBox.Show(@"结束时间点不能小于等于开始时间点");
                return;
            }
            else
            {
                _currentVideoInfo.IsFinish = true;
                WriteInfo(_currentVideoInfo);
                var msg = _currentVideoInfo.FileName + @"剪辑完毕";
                var flag = PlayFirst();
                if (flag)
                {
                    msg += "\r\n正在播放:" + _currentVideoInfo.FileName;
                }
                else
                {
                    MessageBox.Show(@"全部视频时间节点已记录完毕,现开始剪辑");
                    RunCutter(_videoList);
                }
                msgLable.Text = msg;
            }
        }

        private void RunCutter(HashSet<VideoInfo> videoList)
        {
            foreach (var video in videoList)
            {
                var thread = new Thread(() =>
                  {
                      var proc = new Process
                      {
                          StartInfo = new ProcessStartInfo
                          {
                              FileName = Environment.CurrentDirectory + "/cutter/ffmpeg.exe",
                              Arguments = $"-ss {video.StartIndex} -i {video.FileOriginalPath} -t {video.EndPoint - video.StartIndex} -c copy {video.FileOutputPath}",
                              WindowStyle = ProcessWindowStyle.Hidden
                          }
                      };
                      proc.Start();
                  });
                _threadList.Add(thread);
                thread.Start();
                logLable.Text += $"\r\n[{video.FileName}]已开始解析";
            }

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            startBtn.Enabled = _currentVideoInfo != null;
            cutBtn.Enabled = _currentVideoInfo != null;
            endBtn.Enabled = _currentVideoInfo != null;
            debugMsg.Text = $@"剩余视频:{ _videoList.Count(i => !i.IsFinish)}";
            if (_threadList.Any())
            {

                var str = string.Empty;
                for (var i = 0; i < DateTime.Now.Ticks % 3; i++)
                {
                    str += ".";
                }
                threadMsg.Text = _threadList.Any(i => i.ThreadState == ThreadState.Running) ? "多线程进行中" + str : "全部视频均剪辑完成";
            }
        }
    }
}

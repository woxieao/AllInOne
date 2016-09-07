using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Threading;
using System.Windows.Forms;

namespace SinaPicSender
{
    public partial class Form1 : Form
    {
        private static readonly string LogSavePath = AppDomain.CurrentDomain.BaseDirectory + "SinaPicSender.log";
        private static readonly string DataSavePath = AppDomain.CurrentDomain.BaseDirectory + "SinaPicSender.dat";
        private static Bitmap _picSources;
        private static string _url = string.Empty;
        private static string _cookies = string.Empty;
        public Form1()
        {
            InitializeComponent();
            _picSources = (Bitmap)showPictureBox.Image;
            GetUrlInfo(DataSavePath);
            urlBox.Text = _url;
            cookiesBox.Text = _cookies;
        }

        private static Bitmap ReadImageFile(string path)
        {
            FileStream fs = File.OpenRead(path);
            int filelength = 0;
            filelength = (int)fs.Length;
            var image = new Byte[filelength];
            fs.Read(image, 0, filelength);
            var result = Image.FromStream(fs);
            fs.Flush();
            fs.Close();
            var bit = new Bitmap(result);
            return bit;
        }

        private Bitmap AddTime(Bitmap pic)
        {
            var tempPic = new Bitmap(pic.Width, pic.Height);
            Graphics g = Graphics.FromImage(tempPic);
            g.DrawImage(pic, 0, 0);
            var font = new Font("Jokerman", 60, (FontStyle.Bold | FontStyle.Italic));
            var brush = new LinearGradientBrush(new Rectangle(0, 0, tempPic.Width, tempPic.Height), Color.Yellow,
                                                Color.Green, 1.2f, true);
            g.DrawString(DateTime.Now.ToString("HH:mm"), font, brush, (float)xUpDown.Value, (float)yUpDown.Value);
            g.Flush();
            return tempPic;
        }

        private string PicToBase64(Bitmap pic)
        {
            var ms = new MemoryStream();
            pic.Save(ms, System.Drawing.Imaging.ImageFormat.Gif);
            pic = null;
            var arr = new byte[ms.Length];
            ms.Position = 0;
            ms.Read(arr, 0, (int)ms.Length);
            ms.Flush();
            ms.Close();
            var picStr = Convert.ToBase64String(arr);
            return System.Web.HttpUtility.UrlEncode(picStr);
        }

        private void SelectPic()
        {
            var openfile = new OpenFileDialog();
            if (openfile.ShowDialog() == DialogResult.OK && !string.IsNullOrWhiteSpace(openFileDialog1.FileName))
            {
                var newPic = ReadImageFile(openfile.FileName);
                showPictureBox.Image = newPic;
                _picSources = newPic;
            }
            openfile.Dispose();
        }

        private void selectPicBtn_Click(object sender, EventArgs e)
        {
            SelectPic();
        }

        private bool CheckUrl()
        {
            if (!string.IsNullOrWhiteSpace(urlBox.Text) && !string.IsNullOrWhiteSpace(cookiesBox.Text))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private void testBtn_Click(object sender, EventArgs e)
        {
            try
            {
                var picExample = AddTime(_picSources);
                picExample.Save(AppDomain.CurrentDomain.BaseDirectory + "SinaPicSender.png");
                ChangeIcon();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
                WriteLog(LogSavePath, ex.ToString());
            }
        }

        private void ChangeIcon()
        {
            try
            {
                if (!CheckUrl())
                {
                    label5.Text = @"请填写Url/Cookies,否则无法更换头像";
                }
                else
                {
                    var urlStr = urlBox.Text;
                    var cookiesStr = cookiesBox.Text;
                    var addedPic = AddTime(_picSources);
                    showPictureBox.Image = addedPic;
                    var picData = string.Format("Filedata={0}&ax=0&ay=0&aw=720&type=png", PicToBase64(addedPic));
                    var msg = Common.SendRequestWithCookies(urlStr, picData, cookiesStr);
                    WriteLog(LogSavePath, string.Format("返回值:{0}", msg));
                    label5.Text = string.Format("已成功更换头像次数:{0}", ++_succTimes);
                }
            }
            catch (Exception ex)
            {
                WriteLog(LogSavePath, ex.ToString());
            }
        }

        private int _tick = 0;
        private const int Mins = 1;
        private static int _succTimes = 0;
        private void timer1_Tick(object sender, EventArgs e)
        {
            if (_tick++ % (Mins * 60) == 0)
            {
                ChangeIcon();
            }
        }

        public static void WriteLog(string logSavePath, string msg)
        {
            try
            {
                var sw = new StreamWriter(logSavePath, true);
                sw.WriteLine(DateTime.Now);
                sw.WriteLine(msg);
                sw.Flush();
                sw.Close();
            }
            catch
            {
                return;
            }
        }
        private static void GetUrlInfo(string dataPath)
        {
            if (File.Exists(dataPath))
            {
                var dat = new StreamReader(dataPath);
                _url = dat.ReadLine();
                _cookies = dat.ReadLine();
                dat.Close();
            }
        }
        private static void SaveUrlInfo(string dataPath, string urlStr, string cookiesStr)
        {
            var sw = new StreamWriter(dataPath);
            sw.WriteLine(urlStr);
            sw.WriteLine(cookiesStr);
            sw.Flush();
            sw.Close();
        }

        private void urlBox_TextChanged(object sender, EventArgs e)
        {
            SaveUrlInfo(DataSavePath, urlBox.Text, cookiesBox.Text);
        }

        private void cookiesBox_TextChanged(object sender, EventArgs e)
        {
            SaveUrlInfo(DataSavePath, urlBox.Text, cookiesBox.Text);
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            e.Cancel = true;
            notifyIcon.ShowBalloonTip(3);
            notifyIcon.BalloonTipText = @"=￣ω￣=";
            this.Hide();
        }

        private void hideToolStripMenuItem_Click(object sender, EventArgs e)
        {
            notifyIcon.ShowBalloonTip(3);
            notifyIcon.BalloonTipText = @"=￣ω￣=";
            Hide();
        }


        private void showToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Show();
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Close();
            notifyIcon.ShowBalloonTip(3, ": )", "Bye..", ToolTipIcon.Info);
            Environment.Exit(0);
        }
    }
}

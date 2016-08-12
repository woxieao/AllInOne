using System;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace HttpSender
{
    public partial class Form1 : Form
    {
        private readonly HttpCore _httpCore;
        public Form1()
        {
            _httpCore = new HttpCore();
            InitializeComponent();
        }
        private void CallInMainThread(Action act)
        {
            if (InvokeRequired)
            {
                Invoke(new Action<Action>(CallInMainThread), act);
            }
            else
            {
                act();
            }
        }
        private async void sendBtn_Click(object sender, EventArgs e)
        {
            try
            {
                respondBox.Text = $"{DateTime.Now}\r\n" + await _httpCore.Send(urlBox.Text, dataBox.Text, cookieBox.Text,
                    (int)timesBox.Value, () => { MessageBox.Show(@"All Done", @"Success"); },
                    (currentIndex) => { CallInMainThread(() => { timesLabel.Text = $"Times:{currentIndex}"; }); });
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString(), @"Error");
            }
        }

        private void diyBtn_Click(object sender, EventArgs e)
        {
            try
            {
                const string matchFlag = "{\"status\":false,\"info\":\"验证码不匹配 , 请重试!\"}";
                _httpCore.BotSend(urlBox.Text, cookieBox.Text, matchFlag,
                    (int)timesBox.Value, () => { MessageBox.Show(@"All Done", @"Success"); },
                    (currentIndex) => { CallInMainThread(() => { timesLabel.Text = $"Times:{currentIndex}"; }); });
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString(), @"Error");
            }
        }

        private void cookieBox_MouseClick(object sender, MouseEventArgs e)
        {
            cookieBox.SelectAll();
        }

        private void dataBox_MouseClick(object sender, MouseEventArgs e)
        {
            dataBox.SelectAll();
        }

        private void urlBox_MouseClick(object sender, MouseEventArgs e)
        {
            urlBox.SelectAll();
        }

        private void respondBox_MouseClick(object sender, MouseEventArgs e)
        {
            respondBox.SelectAll();
        }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace Socketer
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void button3_Click(object sender, EventArgs e)
        {
            if (button3.Text == @"外网")
            {
                button3.Text = @"本地";
                txtIPAddress.Text = @"114.215.107.192";
            }
            else
            {
                button3.Text = @"外网";
                IPHostEntry host = Dns.GetHostEntry(Dns.GetHostName());
                IPAddress localIp = null;
                IPAddress.TryParse("127.0.0.1", out localIp);
                foreach (IPAddress ip in host.AddressList)
                {
                    if (ip.AddressFamily == AddressFamily.InterNetwork)
                    {
                        localIp = ip;
                    }
                }
                txtIPAddress.Text = localIp.ToString();
            }

        }

        private void btnSend_Click(object sender, EventArgs e)
        {
            TcpClient client = null;
            NetworkStream stream = null;
            StreamReader reader = null;
            StreamWriter writer = null;
            try
            {
                try
                {
                    client = new TcpClient(txtIPAddress.Text, int.Parse(txtPort.Text));
                }
                catch (Exception ex)
                {
                    throw new Exception("解析服务端IP时出错!", ex);
                    return;
                }
                msgBox.Text = string.Empty;
                stream = client.GetStream();
                reader = new StreamReader(stream, Encoding.UTF8);
                writer = new StreamWriter(stream, Encoding.UTF8) { AutoFlush = true };

                var newMsg = (txtSend.Text);

                writer.Write(newMsg);
                msgBox.Text = newMsg;
                string msgresopndMsg = reader.ReadToEnd();
                msgBox.Text += "\r\n" + DateTime.Now + "\r\n成功";
                txtRecieve.Text = msgresopndMsg;
            }
            catch (Exception ex)
            {
                msgBox.Text = "运行出错\n" + ex;
                txtRecieve.Text = string.Empty;
            }
            finally
            {
                if (reader != null) reader.Close();
                if (writer != null) writer.Close();
                if (stream != null) stream.Close();
                if (client != null) client.Close();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int count = 0;
            var hexStr = hexBox.Text;
            const char splitStr = ':';
            var hasBreak = hexStr.IndexOf(splitStr.ToString(), StringComparison.Ordinal) != -1;
            if (hasBreak)
            {
                count = Regex.Matches(hexStr, @":").Count + 1;
            }
            else
            {
                count = hexBox.Text.Length / 2;
            }

            var hexList = new string[count];
            if (hasBreak)
            {
                hexList = hexBox.Text.Split(splitStr);
            }
            else
            {
                var index = 0;
                for (int i = 0; i < hexStr.Length; i++)
                {
                    if (i % 2 == 0 && i != 0)
                    {
                        var sb = new StringBuilder();
                        sb.Append(hexStr[i - 2]);
                        sb.Append(hexStr[i - 1]);
                        hexList[index++] = sb.ToString();
                    }
                }
                hexList[index] = hexStr[hexStr.Length - 2] + hexStr[hexStr.Length - 1].ToString();
            }
            var byteList = new byte[hexList.Length];
            for (int i = 0; i < hexList.Length; i++)
            {
                byteList[i] = (byte)Convert.ToInt32(hexList[i], 16);
            }
            utf8Box.Text =
                Encoding.GetEncoding(string.IsNullOrWhiteSpace(encodeType.Text) ? "UTF-8" : encodeType.Text)
                    .GetString(byteList);
            gbkBox.Text = Encoding.GetEncoding("GBK").GetString(byteList);
        }

        private void hexBox_Click(object sender, EventArgs e)
        {
            hexBox.SelectAll();
        }
    }
}

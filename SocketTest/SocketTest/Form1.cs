using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SocketTest
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        static string ip = "221.179.190.200";
        //string ip = "192.168.199.154";
        private IPEndPoint _serverInfo = new IPEndPoint(IPAddress.Parse(ip), 80);
        private Socket _clientSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
        private Byte[] _msgSend;
        private byte[] _msgBuffer;
        private void button1_Click(object sender, EventArgs e)
        {

            _msgBuffer = new byte[65535];
            _msgSend = new byte[65535];
            if (!_clientSocket.Connected)
            {
                _clientSocket.Connect(_serverInfo);
            }
            var msg = textBox1.Text + DateTime.Now + "\r\n";
            _clientSocket.Send(Encoding.UTF8.GetBytes(msg));
            _clientSocket.BeginReceive(_msgBuffer, 0, _msgBuffer.Length, SocketFlags.None,
                new AsyncCallback(ReceiveCallback), null);
        }
        private void ReceiveCallback(IAsyncResult ar)
        {
            var rEnd = _clientSocket.EndReceive(ar);
            this.Invoke((MethodInvoker)delegate
                 {
                     lock (this.textBox1)
                     {
                         this.textBox1.Text += Encoding.UTF8.GetString(_msgBuffer, 0, rEnd) + "\r\n";
                     }
                 });

        }

    }
}

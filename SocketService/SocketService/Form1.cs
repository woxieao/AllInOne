using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SocketService
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            ListenClient();
        }
        private IPEndPoint ServerInfo;//存放服务器的IP和端口信息
        private Socket ServerSocket;//服务端运行的SOCKET
        private Thread ServerThread;//服务端运行的线程
        private Socket[] ClientSocket;//为客户端建立的SOCKET连接
        private int ClientNumb;//存放客户端数量
        private byte[] MsgBuffer;//存放消息数据

        private object obj;


        /// <summary>
        /// 开始服务，监听客户端
        /// </summary>
        private void ListenClient()
        {
            try
            {
                ServerSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                IPAddress ip = IPAddress.Parse("192.168.199.154");
                ServerInfo = new IPEndPoint(ip, Int32.Parse("3000"));
                ServerSocket.Bind(ServerInfo);
                ServerSocket.Listen(10);

                ClientSocket = new Socket[65535];
                MsgBuffer = new byte[65535];
                ClientNumb = 0;

                ServerThread = new Thread(new ThreadStart(RecieveAccept));
                ServerThread.Start();
            }
            catch (System.Exception ex)
            {

            }
        }

        /// <summary>
        /// 添加阻塞，监听客户端
        /// </summary>
        private void RecieveAccept()
        {
            while (true)
            {
                //等待接受客户端连接，如果有就执行下边代码，没有就阻塞
                ClientSocket[ClientNumb] = ServerSocket.Accept();
                //接受客户端信息，没有阻塞，则会执行下边输出的代码；如果是Receive则不会执行下边输出代码
                ClientSocket[ClientNumb].BeginReceive(MsgBuffer, 0, MsgBuffer.Length, SocketFlags.None,
                    new AsyncCallback(ReceiveCallback), ClientSocket[ClientNumb]);
                this.Invoke((MethodInvoker)delegate
                {
                    lock (this.textBox1)
                        this.textBox1.Text += "客户端：" + ClientNumb.ToString() + "连接成功！" + "\r\n";
                });
                ClientNumb++;
            }
        }

        /// <summary>
        /// 回发数据到客户端
        /// </summary>
        /// <param name="ar"></param>
        private void ReceiveCallback(IAsyncResult ar)
        {
            try
            {
                Socket rSocket = (Socket)ar.AsyncState;
                int rEnd = rSocket.EndReceive(ar);

                for (int i = 0; i < ClientNumb; i++)
                {
                    if (ClientSocket[i].Connected)
                    {
                        //发送数据到客户端
                        ClientSocket[i].Send(MsgBuffer, 0, rEnd, SocketFlags.None);
                    }

                    //同时接受客户端回发的数据，用于回发
                    rSocket.BeginReceive(MsgBuffer, 0, MsgBuffer.Length, 0, new AsyncCallback(ReceiveCallback), rSocket);
                }
            }
            catch (System.Exception ex)
            {

            }
        }
    }
}

0000   d4 ee 07 2e cd 88 24 0a 64 b3 6b 34 08 00 45 00  ......$.d.k4..E.
0010   00 b2 1c fe 40 00 40 06 b1 38 c0 a8 c7 9a b6 fe....@.@..8......
0020   2c ce 03 72 00 50 05 5f f1 0c c2 4d 83 0d 50 18  ,..r.P._...M..P.
0030   11 72 25 da 00 00 00 8a 01 00 e0 10 01 2c 32 33  .r%..........,23
0040   bc 89 5a 46 20 32 36 36 41 39 41 38 42 39 41 42  ..ZF 266A9A8B9AB
0050   39 35 38 32 38 41 35 32 30 31 46 38 39 35 34 32  95828A5201F89542
0060   41 41 43 35 36 50 01 61 27 12 70 01 80 01 9a 0a AAC56P.a'.p.....
0070   0c 10 1a 0b 1d 00 00 10 10 ed 50 ea 7a a7 74 cb..........P.z.t.
0080   5b 1b 67 74 c2 09 fa f6 0b ac b6 28 41 82 1e 4b[.gt.......(A..K
0090   98 9c 65 55 50 18 88 d7 2c 0e 39 38 d1 d8 b7 2d..eUP..., .98...-
00a0   e5 52 8a f3 72 5d c1 e6 2a 27 8b 77 0a 6f 2f c2.R..r]..*'.w.o/.
00b0   4b a6 aa d0 c6 05 31 30 30 30 31 d6 03 32 32 34  K.....10001..224
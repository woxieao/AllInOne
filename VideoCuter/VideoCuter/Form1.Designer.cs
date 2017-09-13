namespace VideoCuter
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.axWindowsMediaPlayer1 = new AxWMPLib.AxWindowsMediaPlayer();
            this.cutBtn = new System.Windows.Forms.Button();
            this.startBtn = new System.Windows.Forms.Button();
            this.endBtn = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.initBtn = new System.Windows.Forms.Button();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.debugMsg = new System.Windows.Forms.Label();
            this.msgLable = new System.Windows.Forms.Label();
            this.logLable = new System.Windows.Forms.Label();
            this.threadMsg = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.axWindowsMediaPlayer1)).BeginInit();
            this.SuspendLayout();
            // 
            // axWindowsMediaPlayer1
            // 
            this.axWindowsMediaPlayer1.Enabled = true;
            this.axWindowsMediaPlayer1.Location = new System.Drawing.Point(12, 12);
            this.axWindowsMediaPlayer1.Name = "axWindowsMediaPlayer1";
            this.axWindowsMediaPlayer1.OcxState = ((System.Windows.Forms.AxHost.State)(resources.GetObject("axWindowsMediaPlayer1.OcxState")));
            this.axWindowsMediaPlayer1.Size = new System.Drawing.Size(597, 360);
            this.axWindowsMediaPlayer1.TabIndex = 0;
            // 
            // cutBtn
            // 
            this.cutBtn.Location = new System.Drawing.Point(267, 407);
            this.cutBtn.Name = "cutBtn";
            this.cutBtn.Size = new System.Drawing.Size(75, 23);
            this.cutBtn.TabIndex = 1;
            this.cutBtn.Text = "&Finish";
            this.cutBtn.UseVisualStyleBackColor = true;
            this.cutBtn.Click += new System.EventHandler(this.cutBtn_Click);
            // 
            // startBtn
            // 
            this.startBtn.Location = new System.Drawing.Point(25, 402);
            this.startBtn.Name = "startBtn";
            this.startBtn.Size = new System.Drawing.Size(140, 23);
            this.startBtn.TabIndex = 2;
            this.startBtn.Text = "选定为&StartIndex";
            this.startBtn.UseVisualStyleBackColor = true;
            this.startBtn.Click += new System.EventHandler(this.startBtn_Click);
            // 
            // endBtn
            // 
            this.endBtn.Location = new System.Drawing.Point(413, 402);
            this.endBtn.Name = "endBtn";
            this.endBtn.Size = new System.Drawing.Size(138, 23);
            this.endBtn.TabIndex = 3;
            this.endBtn.Text = "选定为&EndPoint";
            this.endBtn.UseVisualStyleBackColor = true;
            this.endBtn.Click += new System.EventHandler(this.endBtn_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(171, 407);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(11, 12);
            this.label1.TabIndex = 4;
            this.label1.Text = "0";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(557, 407);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(11, 12);
            this.label2.TabIndex = 5;
            this.label2.Text = "0";
            // 
            // initBtn
            // 
            this.initBtn.Location = new System.Drawing.Point(251, 436);
            this.initBtn.Name = "initBtn";
            this.initBtn.Size = new System.Drawing.Size(110, 23);
            this.initBtn.TabIndex = 7;
            this.initBtn.Text = "加载视频文件列表";
            this.initBtn.UseVisualStyleBackColor = true;
            this.initBtn.Click += new System.EventHandler(this.initBtn_Click);
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // debugMsg
            // 
            this.debugMsg.AutoSize = true;
            this.debugMsg.Location = new System.Drawing.Point(23, 387);
            this.debugMsg.Name = "debugMsg";
            this.debugMsg.Size = new System.Drawing.Size(53, 12);
            this.debugMsg.TabIndex = 8;
            this.debugMsg.Text = "DebugMsg";
            // 
            // msgLable
            // 
            this.msgLable.AutoSize = true;
            this.msgLable.Location = new System.Drawing.Point(23, 428);
            this.msgLable.Name = "msgLable";
            this.msgLable.Size = new System.Drawing.Size(0, 12);
            this.msgLable.TabIndex = 10;
            // 
            // logLable
            // 
            this.logLable.AutoSize = true;
            this.logLable.Location = new System.Drawing.Point(615, 35);
            this.logLable.Name = "logLable";
            this.logLable.Size = new System.Drawing.Size(47, 12);
            this.logLable.TabIndex = 11;
            this.logLable.Text = "LogMsg:";
            // 
            // threadMsg
            // 
            this.threadMsg.AutoSize = true;
            this.threadMsg.Location = new System.Drawing.Point(615, 12);
            this.threadMsg.Name = "threadMsg";
            this.threadMsg.Size = new System.Drawing.Size(65, 12);
            this.threadMsg.TabIndex = 12;
            this.threadMsg.Text = "ThreadMsg:";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(888, 464);
            this.Controls.Add(this.threadMsg);
            this.Controls.Add(this.logLable);
            this.Controls.Add(this.msgLable);
            this.Controls.Add(this.debugMsg);
            this.Controls.Add(this.initBtn);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.endBtn);
            this.Controls.Add(this.startBtn);
            this.Controls.Add(this.cutBtn);
            this.Controls.Add(this.axWindowsMediaPlayer1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Text = "VideoCuter";
            ((System.ComponentModel.ISupportInitialize)(this.axWindowsMediaPlayer1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private AxWMPLib.AxWindowsMediaPlayer axWindowsMediaPlayer1;
        private System.Windows.Forms.Button cutBtn;
        private System.Windows.Forms.Button startBtn;
        private System.Windows.Forms.Button endBtn;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button initBtn;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Label debugMsg;
        private System.Windows.Forms.Label msgLable;
        private System.Windows.Forms.Label logLable;
        private System.Windows.Forms.Label threadMsg;
    }
}


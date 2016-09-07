namespace Socketer
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.button3 = new System.Windows.Forms.Button();
            this.msgBox = new System.Windows.Forms.RichTextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.txtRecieve = new System.Windows.Forms.RichTextBox();
            this.lblIpAddress = new System.Windows.Forms.Label();
            this.lblPort = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.txtSend = new System.Windows.Forms.TextBox();
            this.txtIPAddress = new System.Windows.Forms.TextBox();
            this.txtPort = new System.Windows.Forms.TextBox();
            this.btnSend = new System.Windows.Forms.Button();
            this.hexBox = new System.Windows.Forms.TextBox();
            this.utf8Box = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.encodeType = new System.Windows.Forms.ComboBox();
            this.gbkBox = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(80, 35);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(102, 23);
            this.button3.TabIndex = 23;
            this.button3.Text = "本地";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // msgBox
            // 
            this.msgBox.Location = new System.Drawing.Point(12, 193);
            this.msgBox.Name = "msgBox";
            this.msgBox.Size = new System.Drawing.Size(312, 60);
            this.msgBox.TabIndex = 22;
            this.msgBox.Text = "";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(9, 178);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(29, 12);
            this.label3.TabIndex = 21;
            this.label3.Text = "消息";
            // 
            // txtRecieve
            // 
            this.txtRecieve.Location = new System.Drawing.Point(12, 284);
            this.txtRecieve.Name = "txtRecieve";
            this.txtRecieve.Size = new System.Drawing.Size(312, 111);
            this.txtRecieve.TabIndex = 18;
            this.txtRecieve.Text = "";
            // 
            // lblIpAddress
            // 
            this.lblIpAddress.AutoSize = true;
            this.lblIpAddress.Location = new System.Drawing.Point(9, 11);
            this.lblIpAddress.Name = "lblIpAddress";
            this.lblIpAddress.Size = new System.Drawing.Size(59, 12);
            this.lblIpAddress.TabIndex = 17;
            this.lblIpAddress.Text = "IPAddress";
            // 
            // lblPort
            // 
            this.lblPort.AutoSize = true;
            this.lblPort.Location = new System.Drawing.Point(231, 11);
            this.lblPort.Name = "lblPort";
            this.lblPort.Size = new System.Drawing.Size(29, 12);
            this.lblPort.TabIndex = 14;
            this.lblPort.Text = "Port";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(9, 269);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(53, 12);
            this.label2.TabIndex = 15;
            this.label2.Text = "返回内容";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(9, 46);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(53, 12);
            this.label1.TabIndex = 16;
            this.label1.Text = "发送内容";
            // 
            // txtSend
            // 
            this.txtSend.Location = new System.Drawing.Point(12, 61);
            this.txtSend.Multiline = true;
            this.txtSend.Name = "txtSend";
            this.txtSend.Size = new System.Drawing.Size(312, 83);
            this.txtSend.TabIndex = 11;
            // 
            // txtIPAddress
            // 
            this.txtIPAddress.Location = new System.Drawing.Point(70, 8);
            this.txtIPAddress.Name = "txtIPAddress";
            this.txtIPAddress.Size = new System.Drawing.Size(125, 21);
            this.txtIPAddress.TabIndex = 12;
            this.txtIPAddress.Text = "114.215.107.192";
            // 
            // txtPort
            // 
            this.txtPort.Location = new System.Drawing.Point(263, 5);
            this.txtPort.Name = "txtPort";
            this.txtPort.Size = new System.Drawing.Size(61, 21);
            this.txtPort.TabIndex = 13;
            this.txtPort.Text = "2055";
            // 
            // btnSend
            // 
            this.btnSend.Location = new System.Drawing.Point(249, 153);
            this.btnSend.Name = "btnSend";
            this.btnSend.Size = new System.Drawing.Size(75, 21);
            this.btnSend.TabIndex = 10;
            this.btnSend.Text = "发送";
            this.btnSend.UseVisualStyleBackColor = true;
            this.btnSend.Click += new System.EventHandler(this.btnSend_Click);
            // 
            // hexBox
            // 
            this.hexBox.Location = new System.Drawing.Point(12, 420);
            this.hexBox.Name = "hexBox";
            this.hexBox.Size = new System.Drawing.Size(312, 21);
            this.hexBox.TabIndex = 24;
            this.hexBox.Text = resources.GetString("hexBox.Text");
            this.hexBox.Click += new System.EventHandler(this.hexBox_Click);
            // 
            // utf8Box
            // 
            this.utf8Box.Location = new System.Drawing.Point(12, 499);
            this.utf8Box.Name = "utf8Box";
            this.utf8Box.Size = new System.Drawing.Size(312, 21);
            this.utf8Box.TabIndex = 25;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(174, 447);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(125, 21);
            this.button1.TabIndex = 26;
            this.button1.Text = "16进制转UTF8";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // encodeType
            // 
            this.encodeType.FormattingEnabled = true;
            this.encodeType.Items.AddRange(new object[] {
            "UTF-8",
            "ASCII",
            "GBK"});
            this.encodeType.Location = new System.Drawing.Point(13, 447);
            this.encodeType.Name = "encodeType";
            this.encodeType.Size = new System.Drawing.Size(121, 20);
            this.encodeType.TabIndex = 27;
            this.encodeType.Text = "UTF-8";
            // 
            // gbkBox
            // 
            this.gbkBox.Location = new System.Drawing.Point(11, 550);
            this.gbkBox.Name = "gbkBox";
            this.gbkBox.Size = new System.Drawing.Size(312, 21);
            this.gbkBox.TabIndex = 28;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(21, 481);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(71, 12);
            this.label4.TabIndex = 29;
            this.label4.Text = "SelectValue";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(21, 530);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(23, 12);
            this.label5.TabIndex = 30;
            this.label5.Text = "GBK";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(349, 583);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.gbkBox);
            this.Controls.Add(this.encodeType);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.utf8Box);
            this.Controls.Add(this.hexBox);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.msgBox);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txtRecieve);
            this.Controls.Add(this.lblIpAddress);
            this.Controls.Add(this.lblPort);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtSend);
            this.Controls.Add(this.txtIPAddress);
            this.Controls.Add(this.txtPort);
            this.Controls.Add(this.btnSend);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Text = "Socketer";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.RichTextBox msgBox;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.RichTextBox txtRecieve;
        private System.Windows.Forms.Label lblIpAddress;
        private System.Windows.Forms.Label lblPort;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtSend;
        private System.Windows.Forms.TextBox txtIPAddress;
        private System.Windows.Forms.TextBox txtPort;
        private System.Windows.Forms.Button btnSend;
        private System.Windows.Forms.TextBox hexBox;
        private System.Windows.Forms.TextBox utf8Box;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.ComboBox encodeType;
        private System.Windows.Forms.TextBox gbkBox;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;

    }
}


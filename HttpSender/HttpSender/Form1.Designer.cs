namespace HttpSender
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.timesBox = new System.Windows.Forms.NumericUpDown();
            this.label5 = new System.Windows.Forms.Label();
            this.timesLabel = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.diyBtn = new System.Windows.Forms.Button();
            this.respondBox = new System.Windows.Forms.TextBox();
            this.cookieBox = new System.Windows.Forms.TextBox();
            this.dataBox = new System.Windows.Forms.TextBox();
            this.urlBox = new System.Windows.Forms.TextBox();
            this.sendBtn = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.timesBox)).BeginInit();
            this.SuspendLayout();
            // 
            // timesBox
            // 
            this.timesBox.Location = new System.Drawing.Point(401, 30);
            this.timesBox.Maximum = new decimal(new int[] {
            9999,
            0,
            0,
            0});
            this.timesBox.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            0});
            this.timesBox.Name = "timesBox";
            this.timesBox.Size = new System.Drawing.Size(120, 21);
            this.timesBox.TabIndex = 23;
            this.timesBox.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(178, 59);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(35, 12);
            this.label5.TabIndex = 22;
            this.label5.Text = "Data:";
            // 
            // timesLabel
            // 
            this.timesLabel.AutoSize = true;
            this.timesLabel.Location = new System.Drawing.Point(399, 15);
            this.timesLabel.Name = "timesLabel";
            this.timesLabel.Size = new System.Drawing.Size(41, 12);
            this.timesLabel.TabIndex = 21;
            this.timesLabel.Text = "Times:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(16, 156);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 12);
            this.label3.TabIndex = 20;
            this.label3.Text = "Respond:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(16, 59);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(47, 12);
            this.label2.TabIndex = 19;
            this.label2.Text = "Cookie:";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(16, 14);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(29, 12);
            this.label1.TabIndex = 18;
            this.label1.Text = "Url:";
            // 
            // diyBtn
            // 
            this.diyBtn.Location = new System.Drawing.Point(420, 195);
            this.diyBtn.Name = "diyBtn";
            this.diyBtn.Size = new System.Drawing.Size(75, 23);
            this.diyBtn.TabIndex = 17;
            this.diyBtn.Text = "&Diy";
            this.diyBtn.UseVisualStyleBackColor = true;
            this.diyBtn.Click += new System.EventHandler(this.diyBtn_Click);
            // 
            // respondBox
            // 
            this.respondBox.Location = new System.Drawing.Point(18, 171);
            this.respondBox.Multiline = true;
            this.respondBox.Name = "respondBox";
            this.respondBox.ReadOnly = true;
            this.respondBox.Size = new System.Drawing.Size(362, 84);
            this.respondBox.TabIndex = 16;
            this.respondBox.MouseClick += new System.Windows.Forms.MouseEventHandler(this.respondBox_MouseClick);
            // 
            // cookieBox
            // 
            this.cookieBox.Location = new System.Drawing.Point(18, 74);
            this.cookieBox.Multiline = true;
            this.cookieBox.Name = "cookieBox";
            this.cookieBox.Size = new System.Drawing.Size(145, 66);
            this.cookieBox.TabIndex = 15;
            this.cookieBox.MouseClick += new System.Windows.Forms.MouseEventHandler(this.cookieBox_MouseClick);
            // 
            // dataBox
            // 
            this.dataBox.Location = new System.Drawing.Point(180, 74);
            this.dataBox.Multiline = true;
            this.dataBox.Name = "dataBox";
            this.dataBox.Size = new System.Drawing.Size(200, 66);
            this.dataBox.TabIndex = 14;
            this.dataBox.MouseClick += new System.Windows.Forms.MouseEventHandler(this.dataBox_MouseClick);
            // 
            // urlBox
            // 
            this.urlBox.Location = new System.Drawing.Point(18, 29);
            this.urlBox.Name = "urlBox";
            this.urlBox.Size = new System.Drawing.Size(362, 21);
            this.urlBox.TabIndex = 13;
            this.urlBox.MouseClick += new System.Windows.Forms.MouseEventHandler(this.urlBox_MouseClick);
            // 
            // sendBtn
            // 
            this.sendBtn.Location = new System.Drawing.Point(420, 97);
            this.sendBtn.Name = "sendBtn";
            this.sendBtn.Size = new System.Drawing.Size(75, 23);
            this.sendBtn.TabIndex = 12;
            this.sendBtn.Text = "&Send";
            this.sendBtn.UseVisualStyleBackColor = true;
            this.sendBtn.Click += new System.EventHandler(this.sendBtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(534, 281);
            this.Controls.Add(this.timesBox);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.timesLabel);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.diyBtn);
            this.Controls.Add(this.respondBox);
            this.Controls.Add(this.cookieBox);
            this.Controls.Add(this.dataBox);
            this.Controls.Add(this.urlBox);
            this.Controls.Add(this.sendBtn);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximumSize = new System.Drawing.Size(550, 320);
            this.MinimumSize = new System.Drawing.Size(550, 320);
            this.Name = "Form1";
            this.Text = "HttpSender";
            ((System.ComponentModel.ISupportInitialize)(this.timesBox)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.NumericUpDown timesBox;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label timesLabel;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button diyBtn;
        private System.Windows.Forms.TextBox respondBox;
        private System.Windows.Forms.TextBox cookieBox;
        private System.Windows.Forms.TextBox dataBox;
        private System.Windows.Forms.TextBox urlBox;
        private System.Windows.Forms.Button sendBtn;
    }
}


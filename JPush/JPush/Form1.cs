using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using cn.jpush.api;
using cn.jpush.api.push.mode;
using cn.jpush.api.push.notification;
using Message = System.Windows.Forms.Message;

namespace JPush
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            SendMessage(new cms_jpush
            {
                content = "666",
                msgtype = 1,
                audience = "all",
                platform = "all"
            });
        }
        public void SendMessage(cms_jpush model)
        {
            var operateResult = new OperateResult();
            var client = new JPushClient("ad98571f95006c8b9bba6f31", "c5c4de145cec5f0556b6ef45");
            PushPayload pushPayload = new PushPayload();
            #region 推送平台
            if (model.platform == "all")
                pushPayload.platform = Platform.all();
            else if (model.platform == "android")
                pushPayload.platform = Platform.android();
            else
                pushPayload.platform = Platform.ios();
            #endregion

            #region 推送对象
            if (model.audience == "all")
                pushPayload.audience = Audience.all();
            else if (model.audience == "tag")
            {
                string[] tags = model.tag.Split(',');
                pushPayload.audience = Audience.s_tag(tags);
            }
            //else
            //{
            //    //bsp_userverify userv = bsp_userverify.Context.Where(x => x.uid == Convert.ToInt32(model.tag)).FirstOrDefault();
            //    //if (userv == null)
            //    //{

            //    //}
            //    //string[] tags = userv.tokenid.Split(',');
            //    //pushPayload.audience = Audience.s_alias(tags);


            //    bsp_userverify userv = bsp_userverify.Context.FirstOrDefault(x => x.tokenid == model.tag);
            //    if (userv != null)
            //    {
            //        string[] tags = userv.tokenid.Split(',');
            //        pushPayload.audience = Audience.s_alias(tags);
            //    }
            //    else
            //    {
            //        operateResult.OperateRemark = "tokenid无效";
            //        operateResult.IsSuccess = false;

            //    }
            //}
            #endregion

            //if (model.type == 0)
            //{
            #region 通知

            var notification = new Notification
            {
                IosNotification = new IosNotification(),
                AndroidNotification = new AndroidNotification()
            };
            notification.IosNotification.setSound("default");
            notification.setAlert(model.content);
            notification.AndroidNotification
                .AddExtra("msgType", model.msgtype)
                .AddExtra("businessType", model.businesstype)
                .AddExtra("title", model.title)
                .AddExtra("msg", model.content)
                .AddExtra("businessId", model.busunessid)
                .AddExtra("businessUrl", model.businessurl)
                .AddExtra("title", model.title);


            notification.IosNotification
                       .AddExtra("msgType", model.msgtype)
                       .AddExtra("businessType", model.businesstype)
                       .AddExtra("title", model.title)
                       .AddExtra("msg", model.content)
                       .AddExtra("businessId", model.busunessid)
                       .AddExtra("businessUrl", model.businessurl)
                       .AddExtra("title", model.title);


            pushPayload.notification = notification;
            #endregion
            //}
            //else
            //{
            //#region 消息
            //Message message = Message.content(model.content).setTitle(model.title);
            //message.AddExtras("msgType", model.msgtype).AddExtras("businessType", model.businesstype);
            //Dictionary<string, object> dictionary = new Dictionary<string, object>();
            //dictionary.Add("title", model.title);
            //dictionary.Add("msg", model.content);
            //dictionary.Add("businessId", model.busunessid);
            //dictionary.Add("businessUrl", model.businessurl);
            //message.AddExtras("businessContent", dictionary);

            //pushPayload.message = message;
            //#endregion

            //}

            model.sendtime = DateTime.Now;
            try
            {
                var messageresult = client.SendPush(pushPayload);
                operateResult.OperateRemark = "发送成功";
                operateResult.IsSuccess = true;
                model.msgid = messageresult.msg_id;
                model.sendstatus = 1;
                MessageBox.Show("Done");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
                operateResult.OperateRemark = ex.Message;
                operateResult.IsSuccess = false;
                model.sendstatus = 0;
                model.msgid = 0;
            }
            //try
            //{
            //    cms_jpushBll bll = new cms_jpushBll();
            //    bll.Add(model);
            //}
            //catch (Exception ex)
            //{
            //    Log.WriteLog(ex.Message);
            //}
            //result.Data = operateResult;
            //result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            //result.ContentType = "text/html";
            //return result;
        }

    }
}


using System;
using System.Linq;
using NHibernate;
using NHibernate.Engine;
using NHibernate.Linq;

namespace JPush
{
    public class cms_jpush : BaseModel<cms_jpush>
    {
        /// <summary>
        /// 主键
        /// </summary>
        public virtual int id
        {
            get;
            set;
        }
        /// <summary>
        /// 推送方式
        /// </summary>
        public virtual int type
        {
            get;
            set;
        }
        /// <summary>
        /// 推送标题
        /// </summary>
        public virtual string title
        {
            get;
            set;
        }
        /// <summary>
        /// 推送内容
        /// </summary>
        public virtual string content
        {
            get;
            set;
        }
        /// <summary>
        /// 推送平台
        /// </summary>
        public virtual string platform
        {
            get;
            set;
        }
        /// <summary>
        /// 推送对象
        /// </summary>
        public virtual string audience
        {
            get;
            set;
        }
        /// <summary>
        /// 标签
        /// </summary>
        public virtual string tag
        {
            get;
            set;
        }
        /// <summary>
        /// 发送方式
        /// </summary>
        public virtual int delivery
        {
            get;
            set;
        }
        /// <summary>
        /// 发送时间
        /// </summary>
        public virtual DateTime? deliverytime
        {
            get;
            set;
        }
        /// <summary>
        /// 定速
        /// </summary>
        public virtual int durationtime
        {
            get;
            set;
        }
        /// <summary>
        /// 推送类型
        /// </summary>
        public virtual int msgtype
        {
            get;
            set;
        }
        /// <summary>
        /// 业务类型
        /// </summary>
        public virtual int businesstype
        {
            get;
            set;
        }
        /// <summary>
        /// 业务ID
        /// </summary>
        public virtual int busunessid
        {
            get;
            set;
        }
        /// <summary>
        /// 业务url
        /// </summary>
        public virtual string businessurl
        {
            get;
            set;
        }
        /// <summary>
        /// 发送时间
        /// </summary>
        public virtual DateTime sendtime
        {
            get;
            set;
        }
        /// <summary>
        /// 发送状态
        /// </summary>
        public virtual int sendstatus
        {
            get;
            set;
        }
        /// <summary>
        /// 消息ID
        /// </summary>
        public virtual long msgid
        {
            get;
            set;
        }
    }
    public class OperateResult
    {
        public bool IsSuccess { get; set; }
        public string OperateRemark { get; set; }

        /// <summary>
        /// 设置操作结果
        /// </summary>
        /// <param name="isSuccess">是否成功</param>
        /// <param name="remark">备注</param>
        public OperateResult SetMessage(bool isSuccess, string remark)
        {
            IsSuccess = isSuccess;
            OperateRemark = remark;
            return this;
        }

    }
    public class bsp_userverify : BaseModel<bsp_userverify>
    {

        /// <summary>
        /// id
        /// </summary>
        public virtual long id
        {
            get;
            set;
        }
        /// <summary>
        /// uid
        /// </summary>
        public virtual int? uid
        {
            get;
            set;
        }
        /// <summary>
        /// tokenid
        /// </summary>
        public virtual string tokenid
        {
            get;
            set;
        }
        /// <summary>
        /// logincount
        /// </summary>
        public virtual int? logincount
        {
            get;
            set;
        }
        /// <summary>
        /// noteverify
        /// </summary>
        public virtual int? noteverify
        {
            get;
            set;
        }
        /// <summary>
        /// notetime
        /// </summary>
        public virtual DateTime? notetime
        {
            get;
            set;
        }
        /// <summary>
        /// lng
        /// </summary>
        public virtual string lng
        {
            get;
            set;
        }
        /// <summary>
        /// lat
        /// </summary>
        public virtual string lat
        {
            get;
            set;
        }
        /// <summary>
        /// logintime
        /// </summary>
        public virtual DateTime? logintime
        {
            get;
            set;
        }
        /// <summary>
        /// imei
        /// </summary>
        public virtual string imei
        {
            get;
            set;
        }
        /// <summary>
        /// recommander
        /// </summary>
        public virtual int? recommander
        {
            get;
            set;
        }
        /// <summary>
        /// refcode
        /// </summary>
        public virtual string refcode
        {
            get;
            set;
        }

    }
    [Serializable]
    public class BaseModel
    {
        static readonly object padlock = new object();
        private static ISession session = null;
        public static ISession Session
        {
            get
            {
                //if (session == null || !session.IsOpen)
                //{
                //    lock (padlock)
                //    {
                //        if (session == null || !session.IsOpen)
                //        {
             //  session = VvCrmCmsDate.MapCode.DataFactory.OpenSession();
                //        }
                //    }
                //}
                return session;
            }
        }
    }

    [Serializable]
    public class BaseModel<T> : BaseModel
    {
        public static IQueryable<T> Context
        {
            get
            {

                IQueryable<T> result = new NhQueryable<T>((ISessionImplementor)Session);
                return result;
            }
        }
        public virtual void Save()
        {
            using (var session = Session)
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.Save(this);
                    transaction.Commit();
                }
            }
        }
        public virtual void Update()
        {
            using (var session = Session)
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.Update(this);
                    transaction.Commit();
                }
            }
        }
        /// <summary>
        /// 删除模型
        /// </summary>
        public virtual void Delete()
        {
            using (var session = Session)
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.Delete(this);
                    transaction.Commit();
                }
            }
        }

    }
}

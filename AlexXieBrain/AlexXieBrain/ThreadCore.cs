using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ThreadState = System.Threading.ThreadState;

namespace AlexXieBrain
{
    public class ThreadCore
    {
        public const int DefaultThreadCountLimit = 100;
        private readonly int _maxThreadCountLimit;
        public readonly List<Thread> ThreadList = new List<Thread>();
        private Action _allDoneAction = null;
        private bool _canWeGo;

        public void PushInThreadList(Action act, Action onExceptionAct = null)
        {
            ThreadList.Add(new Thread(() =>
            {
                try
                {
                    act();
                }
                catch
                {
                    //todo log ex
                    onExceptionAct?.Invoke();
                }
            }));
        }

        public Task<bool> StartThread(Action allDoneCallBack = null)
        {
            _allDoneAction = allDoneCallBack ?? _allDoneAction;
            return Task.Run(() =>
               {
                   _canWeGo = true;
                   while (_canWeGo && !IsAllThreadDone())
                   {
                       var unstartList = ThreadList.Where(i => i.ThreadState == ThreadState.Unstarted);
                       foreach (var thread in unstartList)
                       {
                           if (GetLiveThreadCount() >= _maxThreadCountLimit)
                           {
                               break;
                           }
                           else
                           {
                               thread.Start();
                           }
                       }
                   }
                   if (IsAllThreadDone())
                   {
                       _allDoneAction?.Invoke();
                       _allDoneAction = null;
                   }
                   return IsAllThreadDone();
               });
        }


        public void DisposeAllThread()
        {
            ThreadList.Clear();
        }

        public ThreadCore(int maxThread = DefaultThreadCountLimit)
        {
            _maxThreadCountLimit = maxThread;
        }

        public int GetLiveThreadCount()
        {
            return ThreadList.Count(i => i.IsAlive);
        }
        public int GetUnstartedThreadCount()
        {
            return ThreadList.Count(i => i.ThreadState == ThreadState.Unstarted);
        }

        public bool IsAllThreadDone()
        {
            return ThreadList.All(i => !i.IsAlive && i.ThreadState != ThreadState.Unstarted);
        }

        /// <summary>
        /// pause thread and get unstarted thread count
        /// </summary>
        /// <returns>return Unstarted Thread Count</returns>
        public int PauseThread()
        {
            _canWeGo = false;
            return GetUnstartedThreadCount();
        }
    }
}

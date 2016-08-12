using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AlexXieBrain
{
    public class ThreadCore
    {
        public const int DefaultThreadCountLimit = 100;
        private readonly int _maxThreadCountLimit;
        private List<Thread> _threadList = new List<Thread>();
        private bool _canWeGo;
        private LogCore _logCore = new LogCore();

        public void PushInThreadList(Action act, bool ignoreError = true)
        {
            _threadList.Add(new Thread(() =>
            {
                try
                {
                    act();
                }
                catch (Exception ex)
                {
                    if (!ignoreError)
                    {
                        _logCore.LogInDesktop(ex.ToString());
                    }
                }
            }));
        }
        public Task<bool> StartThread()
        {
            return Task.Run(() =>
            {
                _canWeGo = true;
                while (_canWeGo && !IsAllThreadDone())
                {
                    foreach (var thread in _threadList)
                    {
                        if (GetLiveThreadCount() >= _maxThreadCountLimit)
                        {
                            break;
                        }
                        else
                        {
                            if (thread.ThreadState == ThreadState.Unstarted)
                            {
                                thread.Start();
                            }
                        }
                    }
                }
                return IsAllThreadDone();
            });
        }

        public void DisposeAllThread()
        {
            _threadList = new List<Thread>();
        }

        public ThreadCore(int maxThread = DefaultThreadCountLimit)
        {
            _maxThreadCountLimit = maxThread;
        }

        public int GetLiveThreadCount()
        {
            return _threadList.Count(i => i.IsAlive);
        }
        public int GetUnstartedThreadCount()
        {
            return _threadList.Count(i => i.ThreadState == ThreadState.Unstarted);
        }

        public bool IsAllThreadDone()
        {
            return _threadList.All(i => i.ThreadState != ThreadState.Unstarted);
        }

        /// <summary>
        /// pause thread and get  unstarted thread count
        /// </summary>
        /// <returns>return Unstarted Thread Count</returns>
        public int PauseThread()
        {
            _canWeGo = false;
            return GetUnstartedThreadCount();
        }
    }
}

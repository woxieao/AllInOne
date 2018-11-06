using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;

namespace AlexXieBrain
{
    public class ThreadCore
    {
        public const int DefaultThreadCountLimit = 500;
        private readonly int _maxThreadCountLimit;
        private readonly Action _allDoneAction = null;
        private readonly Action _ranFinishAct = null;
        private readonly Action<Exception> _onExceptionAct = null;

        public readonly int[] Counter = { 0 };
        public readonly int[] CurrentThreadCount = { 0 };
        public readonly Stopwatch Timer = new Stopwatch();
        /// <summary>
        /// 已经运行多少个
        /// </summary>
        public int ThreadRanCount = 0;

        private readonly bool[] _canRun = { false };

        //public void Run<T>(Action act, Func<bool> canStop = null)
        //{
        //    Timer.Start();
        //    Timer.Start();
        //    int[] counter = { 0 };
        //    int[] threadRanCount = { 0 };
        //    while (!_canRun[0])
        //    {
        //        new Thread(() =>
        //        {
        //            lock (CurrentThreadCount)
        //            {
        //                ++CurrentThreadCount[0];
        //            }
        //            try
        //            {
        //                act();
        //                if (canStop?.Invoke() == true)
        //                {
        //                    Stop();
        //                }
        //                lock (Counter)
        //                {
        //                    Counter[0]++;
        //                }
        //            }
        //            catch (Exception e)
        //            {
        //                _onExceptionAct?.Invoke(e);
        //            }
        //            finally
        //            {
        //                ++ThreadRanCount;
        //                try
        //                {
        //                    _ranFinishAct?.Invoke();
        //                }
        //                catch (Exception e)
        //                {
        //                    Console.WriteLine(e);
        //                }
        //                lock (CurrentThreadCount)
        //                {
        //                    --CurrentThreadCount[0];
        //                }
        //            }
        //        }
        //        ).Start();
        //        {
        //            while (CurrentThreadCount[0] >= _maxThreadCountLimit)
        //            {
        //                Thread.Sleep(5);
        //            }
        //        }
        //    }
        //}
        private void SafeRun(Action act)
        {
            try
            {
                act?.Invoke();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
        public void Run<T>(Action<T> act, List<T> list)
        {
            Timer.Start();
            int[] counter = { 0 };
            int[] threadRanCount = { 0 };
            foreach (var item in list)
            {
                var itemLocal = item;
                new Thread(() =>
                {
                    lock (CurrentThreadCount)
                    {
                        ++CurrentThreadCount[0];
                    }
                    try
                    {
                        act(itemLocal);
                        SafeRun(_ranFinishAct);
                    }
                    catch (Exception e)
                    {
                        SafeRun(() => { _onExceptionAct(e); });
                    }
                    finally
                    {
                        lock (threadRanCount)
                        {
                            ++threadRanCount[0];
                        }
                        Console.WriteLine($"[{DateTime.Now}]已执行{threadRanCount[0]}个线程,耗时{Timer.ElapsedMilliseconds}ms({Timer.ElapsedMilliseconds / threadRanCount[0]}ms/thread)");
                        lock (CurrentThreadCount)
                        {
                            --CurrentThreadCount[0];
                        }
                        lock (counter)
                        {
                            if (++counter[0] == list.Count)
                            {
                                SafeRun(_allDoneAction);
                            }
                        }
                    }
                }).Start();
                {
                    while (CurrentThreadCount[0] >= _maxThreadCountLimit)
                    {
                        Thread.Sleep(5);
                    }
                }
            }
        }

        private void Stop()
        {
            _canRun[0] = true;
        }

        public ThreadCore(int maxThread = DefaultThreadCountLimit, Action ranFinishAct = null, Action<Exception> onExceptionAct = null, Action allDoneAction = null)
        {
            _allDoneAction = allDoneAction;
            _ranFinishAct = ranFinishAct;
            _onExceptionAct = onExceptionAct;
            _maxThreadCountLimit = maxThread;
        }
    }
}

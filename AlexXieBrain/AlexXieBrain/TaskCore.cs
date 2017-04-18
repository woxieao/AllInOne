using System;
using System.Threading.Tasks;

namespace AlexXieBrain
{
    public class TaskCore
    {
        public static async Task<T> AsyncRunAndLog<T>(Func<T> act)
        {
            try
            {
                return await Task.Run(act);
            }
            catch (Exception e)
            {
                Core.Log.LogInDesktop(new { FuncName = act.Method.Name, Exception = e });
                return default(T);
            }
        }
        public static async void AsyncRunAndLog(Action act)
        {
            try
            {
                await Task.Run(act);
            }
            catch (Exception e)
            {
                Core.Log.LogInDesktop(new { ActionName = act.Method.Name, Exception = e });
            }
        }

        public static async Task<T> AsyncRun<T>(Func<T> func, Action<T> onFinishAct = null)
        {
            var task = AsyncRunAndLog(func);
            AsyncRunAndLog(() => { onFinishAct?.Invoke(task.Result); });
            return await task;
        }
    }
}

using System;
using System.Threading.Tasks;

namespace AlexXieBrain
{
    public class TaskCore
    {
        public static Task<T> AsyncRun<T>(Func<T> func, Action<T> onFinishAct = null)
        {
            var task = Task.Run(func);
            Task.Run(() => { onFinishAct?.Invoke(task.Result); });
            return task;
        }
    }
}

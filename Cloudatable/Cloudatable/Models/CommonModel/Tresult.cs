namespace Cloudatable.Models.CommonModel
{
    public class TResult<T> : Result
    {
        public T Data { get; set; }
    }
}

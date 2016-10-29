namespace Cloudatable.Models.CommonModel
{
    public sealed class ApiResult : Result
    {
        public ApiResult()
        {
            Data = string.Empty;
        }
        public object Data { get; set; }
    }
}

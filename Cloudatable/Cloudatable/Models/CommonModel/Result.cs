namespace Cloudatable.Models.CommonModel
{
    public class Result
    {
        public Result()
        {
            Flag = false;
            Msg = string.Empty;
        }
        public string Msg { get; set; }
        public bool Flag { get; set; }
    }
}

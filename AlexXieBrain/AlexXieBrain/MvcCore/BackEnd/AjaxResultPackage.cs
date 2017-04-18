namespace AlexXieBrain.MvcCore.BackEnd
{
    public sealed class AjaxResultPackage
    {
        public AjaxStatus Status { get; set; }
        public string Msg { get; set; }
        public object Data { get; set; }
    }
    public enum AjaxStatus
    {
        LoggedOut = 1,
        Error = 2,
        Success = 3
    }
}
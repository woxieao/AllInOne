namespace AlexXieBrain
{
    public class TestCore
    {
        public string Test1 { get; set; }
        internal string Test2 { get; set; }
        protected string Test3 { get; set; }
        protected internal string Test4 { get; set; }

        public int Test()
        {
            //Action act = ;
            //(Action)(() => { throw new Exception("aaaa!!"); })
            int a = 1;
          
            return a;
        }
    }
}

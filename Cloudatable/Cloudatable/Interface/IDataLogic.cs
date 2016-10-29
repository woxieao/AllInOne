namespace Cloudatable.Interface
{
    public interface IDataLogic
    {
        void CreateFile(string username, string fileId, string writePwd, string readPwd = "");
        void ChangeFileReadPwd(string username, string fileId, string oldPwd, string newPwd);
        void ChangeFileWritePwd(string username, string fileId, string oldPwd, string newPwd);
        string GetData(string username, string fileId, string readPwd);
        void AppendData(string username, string fileId, string writePwd, string data);
        void CleanData(string username, string fileId, string writePwd);
    }
}

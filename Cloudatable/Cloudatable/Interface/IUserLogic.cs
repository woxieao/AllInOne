namespace Cloudatable.Interface
{
    public interface IUserLogic
    {
        void CreateUser(string username, string userEmail, string userPwd);
        void ChangeUserPwd(string username, string oldUserPwd, string newUserPwd);
    }
}

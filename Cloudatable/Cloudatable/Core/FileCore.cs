﻿using Cloudatable.Interface;

namespace Cloudatable.Core
{
    internal class DataCore : IDataLogic
    {
        public void CreateFile(string username, string fileId, string writePwd, string readPwd = "")
        {
            throw new System.NotImplementedException();
        }

        public void ChangeFileReadPwd(string username, string fileId, string oldPwd, string newPwd)
        {
            throw new System.NotImplementedException();
        }

        public void ChangeFileWritePwd(string username, string fileId, string oldPwd, string newPwd)
        {
            throw new System.NotImplementedException();
        }

        public string GetData(string username, string fileId, string readPwd)
        {
            throw new System.NotImplementedException();
        }

        public void AppendData(string username, string fileId, string writePwd, string data)
        {
            throw new System.NotImplementedException();
        }

        public void CleanData(string username, string fileId, string writePwd)
        {
            throw new System.NotImplementedException();
        }
    }
}
﻿using System.Web.Http;
using Cloudatable.WebCore;

namespace Cloudatable.Controllers.Apis
{
    [RoutePrefix("Api/Data")]
    public class DataController : BaseApiController
    {
        public DataController()
        {
        }
        [Route("GetData")]
        [HttpGet]
        public IHttpActionResult GetData(string userName, string readonlyPwd, string packageName)
        {
            return Ok();
        }

        [Route("Test")]
        [HttpGet]
        public IHttpActionResult Test()
        {
            //throw new ApiException("");
            return Okay("wahahahah");
        }
    }
}
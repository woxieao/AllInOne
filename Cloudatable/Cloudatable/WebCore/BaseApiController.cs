using System;
using System.Web.Http;
using System.Web.Http.Results;

namespace Cloudatable.WebCore
{
    public class BaseApiController : ApiController
    {
        protected internal virtual OkNegotiatedContentResult<ApiResponse> Okay<T>(T content)
        {
            return new OkNegotiatedContentResult<ApiResponse>(new ApiResponse
            {
                Data = content,
                Msg = "success",
                Flag = true
            }, this);
        }
    }
}

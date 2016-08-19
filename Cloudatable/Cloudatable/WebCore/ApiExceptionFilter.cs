using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;
using Cloudatable.Configs;

namespace Cloudatable.WebCore
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            var ex = actionExecutedContext.Exception;
            var errorMsg = ex is ApiException ? ex.Message : Config.Exception.ShowServiceError ? ex.ToString() : "服务器异常";
            actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.BadRequest, new ApiResponse
            {
                Flag = false,
                Msg = errorMsg,
                Data = null
            });
        }
    }
}

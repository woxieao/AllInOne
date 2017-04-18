using System.Net;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace AlexXieBrain.MvcCore.BackEnd
{

    public class AjaxResult : ActionResult
    {
        private readonly AjaxResultPackage _ajaxResultPackage = new AjaxResultPackage();
        private readonly JsonSerializerSettings _settings;

        public AjaxResult(object data)
        {
            _ajaxResultPackage.Status = AjaxStatus.Success;
            _ajaxResultPackage.Data = data;
            _ajaxResultPackage.Msg = string.Empty;
            _settings = new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore
            };
        }

        public AjaxResult()
        {
            _ajaxResultPackage.Status = AjaxStatus.Success;
            _ajaxResultPackage.Data = new { };
            _ajaxResultPackage.Msg = string.Empty;
            _settings = new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore
            };
        }

        public AjaxResult(object data, JsonSerializerSettings settings) : this(data)
        {
            _settings = settings;
        }

        public AjaxResult(AjaxResultPackage package)
        {
            _ajaxResultPackage = package;
        }

        public AjaxResult(AjaxResultPackage package, JsonSerializerSettings settings) : this(package)
        {
            _settings = settings;
        }

        public override void ExecuteResult(ControllerContext context)
        {
            var response = context.HttpContext.Response;
            response.TrySkipIisCustomErrors = true;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.ContentType = "application/json; charset=utf-8";
            if (_ajaxResultPackage == null)
                return;
            response.Write(JsonConvert.SerializeObject(_ajaxResultPackage, _settings));
        }
    }
}
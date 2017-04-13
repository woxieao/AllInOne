using System.Collections.Generic;
using System.Net;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace ScoreBoard.Models.Results
{
    public sealed class AjaxResultPackage
    {
        //-1 logout
        //0  error
        //1  success
        public int Status { get; set; }
        public string Msg { get; set; }
        public object Data { get; set; }

    }
    public class AjaxResult : ActionResult
    {
        private readonly AjaxResultPackage _ajaxResultPackage = new AjaxResultPackage();
        private readonly JsonSerializerSettings _settings;

        public AjaxResult(object data)
        {
            _ajaxResultPackage.Status = 1;
            _ajaxResultPackage.Data = data;
            _ajaxResultPackage.Msg = string.Empty;
            _settings = new JsonSerializerSettings
            {
                Converters = new List<JsonConverter> { new StringEnumConverter() },
                NullValueHandling = NullValueHandling.Ignore
            };
        }

        public AjaxResult()
        {
            _ajaxResultPackage.Status = 1;
            _ajaxResultPackage.Data = new { };
            _ajaxResultPackage.Msg = string.Empty;
            _settings = new JsonSerializerSettings
            {
                Converters = new List<JsonConverter> { new StringEnumConverter() },
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
            response.ContentType = "application/json";
            if (_ajaxResultPackage == null)
                return;
            response.Write(JsonConvert.SerializeObject(_ajaxResultPackage, _settings));
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Filters;
using DemoApp.Models;

namespace DemoApp.Framework
{
    /// <summary>
    /// To wrap API responses, see: https://www.owasp.org/index.php/OWASP_AJAX_Security_Guidelines#Always_return_JSON_with_an_Object_on_the_outside
    /// </summary>
    /// <typeparam name="T"></typeparam>
    internal class ApiResponse<T>
    {
        public T Data { get; set; }
    }

    public class WrapResponseAttribute : ActionFilterAttribute
    {
        public override Task OnActionExecutedAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)
        {
            var response = actionExecutedContext.Response.Content as ObjectContent;

            if (response != null)
            {
                response.Value = new ApiResponse<object>() { Data = response.Value };
            }

            return base.OnActionExecutedAsync(actionExecutedContext, cancellationToken);
        }
    }
}
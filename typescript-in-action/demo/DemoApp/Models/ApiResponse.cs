using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoApp.Models
{
    /// <summary>
    /// To wrap API responses, see: https://www.owasp.org/index.php/OWASP_AJAX_Security_Guidelines#Always_return_JSON_with_an_Object_on_the_outside
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ApiResponse<T>
    {
        public T Data { get; set; }
    }
}
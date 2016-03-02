using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DemoApp.Models;

namespace DemoApp.Framework
{
    public static class ApiExtensions
    {
        public static ApiResponse<T> Wrap<T>(this T data)
        {
            return new ApiResponse<T>() { Data = data };
        }
    }
}
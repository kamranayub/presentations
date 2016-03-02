using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoApp.Controllers
{
    public class HomeController : Controller
    {
        [Route("{*catchall}", Name = "Default")]
        public ActionResult Index()
        {
            return View();
        }
    }
}

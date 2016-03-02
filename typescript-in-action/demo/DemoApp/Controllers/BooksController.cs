using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using DemoApp.Framework;
using DemoApp.Models;

namespace DemoApp.Controllers
{
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        [Route("")]
        public Task<IEnumerable<UserBook>> Get()
        {
            return Task.FromResult(MockBooks.UserList.AsEnumerable());
        }

        [HttpGet]
        [Route("search")]
        public Task<IEnumerable<Book>> Search(string query)
        {
            return Task.FromResult(MockBooks.SearchResults.AsEnumerable());
        } 

    }
}

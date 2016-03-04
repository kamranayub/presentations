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
    // WARNING: SAMPLE
    // this is a terrible controller and not how you'd actually organize this

    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        [Route("")]
        public Task<IEnumerable<Book>> GetBooks()
        {
            return Task.FromResult(MockBooks.UserList.AsEnumerable());
        }

        [Route("{id}")]
        public Task<Book> PostBook(int id)
        {
            var sr = MockBooks.SearchResults.First(s => s.Id == id);
            var book = new Book()
            {
                Id = sr.Id,
                Title = sr.Title,
                Author = sr.Author,
                Added = DateTime.Now
            };

            MockBooks.UserList.Add(book);

            return Task.FromResult(book);
        }

        [HttpGet]
        [Route("search")]
        public Task<IEnumerable<SearchResult>> Search(string query)
        {
            return Task.FromResult(MockBooks.SearchResults.AsEnumerable());
        } 

    }
}

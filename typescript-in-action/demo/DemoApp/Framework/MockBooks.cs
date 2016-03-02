using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DemoApp.Models;

namespace DemoApp.Framework
{
    public static class MockBooks
    {
        public static Book[] SearchResults = new[]
        {
            new Book() {
                Id = 2002,
                Title = "Harry Potter and the Wizard Who Loved Me",
                Author = "J.K. Rawdogs"
            },
            new Book() {
                Id = 2003,
                Title = "'Arry Pott'uh and other British-isms",
                Author = "Ruby O'Malley"
            },
            new Book() {
                Id = 2004,
                Title = "What is Harry Potter even?",
                Author = "Django Harris"
            }
        };

        public static UserBook[] UserList = new[]
        {
            new UserBook()
            {
                Id = 1001,
                Title = "The Path to A Total You",
                Author = "Frank Harrison",
                Added = new DateTime(2016, 2, 22),
                Tags = new[] {"loaned", "library", "review-later"}
            },
            new UserBook()
            {
                Id = 128169,
                Title = "Pro EmojiScript 2, :hankey: Edition",
                Author = "Burt Macklin",
                Added = new DateTime(2018, 7, 8),
                Tags = new [] {"programming", "learning"}
            },
            new UserBook()
            {
                Id = 1003,
                Title = "Cakes for Dummies",
                Author = "Gerald Fungus",
                Added = new DateTime(2016, 1, 16),
                Tags = new [] {"review-later"}
            },
            new UserBook()
            {
                Id = 1004,
                Title = "Getting Ahead in Life",
                Author = "Some Recognizable Murderer",
                Added = new DateTime(2013, 4, 22),
                Tags = new [] {"self-help"}
            }            
        };
    }
}
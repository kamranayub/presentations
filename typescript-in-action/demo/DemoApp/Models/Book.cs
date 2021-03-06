﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoApp.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public DateTime Added { get; set; }

        public string[] Tags { get; set; }

        public string[] Lists { get; set; }
    }
}
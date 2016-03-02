using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoApp.Models
{
    public class UserBook : Book
    {
        public DateTime Added { get; set; }

        public string[] Tags { get; set; }

        public string[] Lists { get; set; }
    }
}
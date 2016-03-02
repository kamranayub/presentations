System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Book;
    return {
        setters:[],
        execute: function() {
            Book = (function () {
                function Book() {
                    this.id = 0;
                    this.title = null;
                    this.author = null;
                }
                Book.fromJson = function (model) {
                    var o = new Book();
                    o.id = model.id;
                    o.title = model.title;
                    o.author = model.author;
                    return o;
                };
                return Book;
            }());
            exports_1("Book", Book);
        }
    }
});
//# sourceMappingURL=Book.js.map
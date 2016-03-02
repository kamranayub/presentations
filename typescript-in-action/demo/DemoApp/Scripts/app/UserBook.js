System.register(['./Book'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Book_1;
    var UserBook;
    return {
        setters:[
            function (Book_1_1) {
                Book_1 = Book_1_1;
            }],
        execute: function() {
            UserBook = (function (_super) {
                __extends(UserBook, _super);
                function UserBook() {
                    _super.apply(this, arguments);
                    this.added = null;
                    this.tags = [];
                    this.lists = [];
                }
                UserBook.fromJson = function (model) {
                    var o = Book_1.Book.fromJson(model);
                    o.added = new Date(model.added);
                    o.tags = model.tags;
                    o.lists = model.lists;
                    return o;
                };
                return UserBook;
            }(Book_1.Book));
            exports_1("UserBook", UserBook);
        }
    }
});
//# sourceMappingURL=UserBook.js.map
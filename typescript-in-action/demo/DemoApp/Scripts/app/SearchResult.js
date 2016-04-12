System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SearchResult;
    return {
        setters:[],
        execute: function() {
            SearchResult = (function () {
                function SearchResult() {
                    this._id = 0;
                    this._title = null;
                    this._author = null;
                }
                Object.defineProperty(SearchResult.prototype, "id", {
                    get: function () { return this._id; },
                    set: function (value) { this._id = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchResult.prototype, "title", {
                    get: function () { return this._title; },
                    set: function (value) { this._title = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchResult.prototype, "author", {
                    get: function () { return this._author; },
                    set: function (value) { this._author = value; },
                    enumerable: true,
                    configurable: true
                });
                SearchResult.fromJson = function (model) {
                    var o = new SearchResult();
                    o.id = model.id;
                    o.title = model.title;
                    o.author = model.author;
                    return o;
                };
                return SearchResult;
            }());
            exports_1("SearchResult", SearchResult);
        }
    }
});
//# sourceMappingURL=SearchResult.js.map
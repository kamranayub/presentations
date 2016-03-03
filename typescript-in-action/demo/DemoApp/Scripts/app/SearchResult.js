System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SearchResult;
    return {
        setters:[],
        execute: function() {
            SearchResult = (function () {
                function SearchResult() {
                    this.id = 0;
                    this.title = null;
                    this.author = null;
                }
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
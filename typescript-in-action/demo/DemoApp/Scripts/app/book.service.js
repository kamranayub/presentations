System.register(["angular2/core", "angular2/http", "rxjs/Observable", "./Book", "./SearchResult"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, Observable_1, Book_1, SearchResult_1, BookService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Book_1_1) {
                Book_1 = Book_1_1;
            },
            function (SearchResult_1_1) {
                SearchResult_1 = SearchResult_1_1;
            }
        ],
        execute: function () {
            BookService = (function () {
                function BookService(_http) {
                    this._http = _http;
                }
                BookService.prototype.getBooks = function () {
                    return this._http.get("api/books", null)
                        .map(function (res) { return res.json().data.map(Book_1.Book.fromJson); })
                        .catch(this._handleError);
                };
                BookService.prototype.postBook = function (id) {
                    return this._http.post("api/books/" + id, null)
                        .map(function (res) { return Book_1.Book.fromJson(res.json().data); })
                        .catch(this._handleError);
                };
                BookService.prototype.search = function (query, sortBy) {
                    return this._http.get("api/books/search?query=" + query + "&sortBy=" + sortBy, null)
                        .map(function (res) { return res.json().data.map(SearchResult_1.SearchResult.fromJson); })
                        .catch(this._handleError);
                };
                BookService.prototype._handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server Error');
                };
                return BookService;
            }());
            BookService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], BookService);
            exports_1("BookService", BookService);
        }
    };
});
//# sourceMappingURL=book.service.js.map
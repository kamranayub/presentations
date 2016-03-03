System.register(['angular2/core', 'angular2/router', './book.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, book_service_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_service_1_1) {
                book_service_1 = book_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_bookService, _routeParams, _router) {
                    this._bookService = _bookService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.searchResults = [];
                }
                SearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.query = decodeURI(this._routeParams.get('query'));
                    this._bookService.search(this.query)
                        .subscribe(function (results) {
                        return _this.searchResults = results;
                    });
                };
                SearchComponent.prototype.addBook = function (id) {
                    var _this = this;
                    this._bookService.postBook(id)
                        .subscribe(function (book) {
                        alert("Successfully added book: " + book.title);
                        _this._router.navigate(['Books']);
                    });
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        styles: ["\n    ul li { margin-bottom: 1em; }\n    "],
                        templateUrl: 'scripts/app/search.component.html'
                    }), 
                    __metadata('design:paramtypes', [book_service_1.BookService, router_1.RouteParams, router_1.Router])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map
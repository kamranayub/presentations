System.register(["angular2/core", "angular2/router", "angular2/http", "./book.service", "./booklist.component", "./search.component"], function (exports_1, context_1) {
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
    var core_1, router_1, http_1, book_service_1, booklist_component_1, search_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (book_service_1_1) {
                book_service_1 = book_service_1_1;
            },
            function (booklist_component_1_1) {
                booklist_component_1 = booklist_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.searchQuery = "";
                }
                AppComponent.prototype.search = function () {
                    var _this = this;
                    this._router.navigate(['Search', { query: this.searchQuery }]).then(function () { return _this.searchQuery = ''; });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [book_service_1.BookService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS],
                    styleUrls: ['scripts/app/app.component.css'],
                    templateUrl: 'scripts/app/app.component.html'
                }),
                router_1.RouteConfig([
                    {
                        path: '/books',
                        name: 'Books',
                        component: booklist_component_1.BookListComponent,
                        useAsDefault: true
                    },
                    {
                        path: '/search',
                        name: 'Search',
                        component: search_component_1.SearchComponent
                    }
                ]),
                __metadata("design:paramtypes", [router_1.Router])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map
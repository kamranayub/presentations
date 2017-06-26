System.register(["./Decorators"], function (exports_1, context_1) {
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
    var Decorators_1, Book;
    return {
        setters: [
            function (Decorators_1_1) {
                Decorators_1 = Decorators_1_1;
            }
        ],
        execute: function () {
            Book = (function () {
                function Book() {
                    this._id = 0;
                    this._title = null;
                    this._author = null;
                    this._added = null;
                    this._tags = [];
                    this._lists = [];
                }
                Object.defineProperty(Book.prototype, "id", {
                    get: function () { return this._id; },
                    set: function (value) { this._id = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "title", {
                    get: function () { return this._title; },
                    set: function (value) { this._title = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "author", {
                    get: function () { return this._author; },
                    set: function (value) { this._author = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "added", {
                    get: function () { return this._added; },
                    set: function (value) { this._added = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "tags", {
                    get: function () { return this._tags; },
                    set: function (value) { this._tags = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "lists", {
                    get: function () { return this._lists; },
                    set: function (value) { this._lists = value; },
                    enumerable: true,
                    configurable: true
                });
                Book.fromJson = function (model) {
                    var o = new Book();
                    o.id = model.id;
                    o.title = model.title;
                    o.author = model.author;
                    o.added = model.added;
                    o.tags = model.tags;
                    o.lists = model.lists;
                    return o;
                };
                return Book;
            }());
            __decorate([
                Decorators_1.DateStringConverter,
                __metadata("design:type", Date),
                __metadata("design:paramtypes", [Date])
            ], Book.prototype, "added", null);
            exports_1("Book", Book);
        }
    };
});
//# sourceMappingURL=Book.js.map
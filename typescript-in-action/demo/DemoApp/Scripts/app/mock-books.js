System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LIST, SEARCH_RESULTS;
    return {
        setters:[],
        execute: function() {
            exports_1("LIST", LIST = [
                {
                    title: 'Book 1',
                    author: 'Kamran Ayub',
                    added: new Date(2016, 2, 22),
                    tags: ["loaned", "review-later"]
                },
                {
                    title: 'Book 2',
                    author: 'Joe Danger',
                    added: new Date(2016, 1, 16),
                    tags: []
                }
            ]);
            exports_1("SEARCH_RESULTS", SEARCH_RESULTS = [
                {
                    title: 'Harry Potter and the Wizard Who Loved Me',
                    author: 'J.K. Rawdogs'
                },
                {
                    title: '\'Arry Pott\'uh and other British-isms',
                    author: 'Ruby O\'Malley'
                },
                {
                    title: 'What is Harry Potter even?',
                    author: 'Django Harris'
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-books.js.map
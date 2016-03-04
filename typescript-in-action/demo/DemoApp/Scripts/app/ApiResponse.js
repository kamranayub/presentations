System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ApiResponse;
    return {
        setters:[],
        execute: function() {
            ApiResponse = (function () {
                function ApiResponse() {
                    this.data = null;
                }
                ApiResponse.fromJson = function (model) {
                    var o = new ApiResponse();
                    o.data = model.data;
                    return o;
                };
                return ApiResponse;
            }());
            exports_1("ApiResponse", ApiResponse);
        }
    }
});
//# sourceMappingURL=ApiResponse.js.map
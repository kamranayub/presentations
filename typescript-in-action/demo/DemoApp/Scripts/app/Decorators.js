System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Ensures the value being passed in to the setter function is a date, given a string value
     * @param target
     * @param propertyKey
     * @param descriptor
     */
    function DateStringConverter(target, propertyKey, descriptor) {
        if (typeof descriptor === undefined) {
            return;
        }
        var set = descriptor.set;
        descriptor.set = function (value) {
            // using user-defined Type Guards to ensure we pass the right value
            if (value instanceof Date) {
                set.call(this, value);
            }
            else if (typeof value === "string") {
                set.call(this, new Date(value));
            }
            else {
                throw propertyKey + " on object " + target + " can only accept a Date or a string";
            }
        };
    }
    exports_1("DateStringConverter", DateStringConverter);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Decorators.js.map
/**
 * Ensures the value being passed in to the setter function is a date, given a string value
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function DateStringConverter(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (typeof descriptor === undefined) {
        return;
    }

    let set = descriptor.set;
    descriptor.set = function (value: string | Date) {

        // using user-defined Type Guards to ensure we pass the right value
        if (value instanceof Date) {
            set.call(this, value);
        } else if (typeof value === "string") {
            set.call(this, new Date(value));
        } else {
            throw `${propertyKey} on object ${target} can only accept a Date or a string`
        }
    }
}
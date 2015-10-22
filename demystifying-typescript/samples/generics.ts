var numberArray = new Array<number>();

// OK
numberArray.push(1);

// NOT OK
// ...

var equal = function<T>(a: T, b: T): boolean {
    return a === b;
}

equal(1, 1); // OK
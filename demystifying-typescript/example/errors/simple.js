function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });
    return result;
}
//# sourceMappingURL=simple.js.map
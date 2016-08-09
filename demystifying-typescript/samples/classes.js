var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.distance = function (other) {
        if (other === void 0) { other = new Point(0.0, 0.0); }
        return Math.sqrt(Math.pow(this.x - other.x, 2) +
            Math.pow(this.y - other.y, 2));
    };
    return Point;
}());
var p1 = new Point(5, 6);
var p2 = new Point(1, 1);
console.log("Distance between", p1, p2, "is", p1.distance(p2));

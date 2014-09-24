var Point = function (x, y) {
   this.x = x;
   this.y = y;
};
Point.prototype.distance = function (other) {
   other = other || new Point(0.0, 0.0);
   return Math.sqrt(
      Math.pow(this.x - other.x, 2) +
      Math.pow(this.y - other.y, 2));
};

console.log(new Point(4, 4));
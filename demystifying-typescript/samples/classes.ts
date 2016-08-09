class Point {

    constructor(public x: number, public y: number) {
        
    }
    
    public distance(other: Point = new Point(0.0, 0.0)) {        
        return Math.sqrt(
            Math.pow(this.x - other.x, 2) + 
            Math.pow(this.y - other.y, 2));
    }
}

var p1 = new Point(5, 6);
var p2 = new Point(1, 1);

// Calculate distance between two points
console.log("Distance between", p1, p2, "is", p1.distance(p2));
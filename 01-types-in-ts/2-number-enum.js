var Direction2;
(function (Direction2) {
    Direction2[Direction2["NORTH"] = 3] = "NORTH";
    Direction2[Direction2["SOUTH"] = 4] = "SOUTH";
    Direction2[Direction2["EAST"] = 5] = "EAST";
    Direction2[Direction2["WEST"] = 6] = "WEST";
})(Direction2 || (Direction2 = {}));
var dir2 = Direction2.NORTH;
console.log(dir2);
console.log(Direction2.SOUTH);
console.log(Direction2[0]);

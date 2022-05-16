var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 0] = "NORTH";
    Direction1[Direction1["SOUTH"] = 1] = "SOUTH";
    Direction1[Direction1["EAST"] = 2] = "EAST";
    Direction1[Direction1["WEST"] = 3] = "WEST";
})(Direction1 || (Direction1 = {}));
var dir1 = Direction1.NORTH;
console.log(dir1);
console.log(Direction1.SOUTH);
console.log(Direction1[0]);

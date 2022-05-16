// // define x,y
// type X = { x: number };
// type Y = { y: number };

// // define Point
// type Point = X & Y;

// // init point instance
// let point: Point = {
//     x: 100,
//     y: 200
// }

// console.log(point)



// // -----------------------
// type XZ = { x: string; z: number; };
// type YZ = { y: string; z: string; };
// type XYZ = XZ & YZ;

// let xyz: XYZ = {
//     x: 'Tom',
//     y: 'Susan',
//     z: 11;
// };



type X_Y = { x: { y: number } }; type X_Z = { x: { z: number } }; type X_YZ = X_Y & X_Z;
let x_yz: X_YZ = {
    x: {
        y: 1,
        z: 1
    }
};
console.log(x_yz); // { x: { y: 1, z: 1 } }
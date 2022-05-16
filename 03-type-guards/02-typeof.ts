(function paddingFuc(val: any) {
    console.log(typeof val)
    // number boolean string function object undefined
    if (typeof val === "number" || typeof val === "string") {
        console.log(`Padding is ${val}px`)
    } else {
        throw new Error(`Expected string or number, got '${val}'.`);
    }
})(true); // '15' true 

console.log(typeof 15);
console.log(typeof NaN); // number
console.log(typeof true);
console.log(typeof '15');
function printGood() {
    console.log('Good');
}
console.log(typeof printGood);
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof new Date()); // object
console.log(typeof null); // object
console.log(typeof undefined);
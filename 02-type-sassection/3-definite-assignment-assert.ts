let x!: number;
initialize1();
// Variable 'x' is used before being assigned.ts(2454) 
console.log(2 * x); // Error
function initialize1() {
    x = 10;
}
// // object destructing
// let person = {
//     age: 18,
//     gender: "Male"
// }

// let age3 = person.age;

// let { age } = person;

// let x: number; let y: number; let z: number; 
// let three_array = [0, 1, 2];
// [x, y, z] = three_array;

// console.log(y)


// Object Spread
// let human = {
//     name: "Jack",
//     gender: "Male",
//     address: "Dalian",
//     family: {
//         son: "Tom"
//     }
// };
// let humanWithAge = {
//     ...human,
//     age: 18
// };

// human.name = "Tom"
// console.log(humanWithAge);
// { name: 'Jack', gender: 'M


//  let human2 = human;
//  console.log(human2)

// let human3 = { ...human };
// human.family.son = "Susan";
// console.log(human3)

// Array Spread
let two_array = [0, 1];
let five_array = [two_array, 2, 3, 4];
 console.log(five_array); // [ 0, 1, 2, 3, 4 ]
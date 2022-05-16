// readonly
interface User {
    readonly name: string;
    age: number;
}
let jack: User = {
    name: 'Jack',
    age: 18
};
jack.age = 19;
console.log(jack);
// jack.name = 'Tom'; // Cannot assign to 'name' because it is a read-only property.ts(2540)
// ReadonlyArray<T>
let readonlyArray: ReadonlyArray<number> = [0, 1, 2, 3]; 
// readonlyArray.push(4); // Property 'push' does not exist on type 'readonly number[]'.ts(2339)
// readonlyArray[0] = 2; // Index signature in type 'readonly number[]' only permits reading.ts(2542)


interface Admin {
    // name: string;
    // age: number;
    // phone?: number;
    [prop: string]: string
}
let person: Admin = {
    // name: 'Tom',
    // age: 18
    "name": "Hello",
    "phone": "ooo",
    "sss": "ssss"
}
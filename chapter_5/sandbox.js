// primitive types: numbers, strings, bools, null, undefined, symbols
// reference types: all objects; literals, arrays, functions, dates, etc
// primitives are stored on the stack, reference types (objects) are on heap
// the stack points to objects in the heap

// if you create an object that is equal to another object, 
// you will not make a new object. You will make a new POINTER
// and both will point to the same object in the heap

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  // 100, 50
// // when we make a copy of primitives, they do not change when one updates

// reference values

const userOne = { name: 'ryu', age: 30}
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;

console.log(userOne, userTwo); // both age 40
// reference value changed for both since the object in the heap was updated
// reference types are stored ONCE
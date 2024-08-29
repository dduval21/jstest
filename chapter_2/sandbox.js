let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25'); // still true, even though different types
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal) 
console.log(age === 25);
console.log(age === '25'); // false! java is checking type now, too
console.log(age !== 25);
console.log(age !== '25');
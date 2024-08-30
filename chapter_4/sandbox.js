// regular function

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function (a little more simple to write)
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

// you can also remove the parentheses when there is just one parameter
// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// if one return, then we can omit the return keyword as well
// const calcArea = radius => {3.14 * radius**2};

const area = calcArea(5);
console.log('area is:', area);

// arrow function practice - turn these into arrow functions
// const greet = function(){
//     return 'hello world';
// }

const greet = () => 'hello world';
const result = greet();
console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log( bill([10, 15, 30], 0.2) );

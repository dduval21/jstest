// // function declaration - is always hoisted to top of file
// function greet(){
//     console.log('hello there');
// }

// function expression - is not hoisted to top of file
const speak = function(){
    console.log('good day');
};    // semicolon at end

greet();
greet();
greet();

speak();
speak();
speak();

// function declaration - is always hoisted to top of file
function greet(){
    console.log('hello there');
}
// get an element by ID
const title = document.getElementById('page-title');
// always grabs ONE
console.log(title);


// get elememnts by their class name

const errors = document.getElementsByClassName('error');

console.log(errors);
// cannot use ForEach on HTML collection
// errors.forEach(error => {
//     console.log(error); // errors.forEach is not a function
// })


// get elements by their tag name

const paras = document.getElementsByTagName('p');

console.log(paras);
console.log(paras[1]);
// const para = document.querySelector('p');

// const para = document.querySelector('.error');


const para = document.querySelector('div.error');
// you can also right click inspect an element and get selector

// console.log(para);

const paras = document.querySelectorAll('p');
// stores as a collection

console.log(paras); // paras[0] grab first node

// paras.forEach(para => {
//     console.log(para);
// })

const errors = document.querySelectorAll('.error');

console.log(errors);
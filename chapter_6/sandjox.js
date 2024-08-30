const para = document.querySelector('p');

// console.log(para.innerText); // innerText is a property, not a method

para.innerText = 'ninjas are awesome';
// can use += to append instead

const paras = document.querySelectorAll('p');

// iterates through all p and appends new text
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// // console.log(content.innerHTML);

// content.innerHTML = '<h2>This is a new H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});


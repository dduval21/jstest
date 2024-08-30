const title = document.querySelector('h1');

title.setAttribute('style', 'margin: 50px');
// this will overwrite the style completely
// how do we only modify/add one style

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';

title.style.fontSize = '60px'; 
// the style in css is font-size, but this will read weird in JS
// fontSize is the alternate for JS

title.style.margin = ''; // removes that property by doing this



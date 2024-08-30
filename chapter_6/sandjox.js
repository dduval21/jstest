const link = document.querySelector('a');

console.log(link.getAttribute('href'));
// google.com, takes the attribute of the 1st a tag


link.setAttribute('href', 'https://thenetninja.co.uk');
// now links to net ninja site
link.innerText = 'TheNet Ninja Website';
// changes the text of the link

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
// gets 'error' i.e. the class of that p tag

mssg.setAttribute('class', 'success');
// changes the class from error to success

mssg.setAttribute('style', 'color:green');
// there was no style attribute, but JS added it on anyway
// text is now green
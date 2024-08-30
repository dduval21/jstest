// callbacks & foreach
// you can pass a function as an argument

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(function(value){
//     // do something
//     console.log(value);

// });



let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// also: people.forEach(function(person){})
// people.forEach(person => {
//     console.log(person);
// });


// people.forEach((person,index) => {
//     console.log(person);
// });

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person} `)
}

people.forEach(logPerson);

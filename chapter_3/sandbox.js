// variables and & block scope
let age = 30;

if(true){
    let age = 40; // we're allowed to use let because it's not the same code block
    let name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block, ', age, name) 
    }
    
}

console.log('outside code block: ', age, name); // can't access name


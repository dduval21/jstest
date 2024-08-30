// arguments & parameters

// when we make the function, we define a parameter to be used in the function
const speak = function(name){   
    console.log(`good day ${name}`);
};

// console.log(name) --> doesn't work because name is local variable

// now we pass a value 'mario' (an argument) when we invoke the function:
// result: 'good day mario'
speak('mario');

// 2 parameters
const speakAgain = function(name, time){   
    console.log(`good ${time} ${name}`);
};

speakAgain('mario', 'morning'); // good morning mario

// invoking without arguments - need default values
const speakMore = function(name = 'gamer', time = 'evening'){   
    console.log(`good ${time} ${name}`);
};

speakMore(); // good evening gamer
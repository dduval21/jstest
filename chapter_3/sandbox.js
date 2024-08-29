// logical operators - OR || and AND &&

const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){    // we use else if in this case to run a separate loop.
    console.log('that password is strong enough');
} else {
    console.log('password is not long enough');
}
// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // console.log(this);
        console.log('This user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

// when using 'this' keyword, JS sets the value of the 'this' keyword to
// the object that the method was used on.

user.logBlogs();
console.log(this);

// NOTE: JS will not do that for an arrow function. 
// It takes what it currently is and passes it into the function
// e.g. logBlogs: () => {
    // }
    // console.log(this)   // will just display the window

// an easy way to use regular functions is to write it as such:
//logblogs(){}

// will work with this

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// console.log(user['name']);
// user['name'] = 'chun-li'; // another way to update values
// console.log(user['name']);



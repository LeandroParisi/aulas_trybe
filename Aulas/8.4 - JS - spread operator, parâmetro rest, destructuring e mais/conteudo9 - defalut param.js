// ES6: Set Default Parameters for Your Functions

// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:

// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John")); // Hello John
// console.log(greeting()); // Hello Anonymous

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value = 1)  => number + value;
// Only change code above this line

console.log('--------------');
console.log('ex.1');

function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(undefined, 'People');
say('Hi', undefined);
say(undefined, undefined);

// > Hey People
// > Hello People
// > Hi World
// > Hello World


console.log('--------------');
console.log('ex.2');

function say2 (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say2('Hey', 'People');
say2(null, 'People');
say2('Hi', null);
say2(null, null);

// > Hey People
// > null People
// > Hi null
// > null null


// ___ TYPESCRIPT ___

console.log("Hello world!")





// Data Types

console.log(typeof(1)) // = number
console.log(typeof(1.1)) // = number
console.log(typeof("hola")) // = string
console.log(typeof(true)) // = boolean
console.log(typeof(undefined)) // = undefined
console.log(typeof(null)) // = object (?)

console.log(typeof(parseInt("100"))); // = number
console.log(typeof(4 + parseInt("100"))); // = number

// Variables

let my_name: string = "David";
my_name = "David2";
console.log(my_name);

// cant change type to number

// Template strings:
console.log(`Hola ${my_name}`);

// const 
const my_simulated_variable : number = 100;
console.log(my_simulated_variable);
// my_simulated_variable = 200; // error
// console.log(my_simulated_variable); // error

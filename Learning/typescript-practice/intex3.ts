                /*   TYPING FUNCTIONS   */

/* OPTIONAL PARAMETERS */

// When we type functions we can make some of the parameters optional using the "?" symbol. 
// This will allow the compiler to execute the function with or without the optional parameters.

let addThreeNumbers = (x: number, y: number, z?: number): number => x + y + z;

/*   ORDER MATTERS   */
// In the following function you will notice that we have an error on the "z" parameter.
// This happens because we have to place the optional parameters at the end of the function parameters list.

// let addThreeNumbersWrong = (x: number, y ?: number, z: number): number => x + y + z; 
let addThreeNumbersWrong = (x: number, y: number, z?: number): number => x + y + z; 


/*  DEFAULT PARAMETERS */

// We can also make a paramter have a default value by initializing it with the (parameter = value) syntax.
let subtractThreeNumbers = (x: number, y: number, z = 0): number => x - y - z;


/*   FUNCTION TYPE INFERENCE   */

                /* note: the following commented code is an extract from the Microsoft documentation: https://learn.microsoft.com/en-us/training/modules/typescript-develop-typed-functions/6-define-function-types */
/* 
    When you define a function, the names of the function parameters don't need to match the names in the function type. 
    While you're required to name the parameters in the type signature in both places, the names are ignored when checking 
    if two function types are compatible.
    You can also leave off the parameter types and return type because TypeScript will infer these types 
    from the function type definition.
*/
                

interface Calculator {
    (x: number, y: number): number;
}

/*  As far as TypeScript is concerned, these three statements are identical. */
let addNumbers1: Calculator = (x: number, y: number): number => x + y;
let addNumbers2: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers3: Calculator = (num1, num2) => num1 + num2;

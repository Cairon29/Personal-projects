/* TypeScript basics */
/*
  NOTES:
  - We cannot run TypeScript files directly in the browser. We need to compile them to JavaScript first.
  - We can use the TypeScript compiler to compile the TypeScript files to JavaScript files.
  - We can use the tsc command to compile the TypeScript files.
  - The TypeScript compiler will generate a .js file for each .ts file.
  - We can also use the watch mode to automatically compile the TypeScript files when they change.
  - We can use the tsc -w command to run the TypeScript compiler in watch mode.
*/
/*   BASIC TYPING   */
// We can use the implicit type declaration as in javascript
var number = 5;
var string = "Hello";
// We can also use the explicit type declaration
var numberVar;
var stringVar;
var booleanVar;
var anyVar; // This is not recommended as it can lead to runtime errors since it can receive any kind of value
var unknownVar; // This is a better alternative to any since it forces us to check its type before using it
/*   TYPE ASSERTION   */
var randomValue = 10;
var value1 = randomValue;
// let value2 = (randomValue as string).toUpperCase();
// This is like a value convertion. We are telling the compiler that we know the type of the value and we want to use it as an specific type.
// The second way to translate a value from one type to another is using the <angle-bracket> syntax
var value3 = randomValue;
/*  UNION TYPES   */
// We can use the | operator to declare a variable that can hold a value of one of the types
var unionValue;
unionValue = "Hello"; // valid
unionValue = 10; // valid
// unionValue = false;   // invalid
// Example
var add = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
};
var Nataly = {
    age: 30,
    name: 'Nataly'
};
// Here we are using two different interfaces to define the structure of the object
var Johan = {
    name: 'Johan',
    age: 30,
    degree: 'Professional chef'
};
/* ARRAY'S */
// There are two ways to declare an array with TypeScript
// We have to specify the type of the elements in the array and use the square brackets to indicate that it's an array
var myArray = [1, 2, 3, 4, 5];
// We can also use the generic (Array) with the <type Sintax> to specify the type of the elements in the array
var list = [1, 2, 3];
/* TUPLES */
// If we needed to use diferent types on a array we can use the tuple like this
var person1 = ['Marcia', 35];
// let person2: [string, number, string] = ['Marcia', 'Brazil', 35 ]; // This will return an error because the value order in the array has to be the same as the type declaration
// also, we can't add more values to the array than the type declaration.
/*   Exercise - enums   */
// Create a set of values that you can use in your code. 
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));

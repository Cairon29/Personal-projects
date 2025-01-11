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
let number = 5;
let string = "Hello";

// We can also use the explicit type declaration
let numberVar: number;
let stringVar: string;
let booleanVar: boolean; 
let anyVar: any; // This is not recommended as it can lead to runtime errors since it can receive any kind of value
let unknownVar: unknown; // This is a better alternative to any since it forces us to check its type before using it

/*   TYPE ASSERTION   */
let randomValue : unknown = 10;
let value1 = randomValue as string;
let value2 = (randomValue as string).toUpperCase();
// This is like a value convertion. We are telling the compiler that we know the type of the value and we want to use it as an specific type.

// The second way to translate a value from one type to another is using the <angle-bracket> syntax
let value3 = <string>randomValue;

/*  UNION TYPES   */
// We can use the | operator to declare a variable that can hold a value of one of the types
let unionValue: string | number;
unionValue = "Hello"; // valid
unionValue = 10;      // valid
// unionValue = false;   // invalid

    // Example
const add = (x: number | string, y: number | string) => {
  if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
      return x.concat(y);
  }
  throw new Error('Parameters must be numbers or strings');
}
// console.log(add('one', 'two'));  //* Returns "onetwo"
// console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error


/*   INTERFACES   */

// Interfaces allow us to define the structure of an object and use it for type its properties
interface Person {
  name: string;
  age: number;
}

interface Bachelor {
  degree: string;
}

const Nataly : Person = {
  age: 30,
  name: 'Nataly'
}

// Here we are using two different interfaces to define the structure of the object
const Johan : Person & Bachelor = {
  name: 'Johan',
  age: 30,
  degree: 'Professional chef'
}

/* ARRAY'S */

// There are two ways to declare an array with TypeScript
// We have to specify the type of the elements in the array and use the square brackets to indicate that it's an array
const myArray : number[] = [1, 2, 3, 4, 5];
// We can also use the generic (Array) with the <type Sintax> to specify the type of the elements in the array
const list: Array<number> = [1, 2, 3];

/* TUPLES */

// If we needed to use diferent types on a array we can use the tuple like this
let person1: [string, number] = ['Marcia', 35];

/*   Exercise - enums   */
// Create a set of values that you can use in your code. 
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}

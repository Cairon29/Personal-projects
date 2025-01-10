/* TypeScript basics */

// We can use the implicit type declaration as in javascript
let number = 5;
let string = "Hello";

// We can also use the explicit type declaration
let numberVar: number;
let stringVar: string;
let booleanVar: boolean; 
let anyVar: any; // This is not recommended as it can lead to runtime errors since it can receive any kind of value

const addNumbers = (x: number, y: number) => {
  return x + y;
}
console.log(addNumbers(3, 6));

// 1. Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type

let result: string | number;

const testingFunction = (args : string | number): void => {
    console.log(typeof(args))
}
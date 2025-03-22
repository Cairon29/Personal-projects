//2. Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this. 

function testing2 (args1: boolean | number, args2: boolean | number): object {
    
    const fooObject = {
        [String(args1)] : [args2]
    }
    
    return fooObject;
}
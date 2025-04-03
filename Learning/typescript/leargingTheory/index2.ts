/*          IMPLEMENT INTERFACES IN TYPESCRIPT        */

/* 
    When to Use Which? 
            Use interface when:

    - You need to define object shapes or class contracts.
    - You want to leverage declaration merging.
    - You expect the structure to evolve over time (extend or merge interfaces).

            Use type when:
    - You need to define unions, intersections, or more advanced type compositions.
    - You’re defining things beyond object shapes, like function types, tuples, or primitive aliases.
*/


interface IceCream {
        flavor: string;
        scoops: number;
}

const myIceCream: IceCream = {
        flavor: 'chocolate',
        scoops: 2
}

/* EXTEND AN INTERFACE */

interface Sundae extends IceCream {
        sauce: 'chocolate' | 'caramel' | 'strawberry';
        nuts?: boolean;
        whippedCream?: boolean;
        instructions?: boolean;
}

// Here the Sundae interface extends the IceCream interface and adds new properties.
// Notice that there are some properties that are optional (nuts, whippedCream, instructions)
// This is because the "?" symbol makes an interface property optional

const mySundae: Sundae = {
        flavor: 'chocolate',
        scoops: 2,
        sauce: 'chocolate',
        nuts: true
}

//  Notice that in this is example, mySundae object only has the required properties and one optional
//  property instead of all the optional properties that the Sundae interface has.

const testFunction1 = () => ({ a: 1, b: 2});

// In this function notice that we receive one parameter which is going to be an object using the "IceCream"
// But not only that but then we have the "... : number" which is specifying that the FUNCTION WILL RETURN 
// a number. This is called a generic function and is a very powerful tool in TypeScript.

const testFunction2 = (helado: IceCream ): number => {
    return helado.scoops;
};

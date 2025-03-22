// Write a function that groups numbers into two categories: "even" and "odd".
// The function should return an object where the keys are "even" and "odd", and the values are arrays of numbers.

const groupByParity = (arr: number[]): object => {
    
    type Numbers = {
        even: number[]
        odd: number[]
    }

    let organizedNums: Numbers = {even: [], odd: []}

    for (const num of arr) {
        num % 2 === 0 
        ? organizedNums.even.push(num)
        : organizedNums.odd.push(num)
    }

    return organizedNums
}

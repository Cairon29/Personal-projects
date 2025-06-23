// Given an array of numbers, return the element that appears the most. If multiple elements have the same highest frequency, return the smallest one.

const mostFrequent = (arr:number[]): number => {

    let commonNumber = 0;
    const mostFrequentNumber: { [key: number]: number} = {}

    for (const curNumber of arr) {
        mostFrequentNumber[curNumber] = (mostFrequentNumber[curNumber] || 0) + 1;   
    }

    for (const key in mostFrequentNumber) {
        mostFrequentNumber[key] > commonNumber
        ? commonNumber = mostFrequentNumber[key]
        : mostFrequentNumber[key]
    }

    return commonNumber
}

console.log(mostFrequent([4, 2, 2, 8, 3, 3, 3, 2, 4, 4]))
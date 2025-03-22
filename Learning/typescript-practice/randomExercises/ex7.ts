// Write a function that takes an array of words and groups them based on their first letter.

const groupByFirstLetter = (arr: string[]): object => {

    let letterArr: { [key: string]: string[] } = {}

    for (const element of arr) {
        const letter = element.charAt(0)
        letterArr[letter] = (letterArr[letter] || []);
        letterArr[letter].push(element);
    }

    return letterArr;
}

// console.log(groupByFirstLetter(["apple", "banana", "apricot", "blueberry", "cherry"]));

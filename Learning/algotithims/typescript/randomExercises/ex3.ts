// Write a function that counts how many times each word appears in a sentence and stores the counts in an object.

function wordCount (sentence: string): object {

    const sentenceArr = sentence.split(' ')

    // here we are using dynamic key naming 
    // to work as a diccionary ↓↓↓ 
    let wordCountList: { [key: string]: number } = {};

    for (const word of sentenceArr) {
        wordCountList[word] = (wordCountList[word] || 0) + 1
    }

    return wordCountList
}

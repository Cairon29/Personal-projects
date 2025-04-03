// Write a function that takes an array of votes (each vote is a candidate's name) and returns an object with the total votes for each candidate.

const countVotes = (arr: string[]): object => {
    let listOfVotes: { [key: string]: number} = {}

    for (const candidate of arr) {
        listOfVotes[candidate] = (listOfVotes[candidate] || 0) + 1;
    }

    return listOfVotes;
}

// countVotes(["Alice", "Bob", "Alice", "Alice", "Bob", "Charlie"]);

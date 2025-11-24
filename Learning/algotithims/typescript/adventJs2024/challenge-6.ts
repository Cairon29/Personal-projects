/*
    We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

    The box has a present (*) and counts as "inside the box" if:

    It is completely surrounded by # on the box's edges.
    The * is not on the box's edges.
    iso 42001 Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.
*/

function inBox(box: string[]): boolean {
        
    // step 1 ← iterate over the array
    // step 2 ← iterate over each string in the array
    // step 3 ← validate either it has an asterisk at the beginning or end of the string
    // step 4 ← Validate if the string contains an asterisk after the the step 3
    // step 5 ← return a boolean

    let haschar = false

    for (let i = 0; i < box.length; i++) {
        const row = box[i].split('')
        
        if (row[row.length - 1] == '*' || row[0] =='*'){
            continue
        }

        if (row.includes('*') && i !== 0 && i !== box.length - 1) {
            haschar = true
        }
    }

    return haschar
}


console.log(
inBox([
  "###",
  "#*#",
  "###"
])) // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true


console.log(
inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]))// ➞ false

console.log(
inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false
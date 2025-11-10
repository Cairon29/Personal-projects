/*

    It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

    The function should return a string that represents the Christmas tree, constructed as follows:

    The tree is made up of triangles of special characters.
    The spaces on the sides of the tree are represented with underscores _.
    All trees have a trunk of two lines, represented by the # character.
    The tree should always have the same length on each side.
    You must ensure the tree has the correct shape using line breaks \n for each line.


    const tree = createXmasTree(5, '*')
    console.log(tree)

    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
    

    const tree2 = createXmasTree(3, '+')
    console.log(tree2)
    
    __+__
    _+++_
    +++++
    __#__
    __#__
    

    const tree3 = createXmasTree(6, '@')
    console.log(tree3)

    _____@_____
    ____@@@____
    ___@@@@@___
    __@@@@@@@__
    _@@@@@@@@@_
    @@@@@@@@@@@
    _____#_____
    _____#_____
    
*/


export function createXmasTree (height: number, ornament: string): string {

    let ornaments_array = []

    for (let i = 0; i < height; i++) {
        if (ornaments_array.length == 0) {
            ornaments_array.push(ornament)
        } else {
            let lastElementLenght: number = ornaments_array[ornaments_array.length -1].length
            let repeatNumber = lastElementLenght + 2
            ornaments_array.push(ornament.repeat(repeatNumber))
        }
    }
    
    const longestRow = ornaments_array[ornaments_array.length - 1].length

    const addUnderscores = (array: string[]) => {    
        const newArray = array.map(element => {
            const numberOfSymbols = Math.floor(longestRow - element.length) / 2
            const symbol = '_'
            const underScores = symbol.repeat(numberOfSymbols) 
            return underScores + element + underScores
        })
        return newArray
    }

    const root = [ '#', '#' ]
    
    const leaves = addUnderscores(ornaments_array)
    const trunk = addUnderscores(root)

    const rawTree = leaves.concat(trunk)

    const tree = rawTree.map((element, i) => (
        i !== rawTree.length - 1
        ? element + `\n`
        : element
    )).join("")
    return tree
}
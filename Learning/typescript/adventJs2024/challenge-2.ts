/* 
    Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

    Rules:

    Given an array of names, you must create a rectangular frame that contains all of them.
    Each name must be on a line, aligned to the left.
    The frame is built with * and has a border one line thick.
    The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
*/

function generateFrame(names: string[]): string {

    let largestName = 0;
    
    names.forEach(name => {
        name.length > largestName 
        ? largestName = name.length
        : name
    });

    let maxWidth = largestName + 2; // here it gives the max name length ant then its two spaces each side
    let border = '*'.repeat(maxWidth + 2)
    
    const framedNames = names.map((name) => {
        const framedName = ` ${name.padEnd(largestName)} `
        return `*${framedName}*`
    })
    

    const frame = [border, ...framedNames, border].join('\n')

    return frame
}

console.log(generateFrame(['jose', 'david', 'junco', 'navarro', 'dayana', 'diyinger', 'culma']));
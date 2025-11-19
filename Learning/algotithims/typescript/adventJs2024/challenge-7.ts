function fixPackages(input: string): string {
    let str = input;

    while (str.includes("(")) {
        let lastOpen = -1;
        let firstClose = -1;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(") {
                lastOpen = i;
            }
        }

        for (let j = lastOpen + 1; j < str.length; j++) {
            if (str[j] === ")") {
                firstClose = j;
                break;
            }
        }

        const inside = str.slice(lastOpen + 1, firstClose);

        let reversed = "";
        for (let k = inside.length - 1; k >= 0; k--) {
            reversed += inside[k];
        }

        const before = str.slice(0, lastOpen);
        const after = str.slice(firstClose + 1);

        str = before + reversed + after;
    }

    return str;
}

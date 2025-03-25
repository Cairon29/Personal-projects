class Mouse {
    constructor(brandName, series, isWireless, maxDPI, color) {
        this.brandName = brandName;
        this.series = series;
        this.isWireless = isWireless;
        this.maxDPI= maxDPI;
        this.curDPI = 100;
        this.color = color;
    }

    changeDPI = (DPI) => {
        (DPI >= 100 && DPI <= this.maxDPI)
        ? this.curDPI = DPI
        : console.log('invalid DPI change')
    }

    smoothPhrase = () => console.log(`Here a spectacular phrase about ${this.brandName} ${this.series}`)
}

const Logitech = new Mouse('Logitech', 'g203', false, 8000, 'black')

console.log(Logitech)
console.log(typeof(Logitech));

console.log(Logitech.changeDPI(200)) // ←← Returns undefined due to printing a function
console.log(Logitech)

console.log(Logitech.smoothPhrase()); // ←← Returns undefined due to printing a function
Logitech.smoothPhrase() // ← The correct way is just like this


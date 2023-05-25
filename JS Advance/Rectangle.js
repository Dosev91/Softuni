function rectangle(width, height, color) {
    return {
        width,
        height,
        color: toTitleCase(color),
        calcArea: function () {
            return this.width * this.height;
        }
    };
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
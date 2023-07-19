class List {
    constructor() {

        this.arrOfNums = [];
        this.size = 0;
    }

    add(num) {
        this.arrOfNums.push(num);
        this.arrOfNums.sort((a, b) => a - b);
        this.size = this.arrOfNums.length;
    }

    remove(index) {
        if (!this.arrOfNums[index]) {
            return;
        }

        this.arrOfNums.splice(index, 1);
        this.arrOfNums.sort((a, b) => a - b);
        this.size = this.arrOfNums.length;
    }

    get(index) {
        return this.arrOfNums[index];
        // return this.arrOfNums.at(index);
    }
}

// const list = new List();

// // list.add(1)
// // list.add(2)
// // list.add(3)

// console.log(list.hasOwnProperty('size'))


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

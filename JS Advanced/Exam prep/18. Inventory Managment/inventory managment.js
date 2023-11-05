class InventoryManager {

    constructor(capacity, item = [], outOfStock = []) {

        this.capacity = capacity;
        this.item = item;
        this.outOfStock = outOfStock;

    }

    addItem(itemName, quantity) {

        const findItem = this.item.findIndex(i => {
            return i === itemName;
        })

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.capacity <= this.item.length ) {
            throw new Error("The inventory is already full.")
        }
        if (findItem === -1) {
            this.item.push({ [itemName]: quantity });
        } else {
            this.item[itemName] += quantity;
        }
    }


}


const manager = new InventoryManager(22);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Drill", 3));


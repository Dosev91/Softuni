class InventoryManager {

    constructor(capacity, items = [], outOfStock = []) {

        this.capacity = capacity;
        this.items = items;
        this.outOfStock = outOfStock;

    }

    addItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.capacity === this.items.length) {
            throw new Error("The inventory is already full.")
        }

        const existingItem = this.items.find(item => item.itemName === itemName);

        if (!existingItem) {
            this.items.push({ itemName, quantity });
        } else {
            existingItem.quantity += quantity;
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const existingItem = this.items.find(item => item.itemName === itemName);

        if (!existingItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > existingItem.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        existingItem.quantity -= quantity;

        if (existingItem.quantity === 0) {
            const findIndex = this.items.indexOf(existingItem);
            this.items.splice(findIndex, 1);

            this.outOfStock.push(existingItem.itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const existingItem = this.items.find(item => item.itemName === itemName);

        if (!existingItem) {
            this.items.push({ itemName, quantity });
        } else {
            existingItem.quantity += quantity;
        }

        const existingItemIndex = this.outOfStock.indexOf(itemName);

        if (existingItemIndex !== -1) {

            this.outOfStock.splice(existingItemIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary() {

        let summary = "Current Inventory:\n";

        this.items.forEach((item, index, arr) => {

            const isLastItem = index === arr.length - 1;

            summary += `${item.itemName}: ${item.quantity}${isLastItem ? '' : '\n'}`
        })

        if (this.outOfStock.length) {

            summary += `\nOut of Stock: ${this.outOfStock.join(",")}`;
        }
        return summary;

    }

}

// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



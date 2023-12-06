class FashionRetailInventory {

    constructor(storehouse, location, productStock = []) {

        this.storehouse = storehouse;
        this.location = location;
        this.productStock = productStock;
    }

    addProduct(productName, size, quantity, price) {

        const existsProduct = this.productStock.find(obj => {
            return obj.productName === productName && obj.size === size;
        });

        if (existsProduct) {
            existsProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        }

        this.productStock.push({ productName, size, quantity, price });
        return `The product ${productName}, size ${size} was successfully added to the inventory`
    }

    sendProduct(productName, size) {

        const index = this.productStock.findIndex(obj => obj.productName === productName && obj.size === size);

        if (index === -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }

        this.productStock.splice(index, 1);
        return `The product ${productName}, size ${size} was successfully removed from the inventory`;

    }

    findProductsBySize(size) {

        let productList = "";
        let isExist = false;

        for (let i = 0; i < this.productStock.length; i++) {
            if (this.productStock[i].size === size) {
                productList += i + 1 >= this.productStock.length ? `${this.productStock[i].productName}-${this.productStock[i].quantity} pieces` : `${this.productStock[i].productName}-${this.productStock[i].quantity} pieces, `;
                isExist = true;
            }
        }
        if (isExist === false) {
            return `There are no products available in that size`;
        }
        return productList;
    }

    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`;
        }
    
        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
    
        let finaleText = `${this.storehouse} storehouse in ${this.location} available products:\n`;
    
        for (let i = 0; i < this.productStock.length; i++) {
            finaleText += `${this.productStock[i].productName}/Size:${this.productStock[i].size}/Quantity:${this.productStock[i].quantity}/Price:${this.productStock[i].price}$`;
     
       if (i !== this.productStock.length - 1) {
                finaleText += '\n';
            }
        }
        return finaleText;
    }
       
   
    }
    

//     const storeHouse = new FashionRetailInventory("East", "Milano");
//   console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
//   console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
//   console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
//   console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

    // const storeHouse = new FashionRetailInventory("East", "Milano");
    //   console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
    //   console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
    //   console.log(storeHouse.sendProduct("T-Shirt", "M"));
    //   console.log(storeHouse.sendProduct("Sweather", "M"));
    
//     const storeHouse = new FashionRetailInventory("East", "Milano");
//   console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
//   console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
//   console.log(storeHouse.findProductsBySize("M"));
//   console.log(storeHouse.findProductsBySize("XL"));

  const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());

    // if (this.productStock.length === 0) {
    //     return `${storehouse} storehouse is empty`
    // }
    // let finaleText = `${storehouse} storehouse in ${location} available products:\n`

    // for (let i = 0; i < this.productStock.length; i++) {
    //     if (this.productStock[i].size === size) {
    //         finaleText += i + 1 >= this.productStock.length ? `${this.productStock[i].productName}/Size:${this.productStock[i].size}/Quantity:${this.productStock[i].quantity}/Price:${this.productStock[i].price}$` : `${this.productStock[i].productName}/Size:${this.productStock[i].size}/Quantity:${this.productStock[i].quantity}/Price:${this.productStock[i].price}$\n`;
    //         isExist = true;
    //     }

    // }
    
    
    
    // const existsProduct = this.productStock.find(obj => {
        //     return obj.productName === productName && obj.size === size;
        // });
        // if (existsProduct === undefined) {
            //     throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
            // }

class Garden {
    constructor(spaceAvailable, plants = [], storage = []) {

        this.spaceAvailable = spaceAvailable;
        this.plants = plants;
        this.storage = storage;

    }

    addPlant(plantName, spaceRequired) {


        if (this.spaceAvailable - spaceRequired <= 0) {
            throw new Error(`Not enough space in the garden.`);
        }

        this.plants.push({

            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0

        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`

    }

    ripenPlant(plantName, quantity) {

        const plant = this.plants.find(plnObj =>
            plnObj.plantName === plantName
        );

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {

        const plant = this.plants.find(plnObj =>
            plnObj.plantName === plantName
        );
        const indexPlant = this.plants.findIndex(obj => obj.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe != true) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.storage.push(plant);
        this.spaceAvailable += plant.spaceRequired;

        this.plants.splice(indexPlant, 1);
        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {

        let report = `The garden has ${this.spaceAvailable} free space left.`;
        let plants = "";
        let plantInStorage = "";

        const arr = this.plants.sort((a, b) => {
            const nameA = a.plantName.toLowerCase();
            const nameB = b.plantName.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        arr.forEach((plantN, index, arr) => {

            const isLastItem = index === arr.length - 1;

            plants += `${plantN.plantName}${isLastItem ? '' : ', '}`
        });
        report += `\nPlants in the garden: ${plants}`

        if (this.storage.length === 0) {
            report += `\nPlants in storage: The storage is empty."`
        } else {
            this.storage.forEach((pla, index, arr) => {

                const isLastItem = index === arr.length - 1;

                plantInStorage += `${pla.plantName} (${pla.quantity})${isLastItem ? '' : ', '}`

            });
        }
        report += `\nPlants in storage: ${plantInStorage}`;
        return report;
    }

}


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());




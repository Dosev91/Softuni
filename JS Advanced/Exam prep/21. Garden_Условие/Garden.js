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
}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));




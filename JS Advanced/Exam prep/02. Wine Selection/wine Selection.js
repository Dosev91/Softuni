class WineSelection {
    constructor(space, wines = [], bill = 0) {
        this.space = space;
        this.wines = wines;
        this.bill = bill;

    }
    reserveABottle(wineName, wineType, price) {
        if (this.wines.length + 1 > this.space) {
            throw new Error("Not enough space in the cellar.");
        } else {
            this.wines.push({
                wineName,
                wineType,
                price,
                paid: false
            })
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(wine => wine.wineName === wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            wine.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`
        }
    }

    openBottle(wineName) {
        const wine = this.wines.find(wine => wine.wineName === wineName);

        if (!wine) {
            throw new Error("The wine, you're looking for, is not found.");
        } else if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            const indexOfWine = this.wines.indexOf(wine);
            this.wines.splice(indexOfWine, 1);
            return `You drank a bottle of ${wineName}.`
        }
    }

    cellarRevision(wineType) {

        if (!wineType) {

            const emptySlots = this.space - this.wines.length;

            let result = `You have space for ${emptySlots} bottles more.\n`;
            result += `You paid ${this.bill}$ for the wine.\r\n`;

            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            const totalWines = this.wines.length;
            this.wines.forEach((wine, index) => {
                result += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
                if (index !== totalWines - 1) {
                    result += '\n';
                }
            });
            return result;
        } else {
            const wine = this.wines.find(wine => wine.wineType === wineType);
            if (wine) {
                return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
        }

    }
    // this.wines.forEach(wine => {
    //     result += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.\n`
    // });
}
//----------------------------------------------input1----------------------------------------------

             const selection = new WineSelection(2)
             console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
             console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
             console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

//     output

//              You reserved a bottle of Sauvignon Blanc Marlborough White wine.
//              You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
//              Uncaught Error Error: Not enough space in the cellar.

// ----------------------------------------------input2----------------------------------------------

//              const selection = new WineSelection(2)
//              selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
//              console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
//              console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

//     output2

//              You bought a Sauvignon Blanc Marlborough for a 120$.
//              Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// ----------------------------------------------input3----------------------------------------------

//              const selection = new WineSelection(2)
//              selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
//              selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
//              selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
//              console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
//              console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

//     output3

//              You drank a bottle of Sauvignon Blanc Marlborough.
//              Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.

// ----------------------------------------------input4----------------------------------------------

//              const selection = new WineSelection(2)
//              console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
//              console.log(selection.cellarRevision('Rose'));


//     output4

//              You reserved a bottle of Bodegas Godelia Mencía Rose wine.
//              Bodegas Godelia Mencía > Rose - Not Paid.

// ----------------------------------------------input5----------------------------------------------

            //  const selection = new WineSelection(5)
            //  selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
            //  selection.payWineBottle('Bodegas Godelia Mencía', 144);
            //  selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
            //  selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
            //  console.log(selection.cellarRevision());

//     output5

//              You have space for 2 bottles more.
//              You paid 144$ for the wine.
//              Bodegas Godelia Mencía > Rose - Has Paid.
//              Cabernet Sauvignon Napa Valley > Red - Not Paid.
//              Sauvignon Blanc Marlborough > White - Not Paid.


// Unexpected error: expected
// 'You have space for 2 bottles more.\r\n
// You paid 144$ for the wine.\r\n
// Bodegas Godelia Mencía > Rose - Has Paid.\r\n
// Cabernet Sauvignon Napa Valley > Red - Not Paid.\r\n
// Sauvignon Blanc Marlborough > White - Not Paid.\r\n'
//  to equal
//  'You have space for 2 bottles more.\n
//  You paid 144$ for the wine.\n
//  Bodegas Godelia Mencía > Rose - Has Paid.\n
//  Cabernet Sauvignon Napa Valley > Red - Not Paid.\n
//  Sauvignon Blanc Marlborough > White - Not Paid.'
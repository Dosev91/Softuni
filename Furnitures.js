function furniture(input) {

    let pattern = /(?<type>[A-Z]+[A-Za-z]+)<<(?<price>[0-9.]+)!(?<count>\d+)/g;
    let totalMoney = 0;
    console.log(`Bought furniture:`);

    for (const sentence of input) {
        if (sentence === "Purchase") {
            break
        }
        if (pattern.test(sentence)) {
            let product = pattern.exec(sentence);
            let sum = Number(product.groups.price) * Number(product.groups.count);
        }
        debugger
    }

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
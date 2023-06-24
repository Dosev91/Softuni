function argumentInfo(...args) {

    const obj = {};

    args.forEach((arg) => {
        const tapeOfArg = (typeof arg);
        console.log(`${tapeOfArg}: ${arg}`);

        // Object.keys(obj).includes(tapeOfArg)

        if (obj.hasOwnProperty(tapeOfArg)) {
            obj[tapeOfArg] += 1;
        } else {
            obj[tapeOfArg] = 1
        }
    });

    const sortObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    sortObj.forEach(([key, value]) => {
        console.log(`${key} = ${value}`);
    })

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })
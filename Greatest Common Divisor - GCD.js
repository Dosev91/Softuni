function greatestCommon(a, b) {

    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}
greatestCommon(2154, 458);
greatestCommon(15, 5)
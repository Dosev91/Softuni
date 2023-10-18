function euclideanGCD(a, b) {
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);;
}
euclideanGCD(105,75)
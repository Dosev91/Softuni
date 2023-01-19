function solve(yield) {

    let totalAmount = 0;
    let crewConsumes = 26;
    let days = 0;

    for (let i = yield; i >= 100; i -= 10) {
        days++;
        totalAmount += i - crewConsumes;
    }
    if (totalAmount <= crewConsumes) {
        console.log(days);
        console.log(totalAmount);
    } else {
        totalAmount = totalAmount - crewConsumes;
        console.log(days);
        console.log(totalAmount);
    }
}
solve(20)
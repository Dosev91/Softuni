function slove(input) {
    const pricevegetables = Number(input[0]);
    const priceFruit = Number(input[1]);
    const vegetablesKg = Number(input[2]);
    const fruitKg = Number(input[3]);
    let vegetables = vegetablesKg * pricevegetables ;
    let fruit =fruitKg * priceFruit;
    let totalIncome = (vegetables + fruit) / 1.94;


    console.log(totalIncome);
}
slove(["1.5", "2.5", "10", "10"])

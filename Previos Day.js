function previousDay(year, month, day) {

    var d = new Date(`${year}-${month}-${day}`); // today!
    var x = 1; // go back 1 days!
    d.setDate(d.getDate() - x);
    console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);

}
previousDay(2016, 9, 30)
console.log(`--------------------------`);
previousDay(2015, 5, 10)

// console.log(d);
    // console.log(d.getFullYear());
    // console.log(d.getMonth() + 1);
    // console.log(d.getDate());
    // let a = new Date();
    // let b = a.getFullYear()
    // console.log(b);
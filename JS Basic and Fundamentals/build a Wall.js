function wall(arr) {

    let step = Math.min(...arr);
    let sum = 0;
    let concreteOfDay = 0;
    let concreteOfDayresult = '';
    let totalConcrete = 0;

    for (let i = step; i < 30; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (Number(arr[j]) < 30) {
                arr[j] += 1;
                concreteOfDay += 195;
            }
        }
        if ((i + 1) == 30) {
            concreteOfDayresult += concreteOfDay;
            totalConcrete += Number(concreteOfDay);
        } else {
            concreteOfDayresult += concreteOfDay + "," + " ";
            totalConcrete += Number(concreteOfDay);
        }
        concreteOfDay = 0;
    }
    sum = totalConcrete * 1900;

    console.log(concreteOfDayresult);
    console.log(`${sum} pesos`);

}
wall([21, 25, 28])
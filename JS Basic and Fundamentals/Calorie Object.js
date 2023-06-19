function calorieObj(el) {

    let obj = {};

    for (let i = 1; i < el.length; i += 2) {
        let prop = el[i - 1];
        let val = +el[i];
        if (obj[i - 1] === undefined) {
            obj[prop] = val;
        } else {
            obj[i - 1] += val;
        }
    }
    console.log(obj);
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);

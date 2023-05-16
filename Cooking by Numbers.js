function cooking(...params) {

    let num = params[0];
    let a = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x + 1,
        'bake': (x) => x * 3,
        'fillet': (x) => x - (x * 0.2)

    }
    for (let i = 1; i < params.length; i++) {
        let activity = params[i];

        num = a[activity](num);
        console.log(num);

    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')
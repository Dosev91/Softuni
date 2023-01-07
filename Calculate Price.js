
function calciletePrice(heigh, lenght, width, typeWork) {

    let wals1 = lenght * heigh;
    let wals2 = width * heigh;
    let ceil = lenght * width;
    let kvm = 0;
    let sum = 0;
    let arrs = [];

    if (typeWork == 'grid') {
        kvm = (wals1 * 2) + (wals2 * 2);
        sum = (ceil * 50) + (kvm * 30);
        arrs.push(kvm);
        arrs.push(ceil);
        arrs.push(sum);
        return arrs;
    } else {
        ceil = (wals1 * 2) + (wals2 * 2) + ceil;
        sum = ceil * 50;
        arrs.push(kvm);
        arrs.push(ceil);
        arrs.push(sum);
        return arrs;
    }

}

function input(arr) {

    let step = 3;
    let visochina = 0;
    let duljina = 0;
    let shirina = 0;
    let type = '';
    let ceil = 0;
    let kvm = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (step - 3 == i) {
            visochina = arr[i];
        } else if (step - 2 == i) {
            duljina = arr[i];
        } else if (step - 1 == i) {
            shirina = arr[i];
        } else if (step == i) {
            type = arr[i];
            let box = calciletePrice(visochina, duljina, shirina, type)
            sum += box[2];
            kvm += box[0];
            ceil += box[1];
            step += 4;

        }
    }
    console.log(`${Math.ceil(kvm)} kv.m`);
    console.log(`${Math.ceil(ceil)} kv.m`);
    console.log(`${Math.ceil(sum)} lv.`);
    console.log(`Materials`);

    let materials = {

        gk: 0.4 * ceil,
        cd3m: 0.4 * ceil,
        ud3m: 0.5 * ceil,
        vata: ceil,

    }
    for (let [kay, value] of Object.entries(materials)) {
        console.log(`${kay} - ${Math.ceil(value)}`);
    }
}
input([2.65, 3.45, 3.45, 'grid', 2.60, 5.60, 3.45, 'grid', 2.65, 3.48, 3.40, 'grid', 2.60, 3.40, 2.5, 'grid', 2.60, 1.00, 1.00, 'grid', 2.60, 1.30, 3.40, 'grid', 2.60, 0.85, 2.60, 'grid'])
//input([2.7, 5.70, 3.30, "gk"])


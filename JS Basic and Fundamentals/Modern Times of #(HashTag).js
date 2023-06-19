function modern(input) {

    let textArr = input.split(' ');
    let result = [];

    for (const el of textArr) {
        if (el.startsWith('#') && el.length > 1) {
            let special = true;
            el = el.substring(1)
            for (const cha of el) {
                cha = cha.toLowerCase();
                if (cha.charCodeAt(0) < 97 || cha.charCodeAt(0) > 122) {
                    special = false;
                    break;
                }
            }
            if (special) {
                result.push(el)
            }
        }
    }
    console.log(result);


}
modern('Nowadays everyone uses # to tag a #special word in #socialMMedia')
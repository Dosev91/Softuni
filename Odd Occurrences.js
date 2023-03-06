function oddOccurrences(text) {

    let sentence = text.toLowerCase().split(" ");
    let obj = {};
    let arr = [];

    for (const key of sentence) {
        if (obj.hasOwnProperty(key)) {
            let a = key;
            obj[a] += 1;
        } else {
            let a = key;
            obj[a] = 1
        }
    }
    for (const [key, value] of Object.entries(obj)) {
        if (value % 2 === 0) {
            delete obj[key];
        } else {
            arr.push(key);
        }

    }

    console.log(arr.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
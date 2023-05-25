function townJSON(input) {
    const regex = /([A-z.0-9]+)/g;

    const headers = input.shift().match(regex);

    const result = [];

    for (const text of input) {
        const values = text.match(regex);

        result.push({
            [headers[0]]: isNaN(parseInt([values[0]])) ? [values[0]] : +(+[values[0]]).toFixed(2),
            [headers[1]]: isNaN(parseInt([values[1]])) ? [values[1]] : +(+[values[1]]).toFixed(2),
            [headers[2]]: isNaN(parseInt([values[2]])) ? [values[2]] : +(+[values[2]]).toFixed(2),
        });
    }

    return JSON.stringify(result);

    // <====================================================> 
    /**
    const regex = /([A-z.0-9]+)/g;
 
    const headers = input.shift().match(regex);
 
    const result = [];
    
    for (const text of input) {
        const values = text.match(regex);
        
        let index = 0;
 
        const tempObj = {};
 
        for (const value of values) {
            tempObj[headers[index]] = isNaN(parseInt(value)) ? value : +(+value).toFixed(2);
            
            index++;
        }
 
        result.push(tempObj);
    }
 
 
    return JSON.stringify(result);
    */

    // <====================================================> 

    // let obj = [{}];
    // let regex = /([A-z.0-9]+)/g
    // let matrix = [[]]
    // let index = 0;


    // for (let i = 0; i < input.length; i++) {

    //     let arr = input[i].match(regex);

    //     for (const el of arr) {
    //         matrix[index].push(el);
    //     }
    //     if (i + 1 == input.length) {
    //         break;
    //     }
    //     index++
    //     matrix[index] = [];
    // }

    // let [town, latitude, ltude] = matrix[0];
    // index = 0;

    // for (let i = 1; i < matrix.length; i++) {
    //     obj[index] = {};
    //     obj[index][town] = matrix[i][0];
    //     obj[index][latitude] = Number(matrix[i][1]);
    //     obj[index][ltude] = Number(matrix[i][2]);
    //     index++;
    //     debugger
    // }
}
townJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])

townJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])
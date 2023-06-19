function astra(input) {

    let regex = /[\#\|](?<fruite>[A-Z][A-Za-z]+|[A-Z][A-Za-z].\ [A-Za-z]+)[\#\|](?<date>[\d]{2}\/[\d]{2}\/[\d]{2})[\#\|](?<calories>[\d]+)[\#\|]/g
    let a = input[0].match(regex);
    let text = "";
    let days = 0;


    for (const key of a) {
        regex = /[\#\|](?<fruite>[A-Z][A-Za-z]+|[A-Z][A-Za-z].\ [A-Za-z]+)[\#\|](?<date>[\d]{2}\/[\d]{2}\/[\d]{2})[\#\|](?<calories>[\d]+)[\#\|]/
        if (regex.test(key)) {
            let workArr = regex.exec(key);
            text += `Item: ${workArr.groups.fruite}, Best before: ${workArr.groups.date}, Nutrition: ${workArr.groups.calories} |`;
            days += +workArr.groups.calories;
        }
    }
    days = days / 2000;
    text = text.split(" |")
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    for (const key of text) {
        console.log(`${key}`)
    }
}
// astra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
// )
astra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )
function slove(input, arr) {

    let result = "";

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (input[i] === arr[j]) {
                console.log(arr[j]);
            }

        }
    }

}
slove(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)


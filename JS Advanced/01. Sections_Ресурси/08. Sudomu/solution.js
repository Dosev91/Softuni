function solve() {

    const [btnChek, clear] = document.querySelectorAll("button");
    const arrOfNumbers = Array.from(document.querySelectorAll("input"));
    const table = document.querySelector("table");
    const result = document.querySelector("#check p");

    btnChek.addEventListener("click", () => {
        const firstRowValid = verifyNumners([+arrOfNumbers[0].value, +arrOfNumbers[1].value, +arrOfNumbers[2].value]);
        const secondtRowValid = verifyNumners([+arrOfNumbers[3].value, +arrOfNumbers[4].value, +arrOfNumbers[5].value]);
        const thirdRowValid = verifyNumners([+arrOfNumbers[6].value, +arrOfNumbers[7].value, +arrOfNumbers[8].value]);

        const firstColValid = verifyNumners([+arrOfNumbers[0].value, +arrOfNumbers[3].value, +arrOfNumbers[6].value]);
        const secondColValid = verifyNumners([+arrOfNumbers[1].value, +arrOfNumbers[4].value, +arrOfNumbers[7].value]);
        const thirdColValid = verifyNumners([+arrOfNumbers[2].value, +arrOfNumbers[5].value, +arrOfNumbers[8].value]);

        const allValid = firstRowValid && secondtRowValid && thirdRowValid && firstColValid && secondColValid && thirdColValid;

        if (allValid) {
            table.style.border = '2px solid green';
            result.textContent = "You solve it! Congratulations!";
            result.style.color = "green";
        } else {
            table.style.border = '2px solid red';
            result.textContent = "NOP! You are not done yet...";
            result.style.color = "red";
        }
    })
    clear.addEventListener("click", () => {

        arrOfNumbers.forEach((input) => {
            input.value = null;
        })
        result.textContent = '';
        table.style.border = '';

    })

    function verifyNumners(numbers) {
        return numbers.includes(1) && numbers.includes(2) && numbers.includes(3);
    }

}


function play() {
    const [r, s, p] = document.querySelectorAll("button");
    const result = document.getElementById("result");
    const paragrap = document.createElement("p");


    r.addEventListener("click", () => {
        s.style.background = "#0056b3";
        p.style.background = "#0056b3";
        r.style.background = "green";
        let playerTwo = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        if (playerTwo === 1) {
            win();
            s.style.background = "green";
        } else {
            lose()
            r.style.background = "red";
            p.style.background = "red";
        }
    })
    s.addEventListener("click", () => {
        r.style.background = "#0056b3";
        p.style.background = "#0056b3";
        s.style.background = "green";
        let playerTwo = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        if (playerTwo === 1) {
            win();
            p.style.background = "green";
        } else {
            lose()
            s.style.background = "red";
            r.style.background = "red";
        }
    })
    p.addEventListener("click", () => {
        s.style.background = "#0056b3";
        r.style.background = "#0056b3";
        p.style.background = "green";
        let playerTwo = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        if (playerTwo === 1) {
            win();
            r.style.background = "green";
        } else {
            lose()
            s.style.background = "red";
            p.style.background = "red";
        }
    })

    function win() {
        paragrap.textContent = "YOU WIN!!!";
        result.appendChild(paragrap);

    }
    function lose() {
        paragrap.textContent = "YOU LOSE!!!";
        result.appendChild(paragrap);

    }

}

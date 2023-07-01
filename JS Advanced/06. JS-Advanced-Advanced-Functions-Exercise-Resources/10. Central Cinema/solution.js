function solve() {

    const [movieName, hall, ticketPrice] = document.querySelectorAll("#container input");
    const [screenBtn, clearBtn] = document.querySelectorAll("button");
    const movieOnScreen = document.querySelector("#movies ul");
    const archive = document.querySelector("#archive ul");

    const generateLi = () => {

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = movieName.value;
        const strong = document.createElement("strong");
        strong.textContent = `Hall: ${hall.value}`;

        const div = document.createElement("div");
        const strong2 = document.createElement("strong");
        strong2.textContent = Number(ticketPrice.value).toFixed(2);
        const ticketSoldInput = document.createElement("input");
        ticketSoldInput.placeholder = "Tickets Sold";
        const archiveBtn = document.createElement("button");
        archiveBtn.textContent = "Archive";

        div.appendChild(strong2);
        div.appendChild(ticketSoldInput);
        div.appendChild(archiveBtn);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        archiveBtn.addEventListener("click", (e) => {

            if (ticketSoldInput.value === '' || isNaN(Number(ticketSoldInput.value))) {
                return;
            }
            const li2 = document.createElement("li");

            const span2 = document.createElement("span");

            span2.textContent = span.textContent;

            const strong3 = document.createElement("strong");
            strong3.textContent = `Total amount: ${(Number(ticketSoldInput.value) * Number(strong2.textContent)).toFixed(2)}`;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            movieOnScreen.removeChild(li);

            deleteBtn.addEventListener("click", () => {

                archive.removeChild(li2);
            })

            clearBtn.addEventListener("click", () => {
                let getAllLi = document.querySelectorAll("#archive li");
                getAllLi.forEach(x => archive.removeChild(x));

            })

            li2.appendChild(span2);
            li2.appendChild(strong3);
            li2.appendChild(deleteBtn);
            archive.appendChild(li2);
        })

        return li;

    }

    screenBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let isNum = !isNaN(Number(ticketPrice.value));
        if (movieName.value !== "" && hall.value !== "" && isNum && ticketPrice.value !== "") {
            movieOnScreen.appendChild(generateLi())

            movieName.value = "";
            hall.value = "";
            ticketPrice.value = "";
        }

    })

}
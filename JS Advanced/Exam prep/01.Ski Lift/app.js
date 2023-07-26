window.addEventListener('load', solve);

function solve() {
    // const [firstName, LastName, numOfPeople, fDate, days] = document.querySelectorAll("input");

    const nextStepBtn = document.getElementById("next-btn");
    const ticketPrevSpace = document.querySelector("#info-ticket ul");
    const confTicket = document.querySelector("#confirm-ticket-section ul");
    const main = document.getElementById("main");
    const body = document.getElementById("body");


    nextStepBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const fname = document.getElementById('first-name').value;
        const lname = document.getElementById('last-name').value;
        const people = document.getElementById('people-count').value;
        const fromDate = document.getElementById('from-date').value;
        const days = document.getElementById('days-count').value;

        let regex = /^[a-zA-Z]*$/

        let isValidName = regex.test(fname);
        let isValidLName = regex.test(lname);
        let isValidPeople = typeof Number(people) === "number";
        let isValidDays = typeof Number(days) === "number";
        let isValidInput = (fname !== "" && lname !== "" && people !== "" && fromDate !== "" && days !== "");

        // create html structure
        let li = document.createElement("li");
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let editBtn = document.createElement("button");
        let contBtn = document.createElement("button");

        if (isValidName && isValidLName && isValidPeople && isValidDays && isValidInput) {

            li.classList.add('ticket');
            h3.textContent = `Name: ${fname} ${lname}`
            p1.textContent = `From date: ${fromDate}`;
            p2.textContent = `For ${days} days`;
            p3.textContent = `For ${people} people`;
            editBtn.classList.add('edit-btn');
            editBtn.textContent = "Edit";
            contBtn.classList.add('continue-btn');
            contBtn.textContent = "Continue";

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            li.appendChild(article);
            li.appendChild(editBtn);
            li.appendChild(contBtn);

            ticketPrevSpace.appendChild(li);

            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('people-count').value = '';
            document.getElementById('from-date').value = '';
            document.getElementById('days-count').value = '';
            document.getElementById("next-btn").disabled = true;

        }

        editBtn.addEventListener("click", () => {

            document.getElementById("next-btn").disabled = false;

            document.getElementById('first-name').value = fname;
            document.getElementById('last-name').value = lname;
            document.getElementById('people-count').value = people;
            document.getElementById('from-date').value = fromDate;
            document.getElementById('days-count').value = days;

            ticketPrevSpace.removeChild(li);

        });

        contBtn.addEventListener("click", () => {


            let confBtn = document.createElement("button");
            confBtn.classList = "confirm-btn"
            confBtn.textContent = "Confirm";
            let cancelBtn = document.createElement("button");
            cancelBtn.classList = "cancel-btn"
            cancelBtn.textContent = "Cancel";
            li.appendChild(confBtn);
            li.appendChild(cancelBtn);
            li.removeChild(editBtn);
            li.removeChild(contBtn);
            confTicket.appendChild(li);

            cancelBtn.addEventListener("click", () => {

                document.getElementById("next-btn").disabled = false;
                document.getElementById('first-name').value = "";
                document.getElementById('last-name').value = "";
                document.getElementById('people-count').value = "";
                document.getElementById('from-date').value = "";
                document.getElementById('days-count').value = ""

                confTicket.removeChild(li);


            });

            confBtn.addEventListener("click", () => {

                body.removeChild(main);

                const h1 = document.createElement("h1");
                h1.textContent = "Thank you, have a nice day!";
                h1.id = "thank-you";
                body.appendChild(h1);
                const backBtn = document.createElement("button");
                backBtn.id = "back-btn";
                backBtn.textContent = "Back";
                body.appendChild(backBtn);

                backBtn.addEventListener("click", () => {
                    window.location.reload()
                });

            });

        });

    });



}





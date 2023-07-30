window.addEventListener('load', solve);

function solve() {

    const nextBtn = document.getElementById("next-btn");
    const reservationList = document.querySelectorAll("#info-reservations ul");
    const confirmReservation = document.querySelectorAll("#confirm-reservations ul");
    const verification = document.getElementById("verification");

    //buttons
    const editBtn = document.createElement("button");
    const countinueBtn = document.createElement("button");
    const confirmBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    //HTML elements
    const li = document.createElement("li");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const fname = document.getElementById('first-name').value;
        const lname = document.getElementById('last-name').value;
        const inCheck = document.getElementById('date-in').value;
        const outCheck = document.getElementById('date-out').value;
        const guests = document.getElementById('people-count').value;

        const splitInCheck = inCheck.split("-");
        const k = splitInCheck[1] + "-" + splitInCheck[2] + "-" + splitInCheck[0];
        const newDeteOfInCheck = new Date(k);

        const splitOutCheck = outCheck.split("-");
        const kf = splitOutCheck[1] + "-" + splitOutCheck[2] + "-" + splitOutCheck[0];
        const newDeteOutCheck = new Date(kf);

        const regex = /^[a-zA-Z]*$/;

        const isValidName = regex.test(fname);
        const isValidLName = regex.test(lname);
        const isValidDate = newDeteOutCheck > newDeteOfInCheck ? true : false;
        const isValidGuests = typeof Number(guests) === "number";
        const isValidEmptyInput = fname !== "" && lname !== "" && guests !== "";

        if (isValidName && isValidLName && isValidDate && isValidGuests && isValidEmptyInput) {

            li.className = "reservation-content";
            h3.textContent = `Name: ${fname} ${lname}`;
            p1.textContent = `From date: ${inCheck}`
            p2.textContent = `To date: ${outCheck}`;
            p3.textContent = `For ${guests} people`;
            editBtn.className = "edit-btn";
            editBtn.textContent = "Edit";
            countinueBtn.className = "continue-btn";
            countinueBtn.textContent = "Countinue";

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            li.appendChild(article);
            li.appendChild(editBtn);
            li.appendChild(countinueBtn);
            reservationList[0].appendChild(li);

            nextBtn.disabled = true;

            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('date-in').value = '';
            document.getElementById('date-out').value = '';
            document.getElementById('people-count').value = '';

        }

        editBtn.addEventListener("click", () => {

            nextBtn.disabled = false;

            document.getElementById('first-name').value = fname;
            document.getElementById('last-name').value = lname;
            document.getElementById('date-in').value = inCheck;
            document.getElementById('date-out').value = outCheck;
            document.getElementById('people-count').value = guests;

            reservationList[0].removeChild(li);
        });

    });

    countinueBtn.addEventListener("click", () => {


        li.removeChild(editBtn);
        li.removeChild(countinueBtn);
        confirmBtn.className = "confirm-btn";
        confirmBtn.textContent = "Confirm";
        cancelBtn.className = "cancel-btn";
        cancelBtn.textContent = "Cancel";
        li.appendChild(cancelBtn);
        li.appendChild(confirmBtn);
        confirmReservation[0].appendChild(li);

    });

    cancelBtn.addEventListener("click", () => {

        li.removeChild(cancelBtn);
        li.removeChild(confirmBtn);
        nextBtn.disabled = false;

        confirmReservation[0].removeChild(li);

        verification.className = "reservation-cancelled";
        verification.textContent = "Cancelled.";

    });

    confirmBtn.addEventListener("click", () => {

        nextBtn.disabled = false;

        li.removeChild(cancelBtn);
        li.removeChild(confirmBtn);
        confirmReservation[0].removeChild(li);

        verification.className = "reservation-confirmed";
        verification.textContent = "Confirmed.";

    });

}






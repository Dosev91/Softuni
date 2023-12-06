window.addEventListener('load', solve);

function solve() {

    const lastCheck = document.getElementById("check-list");
    const upcomingList = document.getElementById("upcoming-list");
    const finishedList = document.getElementById("finished-list");

    const [time, date, place, name, email] = document.querySelectorAll('form input');

    const addBtn = document.getElementById("add-btn")

    const li = document.createElement("li");
    li.className = "event-content";
    const article = document.createElement("article");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit"
    const continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";
    const moveBtn = document.createElement("button");
    moveBtn.className = "finished-btn";
    moveBtn.textContent = "Move to Finished";
    const clearBtn = document.getElementById("clear");


    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    li.appendChild(article);
    // li.appendChild(editBtn);
    // li.appendChild(continueBtn);

    let safeTime = "";
    let safeDate = "";
    let safePlace = "";
    let safeName = "";
    let safeEmail = "";



    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (
            time.value === "" ||
            date.value === "" ||
            place.value === "" ||
            name.value === "" ||
            email.value === ""
        ) {
            return
        }

        safeTime = time.value;
        safeDate = date.value;
        safePlace = place.value;
        safeName = name.value;
        safeEmail = email.value;


        p1.textContent = `Begins: ${date.value} at: ${time.value}`;
        p2.textContent = `In: ${place.value}`;
        p3.textContent = `Event: ${name.value}`;
        p4.textContent = `Contact: ${email.value}`;

        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        lastCheck.appendChild(li);


        [time, date, place, name, email].forEach((el) => {
            el.value = "";
        });

        addBtn.disabled = true;

    });

    editBtn.addEventListener("click", () => {

        time.value = safeTime;
        date.value = safeDate;
        place.value = safePlace;
        name.value = safeName;
        email.value = safeEmail;

        lastCheck.removeChild(li);

        addBtn.disabled = false;
    });

    continueBtn.addEventListener("click", () => {

        li.removeChild(editBtn);
        li.removeChild(continueBtn);
        lastCheck.removeChild(li);
        li.appendChild(moveBtn);
        upcomingList.appendChild(li);

        addBtn.disabled = false;
    });


    moveBtn.addEventListener("click", () => {

        li.removeChild(moveBtn);
        upcomingList.removeChild(li);
        li.appendChild(clearBtn);
        finishedList.appendChild(li);

    });

    clearBtn.addEventListener("click", () => {

        li.removeChild(clearBtn);
        finishedList.removeChild(li);

    });

}





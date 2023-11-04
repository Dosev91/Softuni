window.addEventListener('load', solve);

function solve() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const contactNum = document.getElementById("contact-number");
    const type = document.getElementById("class-type");
    const time = document.getElementById("class-time");
    const classInfo = document.querySelector(".class-info");
    const confirmClass = document.querySelector(".confirm-class");
    const main = document.getElementById("main");
    const body = document.getElementById("body");

    const nextBtn = document.getElementById("next-btn");

    const hOne = document.createElement("h1");
    hOne.id = "thank-you";
    hOne.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
    const li = document.createElement("li");
    li.className = 'info-item';
    const article = document.createElement("article");
    article.className = "personal-info";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    const continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cancel-btn";
    cancelBtn.textContent = "Cancel";
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "confirm-btn";
    confirmBtn.textContent = "Confirm";
    const doneBtn = document.createElement("button");
    doneBtn.id = "done-btn";
    doneBtn.textContent = "Done";

    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (
            name.value === "" ||
            email.value === "" ||
            contactNum.value === "" ||
            type.value === "" ||
            time.value === ""
        ) {
            return;
        }

        p1.textContent = name.value;
        p2.textContent = email.value;
        p3.textContent = contactNum.value;
        p4.textContent = type.value;
        p5.textContent = time.value;

        classInfo.appendChild(li);

        [name, email, contactNum, type, time]
            .forEach(el => el.value = '');

        nextBtn.disabled = true;

    });

    editBtn.addEventListener("click", () => {

        name.value = p1.textContent;
        email.value = p2.textContent;
        contactNum.value = p3.textContent;
        type.value = p4.textContent;
        time.value = p5.textContent;

        classInfo.removeChild(li);

        nextBtn.disabled = false;
    });

    continueBtn.addEventListener("click", () => {

        classInfo.removeChild(li);

        li.removeChild(editBtn);
        li.removeChild(continueBtn);

        li.appendChild(cancelBtn);
        li.appendChild(confirmBtn);

        confirmClass.appendChild(li);

    });

    cancelBtn.addEventListener("click", () => {

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        li.removeChild(cancelBtn);
        li.removeChild(confirmBtn);

        confirmClass.removeChild(li);

        nextBtn.disabled = false;

    });

    confirmBtn.addEventListener("click", () => {

        body.removeChild(main);
        body.appendChild(hOne);
        body.appendChild(doneBtn);

    });

    doneBtn.addEventListener("click", () => {
        navigation.reload();
    });

}




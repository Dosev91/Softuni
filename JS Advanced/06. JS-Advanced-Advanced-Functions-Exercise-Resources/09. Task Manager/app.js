function solve() {
    const taskInput = document.getElementById("task");
    const descriptionInput = document.getElementById("description");
    const dateInput = document.getElementById("date");
    const addBtn = document.getElementById("add");

    const [
        _,
        openSection,
        inProgressSection,
        completeSection
    ] = document.querySelectorAll("section");

    const generateTaskArticle = () => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const paragraph1 = document.createElement("p");
        const paragraph2 = document.createElement("p");
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("flex");

        // Start btn
        const startBtn = document.createElement("button");
        startBtn.classList.add("green");
        startBtn.textContent = "Start";

        // Delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("red");
        deleteBtn.textContent = "Delete";

        h3.textContent = taskInput.value;
        paragraph1.textContent = descriptionInput.value;
        paragraph2.textContent = dateInput.value;

        article.appendChild(h3);
        article.appendChild(paragraph1);
        article.appendChild(paragraph2);

        btnContainer.appendChild(startBtn);
        btnContainer.appendChild(deleteBtn);

        article.appendChild(btnContainer);

        const handleDelete = () => {
            openSection.removeChild(article);
        }

        deleteBtn.addEventListener('click', handleDelete);

        startBtn.addEventListener("click", () => {
            if (startBtn.textContent === "Start") {
                startBtn.classList.replace("green", "red");
                deleteBtn.classList.replace("red", "orange");
                startBtn.textContent = "Delete";
                deleteBtn.textContent = "Finish";

                openSection.removeChild(article);
                inProgressSection.appendChild(article);

                deleteBtn.removeEventListener('click', handleDelete);

                deleteBtn.addEventListener("click", () => {
                    btnContainer.remove();

                    inProgressSection.removeChild(article);
                    completeSection.appendChild(article);
                })
            } else {
                inProgressSection.removeChild(article);
            }
        })

        return article;
    }

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (!taskInput.value || !descriptionInput.value || !dateInput.value) {
            return
        }
        openSection.appendChild(generateTaskArticle());

        [taskInput, descriptionInput, dateInput].forEach(e => e.value = '');
    })

}

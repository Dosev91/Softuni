window.addEventListener('load', solution);

function solution() {

  const addBtn = document.getElementById("add-btn");

  const employee = document.getElementById("employee");
  const category = document.getElementById("category");
  const urgency = document.getElementById("urgency");
  const assigbed = document.getElementById("team");
  const description = document.getElementById("description");
  const pending = document.getElementsByClassName("pending-list");
  const resloved1 = document.getElementsByClassName("resolved-list");

  const preview = document.querySelector(".preview-list");

  const li = document.createElement("li");
  li.className = "problem-content";
  const article = document.createElement("article");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit"
  const continueBtn = document.createElement("button");
  continueBtn.className = "continue-btn";
  continueBtn.textContent = "Continue";
  const resolved = document.createElement("button");
  resolved.className = "resolve-btn";
  resolved.textContent = "Resloved";
  const clear = document.createElement("button");
  clear.className = "clear-btn";
  clear.textContent = "Clear";

  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(p4);
  article.appendChild(p5);
  li.appendChild(article);


  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      employee.value === "" ||
      category.value === "" ||
      urgency.value === "" ||
      assigbed.value === "" ||
      description.value === ""
    ) {
      return;
    }

    p1.textContent = `From: ${employee.value}`;
    p2.textContent = `Category: ${category.value}`;
    p3.textContent = `Urgency: ${urgency.value}`;
    p4.textContent = `Assigned to: ${assigbed.value}`;
    p5.textContent = `Description: ${description.value}`;

    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    preview.appendChild(li);

    [employee, category, urgency, assigbed, description].forEach((el) => {
      el.value = "";
    });

    addBtn.disabled = true;
  });

  editBtn.addEventListener("click", () => {

    preview.removeChild(li);


    employee.value = p1.textContent.substring(6);
    category.value = p2.textContent.substring(10);
    urgency.value = p3.textContent.substring(9);
    assigbed.value = p4.textContent.substring(13);
    description.value = p5.textContent.substring(13);

    addBtn.disabled = false;
  });

  continueBtn.addEventListener("click", () => {

    preview.removeChild(li);
    li.appendChild(resolved);
    li.removeChild(editBtn);
    li.removeChild(continueBtn);
    pending[0].appendChild(li);

  });

  resolved.addEventListener("click", () => {

    pending[0].removeChild(li);
    li.appendChild(clear);
    li.removeChild(resolved);
    resloved1[0].appendChild(li);

  });

  clear.addEventListener("click", () => {

    li.removeChild(clear);
    resloved1[0].removeChild(li);
    addBtn.disabled = false;

  });

}





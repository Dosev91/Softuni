window.addEventListener("load", solve);

function solve() {
  // get need el 
  const subBtn = document.getElementById("form-btn");
  const inProgres = document.getElementById("in-progress");
  const finished = document.getElementById("finished");
  const count = document.getElementById("progress-count");

  //HTML elements
  const li = document.createElement("li");
  const article = document.createElement("article");
  const h4 = document.createElement("h4");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  //buttons
  const editBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const clearBtn = document.getElementById("clear-btn");

  subBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const fname = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('genderSelect').value;
    const textArea = document.getElementById('task').value;

    const regex = /^[a-zA-Z]*$/;

    const isValidName = regex.test(fname);
    const isValidLName = regex.test(lname);
    const isValidAge = typeof (Number(age)) === "number" && age >= 0;
    const isValidEmptyInput = fname !== "" && lname !== "" && gender !== "" && textArea !== "";

    if (isValidName && isValidLName && isValidAge && isValidEmptyInput) {

      li.className = "each-line";
      h4.textContent = `${fname} ${lname}`;
      p1.textContent = `${gender}, ${age}`
      p2.textContent = `${textArea}`;
      editBtn.className = "edit-btn";
      editBtn.textContent = "Edit";
      completeBtn.className = "complete-btn";
      completeBtn.textContent = "Mark as complete";

      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(completeBtn);
      inProgres.appendChild(li);

      subBtn.disabled = true;

      document.getElementById('first-name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('genderSelect').value = 'Male';
      document.getElementById('task').value = '';

      count.textContent = Number(count.textContent) + 1;

    }
    editBtn.addEventListener("click", () => {

      subBtn.disabled = false;

      document.getElementById('first-name').value = fname;
      document.getElementById('last-name').value = lname;
      document.getElementById('age').value = age;
      document.getElementById('genderSelect').value = gender;
      document.getElementById('task').value = textArea;

      inProgres.removeChild(li);

      count.textContent = Number(count.textContent) - 1;
    });

    completeBtn.addEventListener("click", () => {

      inProgres.removeChild(li);
      li.removeChild(editBtn);
      li.removeChild(completeBtn);
      finished.appendChild(li)

      count.textContent = Number(count.textContent) - 1;

    });
    clearBtn.addEventListener("click", () => {

      finished.removeChild(li);

    });
  });
}

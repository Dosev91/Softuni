window.addEventListener("load", solve);

function solve() {
  //get need HTML elements
  const publishBtn = document.getElementById("form-btn");
  const preview = document.getElementById("preview-list");
  const mainEl = document.getElementById("main");

  // new Buttons
  const saveBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  //create HTML elements 
  const li = document.createElement("li");
  const article = document.createElement("article");
  const h4 = document.createElement("h4");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  h1 = document.createElement("h1");

  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //get input elements
    const fName = document.getElementById("first-name").value;
    const lName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const storyTitle = document.getElementById("story-title").value;
    const genre = document.getElementById("genre").value;
    const myStory = document.getElementById("story").value;

    //verification
    const regex = /^[a-zA-Z]*$/;
    const regex2 = /^[a-zA-Z0-9\s]+$/;

    const isValidFName = regex.test(fName) && fName !== "";
    const isValidLName = regex.test(lName) && lName !== "";
    const isValidAge = typeof Number(age) === "number" && age !== "";
    const isValidGuests = regex2.test(storyTitle) && storyTitle !== "";
    const isValidGenre = genre !== "";
    const isValidStory = myStory !== "";

    if (isValidFName && isValidLName && isValidAge && isValidGuests && isValidGenre && isValidStory) {

      li.className = "story-info";
      h4.textContent = `${fName} ${lName}`;
      p1.textContent = `Age: ${age}`;
      p2.textContent = `Title: ${storyTitle}`;
      p3.textContent = `Genre: ${genre}`;
      p4.textContent = `${myStory}`;
      saveBtn.className = "save-btn";
      saveBtn.textContent = "Save Story"
      editBtn.className = "edit-btn";
      editBtn.textContent = "Edit Story"
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete Story"

      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(p4);
      li.appendChild(article);
      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      preview.appendChild(li);

      publishBtn.disabled = true;

      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("story-title").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("story").value = "";

    }

    editBtn.addEventListener("click", () => {

      preview.removeChild(li);

      publishBtn.disabled = false;

      document.getElementById("first-name").value = fName;
      document.getElementById("last-name").value = lName;
      document.getElementById("age").value = age;
      document.getElementById("story-title").value = storyTitle;
      document.getElementById("genre").value = genre;
      document.getElementById("story").value = myStory;
    })

  });

  saveBtn.addEventListener("click", () => {

    mainEl.replaceChildren();

    h1.textContent = "Your scary story is saved!";
    mainEl.appendChild(h1);

  });

  deleteBtn.addEventListener("click", () => {

    publishBtn.disabled = false;
    preview.removeChild(li);

  });

}

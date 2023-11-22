window.addEventListener("load", solve);

function solve() {

  const titleInput = document.getElementById("post-title");
  const categoryInput = document.getElementById("post-category");
  const comentInput = document.getElementById("post-content");
  const reviewPost = document.getElementById("review-list");
  const publishList = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");

  const publishBtn = document.getElementById("publish-btn");
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "action-btn edit";
  const approveBtn = document.createElement("button");
  approveBtn.textContent = "Approve";
  approveBtn.className = "action-btn approve";


  const articleEl = document.createElement("article");
  const h4El = document.createElement("h4");
  const p1El = document.createElement("p");
  const p2El = document.createElement("p");

  articleEl.appendChild(h4El);
  articleEl.appendChild(p1El);
  articleEl.appendChild(p2El);

  publishBtn.addEventListener("click", () => {

    if (
      titleInput.value === "" ||
      categoryInput.value === "" ||
      comentInput.value === ""
    ) {
      return
    }

    h4El.textContent = titleInput.value;
    p1El.textContent = `Category: ${categoryInput.value}`;
    p2El.textContent = `Content: ${comentInput.value}`;

    reviewPost.appendChild(articleEl);
    reviewPost.appendChild(editBtn);
    reviewPost.appendChild(approveBtn);

    [titleInput, categoryInput, comentInput].forEach((el) => {
      el.value = ""
    });

  });

  editBtn.addEventListener("click", () => {

    reviewPost.removeChild(articleEl);
    reviewPost.removeChild(editBtn);
    reviewPost.removeChild(approveBtn);

    titleInput.value = h4El.textContent;
    categoryInput.value = p1El.textContent.substring(10);
    comentInput.value = p2El.textContent.substring(9);

  });

  approveBtn.addEventListener("click", () => {

    reviewPost.removeChild(articleEl);
    reviewPost.removeChild(editBtn);
    reviewPost.removeChild(approveBtn);

    publishList.appendChild(articleEl);


  });

  clearBtn.addEventListener("click", () => {

    publishList.removeChild(articleEl);

  });

}

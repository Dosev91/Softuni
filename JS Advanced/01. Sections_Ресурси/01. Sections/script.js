
function create(words) {
   let contendDiv = document.getElementById('content');


   for (const text of words) {

      let div = document.createElement("div");
      let paragraph = document.createElement("p");

      paragraph.textContent = text;
      paragraph.style.display = "none";

      div.appendChild(paragraph);
      div.addEventListener("click", reveal);

      contendDiv.appendChild(div);
   }

   function reveal(e) {
      // console.log('a');
      e.currentTarget.children[0].style.display = "block";
   }
}


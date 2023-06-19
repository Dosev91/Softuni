function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const targetElements = document.querySelectorAll('tbody tr td');
   const textInput = document.querySelector('#searchField')

   function onClick() {
      cleanSelected();
      
      const searchTerm = textInput.value;
      
      const matchElements = Array.from(targetElements).filter((e) => e.innerText.includes(searchTerm));
      
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      matchElements.forEach((e) => e.parentElement.classList.add('select'));
      
      clearInput();
   }

   function cleanSelected() {
      Array.from(document.getElementsByClassName('select')).forEach((e) => e.classList.remove('select'));
   }
   function clearInput() {
      textInput.value = '';
   }
}
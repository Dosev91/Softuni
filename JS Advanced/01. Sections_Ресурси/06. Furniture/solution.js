function solve() {

  const [inputArea, resultArea] = document.querySelectorAll("#exercise textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("#exercise button");

  generateBtn.addEventListener("click", () => {

    const furnitureInput = JSON.parse(inputArea.value);

    furnitureInput.forEach((fo) => {
      const row = getTr();

      const appendElementToRow = (element) => {
        const elementTd = getTd();

        elementTd.appendChild(element);

        row.appendChild(elementTd);
      }

      // Img
      const img = document.createElement("img");
      img.src = fo.img;

      appendElementToRow(img);

      // Name paragraph
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = fo.name;

      appendElementToRow(nameParagraph);

      // Price paragraph
      const priceParagraph = document.createElement("p");
      priceParagraph.textContent = fo.price;

      appendElementToRow(priceParagraph);

      // decFactor paragraph
      const decFactorParagraph = document.createElement("p");
      decFactorParagraph.textContent = fo.decFactor;

      appendElementToRow(decFactorParagraph);

      // mark Input 
      const markInput = document.createElement("input")
      markInput.type = "checkbox";

      appendElementToRow(markInput);

      document.getElementsByTagName('tbody')[0].appendChild(row);
    });

    inputArea.value = '';
  });

  buyBtn.addEventListener("click", () => {
    const markedInputs = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));

    let nameFurniture = [];
    let totalPrice = 0;
    const allFactors = [];

    markedInputs.forEach((el) => {
      const markedRow = el.parentElement.parentElement;

      const [
        _,
        nameTd,
        priceTd,
        factorTd
      ] = Array.from(markedRow.children);

      nameFurniture.push(nameTd.textContent);
      totalPrice += +priceTd.textContent;
      allFactors.push(+factorTd.textContent);
    })

    let resulAllFactors = allFactors.reduce((sum, x) => sum + x, 0) / allFactors.length;

    resultArea.value = `Bought furniture: ${nameFurniture.join(', ')}\r\nTotal price: ${totalPrice.toFixed(2)}\r\nAverage decoration factor: ${resulAllFactors}`;
  })

  function getTd() {
    return document.createElement("td");
  }

  function getTr() {
    return document.createElement("tr");
  }

}


/*
[{
  "name": "Sofa",
  "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/
grey- 3 - seater - sofa - bed - 200 - 13 - 0 - 175521_9.jpg",
 "price": 150,
  "decFactor": 1.2
}]
**/

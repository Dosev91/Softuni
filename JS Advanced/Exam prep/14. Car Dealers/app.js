window.addEventListener("load", solve);

function solve() {

  const tableBody = document.getElementById("table-body");
  const carsList = document.getElementById("cars-list");
  const profitMade = document.getElementById("profit");
  let profit = 0;

  // buttons 
  const publishBtn = document.getElementById("publish");
  const editBtn = document.createElement("button");
  const sellBtn = document.createElement('button');

  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const trElement = document.createElement("tr");
    const td1Element = document.createElement("td");
    const td2Element = document.createElement("td");
    const td3Element = document.createElement("td");
    const td4Element = document.createElement("td");
    const td5Element = document.createElement("td");
    const td6Element = document.createElement("td");
    const td7Element = document.createElement("td");

    const make = document.getElementById('make').value
    const model = document.getElementById('model').value
    const year = document.getElementById('year').value
    const fuel = document.getElementById("fuel").value;
    const cost = document.getElementById('original-cost').value
    const price = document.getElementById('selling-price').value

    const regex = /^[a-zA-Z0-9]*$/;

    const isValidMake = regex.test(make);
    const isValidModel = regex.test(model);
    const isValidPrice = price >= cost;
    const isValidEmpty = make !== "" && model !== "" && year !== "" && cost !== "" && price !== "";

    if (isValidEmpty && isValidMake && isValidModel && isValidPrice) {

      trElement.className = 'row';
      td1Element.textContent = make;
      td2Element.textContent = model;
      td3Element.textContent = year;
      td4Element.textContent = fuel;
      td5Element.textContent = cost;
      td6Element.textContent = price;
      editBtn.className = "action-btn edit";
      editBtn.textContent = "Edit";
      sellBtn.className = "action-btn sell";
      sellBtn.textContent = "Sell";

      td7Element.appendChild(editBtn);
      td7Element.appendChild(sellBtn);
      trElement.appendChild(td1Element);
      trElement.appendChild(td2Element);
      trElement.appendChild(td3Element);
      trElement.appendChild(td4Element);
      trElement.appendChild(td5Element);
      trElement.appendChild(td6Element);
      trElement.appendChild(td7Element);

      tableBody.appendChild(trElement);

      document.getElementById('make').value = '';
      document.getElementById('model').value = '';
      document.getElementById('year').value = 2017;
      document.getElementById('fuel').value = 'petrol';
      document.getElementById('original-cost').value = '';
      document.getElementById('selling-price').value = '';
    }
    editBtn.addEventListener("click", () => {

      tableBody.removeChild(trElement);

      document.getElementById('make').value = make;
      document.getElementById('model').value = model;
      document.getElementById('year').value = year;
      document.getElementById('fuel').value = fuel;
      document.getElementById('original-cost').value = cost;
      document.getElementById('selling-price').value = price;

    });
  });

  sellBtn.addEventListener("click", () => {

    const trRemove = document.querySelector(".row");
    const [make1, model1, year1, fuel1, cost1, price1] = document.querySelectorAll(".row td");

    const liElement = document.createElement("li");
    const span1Element = document.createElement("span");
    const span2Element = document.createElement("span");
    const span3Element = document.createElement("span");

    span1Element.textContent = `${make1.textContent} ${model1.textContent}`;
    span2Element.textContent = `${year1.textContent}`;
    span3Element.textContent = `${price1.textContent - cost1.textContent}`;

    profit += price1.textContent - cost1.textContent;

    tableBody.removeChild(trRemove);

    liElement.className = "each-list";
    liElement.appendChild(span1Element);
    liElement.appendChild(span2Element);
    liElement.appendChild(span3Element);
    carsList.appendChild(liElement);

    profitMade.textContent = `${profit}`;
  });

}

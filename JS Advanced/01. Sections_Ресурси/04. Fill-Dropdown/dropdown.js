function addItem() {
    const textInput = document.getElementById("newItemText");
    const valueInput = document.getElementById("newItemValue");

    const menu = document.getElementById("menu");

    const option = document.createElement("option")
    option.value = valueInput.value;
    option.textContent = textInput.value;
    menu.appendChild(option);

    textInput.value = "";
    valueInput.value = "";
}
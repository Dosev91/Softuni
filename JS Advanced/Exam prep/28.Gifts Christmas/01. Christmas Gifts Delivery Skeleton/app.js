function solution() {
    const listSection = document.getElementsByClassName('card');
    const ulList = listSection[1].querySelector('ul');
    const sendGift = listSection[2].querySelector('ul');
    const dscardGift = listSection[3].querySelector('ul');
    const input = listSection[0].querySelector('input');

    const addBtn1 = listSection[0].querySelector('button');

    addBtn1.addEventListener("click", () => {
        const newLi = document.createElement("li");
        newLi.className = "gift";
        newLi.textContent = input.value;

        const sendBtn = document.createElement("button");
        sendBtn.textContent = "Send";
        sendBtn.className = "sendButton";

        const discardBtn = document.createElement("button");
        discardBtn.textContent = "Discard";
        discardBtn.className = "discardButton";

        sendBtn.addEventListener("click", () => {
            const li = document.createElement("li");
            li.className = "gift";
            newLi.removeChild(sendBtn);
            newLi.removeChild(discardBtn);
            li.textContent = newLi.textContent;

            sendGift.appendChild(li);
            ulList.removeChild(newLi);
        });
        discardBtn.addEventListener("click", () => {
            const li = document.createElement("li");
            li.className = "gift";
            newLi.removeChild(sendBtn);
            newLi.removeChild(discardBtn);
            li.textContent = newLi.textContent;

            dscardGift.appendChild(li);
            ulList.removeChild(newLi);
        });

        newLi.appendChild(sendBtn);
        newLi.appendChild(discardBtn);
        ulList.appendChild(newLi);

        input.value = "";
    });
}

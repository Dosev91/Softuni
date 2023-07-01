window.addEventListener('load', solve)

function solve() {
	const [
		carModel,
		carYear,
		partName,
		partNumber,
		conditionSelect
	] = document.querySelectorAll('input, select');

	const nextBtn = document.getElementById("next-btn");

	const partInfoList = document.querySelector(".info-list");

	const completeImg = document.getElementById("complete-img");

	const completeText = document.getElementById("complete-text");

	const confirmOrder = document.querySelector(".confirm-list");

	const img = document.getElementById("complete-img");

	const imgText = document.getElementById("complete-text")

	nextBtn.addEventListener("click", (e) => {
		e.preventDefault();

		if (
			carModel.value === "" ||
			carYear.value === "" ||
			isNaN(carYear.value) ||
			Number(carYear.value) < 1980 ||
			Number(carYear.value) > 2023 ||
			partName.value === "" ||
			isNaN(partNumber.value) ||
			partNumber.value === "" ||
			conditionSelect.value === ""
		) {
			return;
		}

		const listItem = document.createElement("li");

		const article = document.createElement("article");

		const modelP = document.createElement("p");
		const yearP = document.createElement("p");
		const nameP = document.createElement("p");
		const numberP = document.createElement("p");
		const conditionP = document.createElement("p");

		const editBttn = document.createElement("button");
		const continueBtn = document.createElement("button");

		listItem.classList.add("part-content");
		editBttn.classList.add("edit-btn");
		continueBtn.classList.add("continue-btn");

		let carsModels = carModel.value;
		let year = carYear.value;
		let nameParts = partName.value;
		let numbersParts = partNumber.value;
		let conditionParts = conditionSelect.value;

		modelP.textContent = `Car Model: ${carsModels}`;
		yearP.textContent = `Car Year: ${year}`;
		nameP.textContent = `Part Name: ${nameParts}`;
		numberP.textContent = `Part Number: ${numbersParts}`;
		conditionP.textContent = `Condition: ${conditionParts}`;

		editBttn.textContent = "Edit";
		continueBtn.textContent = "Continue";

		article.appendChild(modelP);
		article.appendChild(yearP);
		article.appendChild(nameP);
		article.appendChild(numberP);
		article.appendChild(conditionP);

		listItem.appendChild(article);
		listItem.appendChild(editBttn);
		listItem.appendChild(continueBtn);

		partInfoList.appendChild(listItem);

		carModel.value = '';
		carYear.value = '';
		partName.value = '';
		partNumber.value = '';
		conditionSelect.value = '';

		completeImg.style.visibility = "hidden";

		completeText.textContent = "";

		nextBtn.disabled = true;

		editBttn.addEventListener("click", () => {

			carModel.value = carsModels;
			carYear.value = year;
			partName.value = nameParts;
			partNumber.value = numbersParts;
			conditionSelect.value = conditionParts;

			nextBtn.disabled = false;

			partInfoList.removeChild(listItem);
		})

		continueBtn.addEventListener("click", () => {

			editBttn.remove();
			continueBtn.remove();

			modelP.textContent = `Car Model: ${carsModels}`;
			yearP.textContent = `Car Year: ${year}`;
			nameP.textContent = `Part Name: ${nameParts}`;
			numberP.textContent = `Part Number: ${numbersParts}`;
			conditionP.textContent = `Condition: ${conditionParts}`;

			const confirmBtn = document.createElement("button");
			const cancelBtn = document.createElement("button");

			confirmBtn.textContent = "Confirm";
			cancelBtn.textContent = "Cancel";

			article.appendChild(modelP);
			article.appendChild(yearP);
			article.appendChild(nameP);
			article.appendChild(numberP);
			article.appendChild(conditionP);

			listItem.appendChild(article);
			listItem.appendChild(confirmBtn);
			listItem.appendChild(cancelBtn);

			confirmOrder.appendChild(listItem);

			confirmBtn.addEventListener("click", () => {

				nextBtn.disabled = false;
				confirmOrder.removeChild(listItem);

				img.style.visibility = "visible";
				imgText.textContent = "Part is Ordered!";

			})

			cancelBtn.addEventListener("click", () => {

				confirmOrder.removeChild(listItem);
				nextBtn.disabled = false;

			})

		})



	})
}





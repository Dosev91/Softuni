function attachEventsListeners() {

    const tableInfo = {
        km: Number(1000),
        m: Number(1),
        cm: Number(0.01),
        mm: Number(0.001),
        mi: Number(1609.34),
        yrd: Number(0.9144),
        ft: Number(0.3048),
        in: Number(0.0254),
    }

    let btn = document.getElementById("convert");
    let outPut = document.getElementById("outputDistance");

    btn.addEventListener("click", () => {

        let inputType = Number(document.getElementById("inputDistance").value);

        const dropdown = document.getElementById("inputUnits");
        const selectedIndex = dropdown.selectedIndex;
        const selectedOption = dropdown.options[selectedIndex].value;

        const dropdown2 = document.getElementById("outputUnits");
        const selectedIndex2 = dropdown2.selectedIndex;
        const selectedOption2 = dropdown2.options[selectedIndex2].value;

        let sum1 = inputType * tableInfo[selectedOption];
        let sum2 = sum1 / tableInfo[selectedOption2];

        outPut.value = sum2;
    })

}
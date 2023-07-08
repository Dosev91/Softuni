function validate() {
    const inputs = document.querySelectorAll("input");
    const validationWindow = document.getElementById("valid");
    const subBtn = document.getElementById("submit");
    const companyInfo = document.getElementById("companyInfo");

    const [
        userName,
        email,
        password,
        confirmPassword,
        company,
        companyNumber
    ] = inputs;

    company.addEventListener("change", (e) => {
        if (company.checked) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }
    })

    subBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const regexForName = /^[a-zA-Z0-9]+$/;
        if (userName.value.length < 3 || userName.value.length > 20 || !regexForName.test(userName.value)) {
            userName.style.border = "2px solid red";
        } else {
            userName.style.border = "none";
        }

        const regexForEmail = /^.+@.*\..+$/;
        if (!regexForEmail.test(email.value)) {
            email.style.border = "2px solid red";
        } else {
            email.style.border = "none";
        }

        const regexForPass = /^[A-z0-9\_]+$/;
        if (password.value.length < 5 || password.value.length > 15 || !regexForPass.test(password.value)) {
            password.style.border = "2px solid red";
        } else {
            password.style.border = "none";
        }

        if (confirmPassword.value !== password.value || password.style.border === "2px solid red") {
            confirmPassword.style.border = "2px solid red";
        } else {
            confirmPassword.style.border = "none";
        }

        if (company.checked) {
            if (+companyNumber.value < 1000 || +companyNumber.value > 9999) {
                companyNumber.style.border = "2px solid red";
            } else {
                companyNumber.style.border = "none";
            }
        } else {
            companyNumber.style.border = "none";
        }

        const hasInvalid = Array.from(inputs).some((input) => input.style.border === '2px solid red');
        
        validationWindow.style.display = hasInvalid ? 'none' : 'block';

        // const allInfo = document.querySelectorAll("input");

        // let allValid = true;

        // for (const key of allInfo) {
        //     if (key.style.border === "2px solid red") {
        //         allValid = false;
        //     }
        // }
        // if (allValid) {
        //     validationWindow.style.display = "block";
        // } else {
        //     validationWindow.style.display = "none";
        // }
    });

}



function lockedProfile() {
    const profil1 = document.getElementById("user1HiddenFields");
    const profil2 = document.getElementById("user2HiddenFields");
    const profil3 = document.getElementById("user3HiddenFields");

    const profil1Button = profil1.nextElementSibling;
    const profil2Button = profil2.nextElementSibling;
    const profil3Button = profil3.nextElementSibling;

    profil1Button.addEventListener("click", toggle);
    profil2Button.addEventListener("click", toggle);
    profil3Button.addEventListener("click", toggle);

    const profil1Locked = document.querySelector(`input[name='user1Locked']`);
    const profil2Locked = document.querySelector(`input[name='user2Locked']`);
    const profil3Locked = document.querySelector(`input[name='user3Locked']`);

    function toggle(e) {
        const target = e.target;

        // Info is showed
        if (target.textContent === "Hide it") {
            if (target.previousElementSibling === profil1) {
                if (!profil1Locked.checked) {
                    target.previousElementSibling.style.display = "none";
                    target.textContent = "Show more"
                }
            } else if (target.previousElementSibling === profil2) {
                if (!profil2Locked.checked) {
                    target.previousElementSibling.style.display = "none";
                    target.textContent = "Show more"
                }
            } else {
                if (!profil3Locked.checked) {
                    target.previousElementSibling.style.display = "none";
                    target.textContent = "Show more"
                }
            }

        } else { // Info is hidden
            if (target.previousElementSibling === profil1) {
                if (!profil1Locked.checked) {
                    target.previousElementSibling.style.display = "block";
                    target.textContent = "Hide it"
                }
            } else if (target.previousElementSibling === profil2) {
                if (!profil2Locked.checked) {
                    target.previousElementSibling.style.display = "block";
                    target.textContent = "Hide it"
                }
            } else {
                if (!profil3Locked.checked) {
                    target.previousElementSibling.style.display = "block";
                    target.textContent = "Hide it"
                }
            }
        }
    }
}
function attachEventsListeners() {

    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let daysBtn = document.getElementById("daysBtn");
    daysBtn.addEventListener("click", convertDays);

    let hoursBtn = document.getElementById("hoursBtn");
    hoursBtn.addEventListener("click", converthours);

    let minutesBtn = document.getElementById("minutesBtn");
    minutesBtn.addEventListener("click", convertminutes)

    let secondsBtn = document.getElementById("secondsBtn");
    secondsBtn.addEventListener("click", convertseconds);

    function convertDays(e) {
        console.log(e.target.value)

        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    }
    function converthours(e) {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
    }
    function convertminutes(e) {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    }
    function convertseconds(e) {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
    }
}
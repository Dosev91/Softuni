function notify(message) {
  console.log('todo')
  const showDiv = document.getElementById("notification");
  showDiv.textContent = message;
  showDiv.style.display = "block";

  showDiv.addEventListener("click", () => {
    showDiv.style.display = "none";
  });
}
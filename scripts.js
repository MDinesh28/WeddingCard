document
  .getElementById("name-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const guestName = document.getElementById("guest-name").value;
    document.getElementById("guest-name-display").innerText = guestName;
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
  });

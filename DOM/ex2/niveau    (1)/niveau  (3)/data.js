const boutons = document.querySelectorAll(".btn");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", (event) => {
    event.target.textContent = "tu a clicker";
  });
});
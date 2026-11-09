const bouton = document.querySelector("#btn");

bouton.addEventListener("click", (event) => {
  event.target.textContent = "C'est cliqué !";
});
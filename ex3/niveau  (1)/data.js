const texte = document.querySelector("#text");
const bouton = document.querySelector("#style-btn");

bouton.addEventListener("click", () => {
  texte.style.color = "red";
  texte.style.fontSize = "25px";
});
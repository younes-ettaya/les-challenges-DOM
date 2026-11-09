const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

const parent = document.querySelector(".user-card");

const NOM = parent.querySelector(".card-title");
const Email = parent.querySelector(".card-email");
const Role = parent.querySelector(".card-role");

NOM.textContent = user.nom;
Email.textContent = user.email;
Role.textContent = user.role;
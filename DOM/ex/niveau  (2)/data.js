const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

const NOM = document.getElementById("user-name");
NOM.textContent= user.nom;
const Email = document.getElementById("user-email")
Email.textContent= user.email;
const Role = document.getElementById("user-role");
Role.textContent= user.role;
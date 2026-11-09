const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];


const userCard = document.querySelectorAll(".card");


userCard.forEach(function (card) {
    for (let i = 0; i < users.length; i++){
        if (users[i].id === Number(card.dataset.userId)){
            const cardName = card.querySelector(".card-title");
            const cardEmail = card.querySelector(".card-email");
            const cardRole = card.querySelector(".card-role");
            cardName.textContent = users[i].nom;
            cardEmail.textContent = users[i].email;
            cardRole.textContent = users[i].role;
            break;
        }
    }
});
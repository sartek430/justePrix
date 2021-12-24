// Etape 1 - Sélectionner nos éléments
let input = document.getElementById("prix");
let error = document.querySelector("small");
let formulaire = document.getElementById("formulaire");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  console.log(input.value);
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", () => {
  if (isNaN(input.value) || input.value == "") {
    formulaire.style.border = "2px solid red";
  } else {
    coups++;
    formulaire.style.border = "2px solid silver";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
});

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {}

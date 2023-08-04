function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// FERMETURE DE LA MODALE
const btnFermeture = document.querySelector(".close");

function fermetureModale() {
  modalbg.style.display = "none";
  //Reset des champs du formulaire
  champPrenom.value = "";
  champNom.value = "";
  champMail.value = "";
  champNaissance.value = "";
  champNbrDeTournois.value = "";
  jaiLu.removeAttribute("checked");

  //Retrait de radio coché a la fermeture de la modale
  const radios = document.querySelectorAll('input[name="location"]');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
    }
  }
  //Retrait msg d'erreur a la fermeture de la modale
  const champError = document.querySelectorAll(".formData");
  for (let i = 0; i < champError.length; i++) {
    champError[i].dataset.error = "";
    champError[i].dataset.errorVisible = false;
  }
  //Retrait du message de confirmation a la fermeture de la modale
  document.querySelector(".msgConfirmation").innerHTML = "";
}
btnFermeture.addEventListener("click", fermetureModale);

//IMPLEMENTER LES ENTRÉES DU FORMULAIRE
//Récuperation des champs de saisies et du boutton de validation

const form = document.querySelector("form");
const btnValidation = document.querySelector(".btn-submit");

const champPrenom = document.querySelector("#first");

const champNom = document.querySelector("#last");

const champMail = document.querySelector("#email"); //au cas ou le visiteur met un espace avant d'ecrire)

const champNaissance = document.querySelector("#birthdate");

const champNbrDeTournois = document.querySelector("#quantity");

let listeRadios = document.querySelectorAll('input[name="location"]');

const jaiLu = document.getElementById("checkbox1");
const jeSouhaite = document.querySelector("#checkbox2");

//Message d'erreur
const errorLastName = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
const errorFirstName =
  "Veuillez entrer 2 caractères ou plus pour le champ prenom.";
const errorEmail = "Vous devez entrer une adresse email valide.";
const errorBirthdate = "Veuillez entrer une date de naissance valide.";
const errorNbrDeTournois = "Veuillez entrer un nombre valide.";
const errorLocationTournois = "Veuillez choisir une ville.";
const errorConditionU = "Veuillez accepter les conditions d'utilisations.";

//liste des DIV .formData
const listeFormData = document.querySelectorAll(".formData");

//Fonctions
function validatePrenom() {
  const prenom = champPrenom.value;

  if (prenom.length < 2 || prenom.trim() === "") {
    // Afficher le message d'erreur en utilisant les attributs de données
    listeFormData[0].dataset.error = errorFirstName;
    listeFormData[0].dataset.errorVisible = true;
    return false;
  }

  // Le champ est valide, réinitialiser les attributs de données
  listeFormData[0].dataset.error = "";
  listeFormData[0].dataset.errorVisible = false;
  return true;
}

function validateNom() {
  const nom = champNom.value;

  if (nom.length < 2 || nom.trim() === "") {
    // Afficher le message d'erreur en utilisant les attributs de données
    listeFormData[1].dataset.error = errorLastName;
    listeFormData[1].dataset.errorVisible = true;
    return false;
  }

  // Le champ est valide, réinitialiser les attributs de données
  listeFormData[1].dataset.error = "";
  listeFormData[1].dataset.errorVisible = false;
  return true;
}

function validateMail() {
  const mail = champMail.value.trim();
  // Expression régulière pour valider l'adresse électronique
  let emailRegex = new RegExp(
    "[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  );

  if (!emailRegex.test(mail)) {
    // Afficher le message d'erreur en utilisant les attributs de données
    listeFormData[2].dataset.error = errorEmail;
    listeFormData[2].dataset.errorVisible = true;
    return false;
  }

  // Le champ est valide, réinitialiser les attributs de données
  listeFormData[2].dataset.error = "";
  listeFormData[2].dataset.errorVisible = false;
  return true;
}

function validateBirthDate() {
  const naissance = champNaissance.value;

  if (isNaN(Date.parse(naissance))) {
    listeFormData[3].dataset.error = errorBirthdate;
    listeFormData[3].dataset.errorVisible = true;
    return false;
  } else {
    listeFormData[3].dataset.error = "";
    listeFormData[3].dataset.errorVisible = false;
    return true;
  }
}

function validateNbrTournois() {
  const nbrDeTournois = champNbrDeTournois.value.trim();
  // Expression régulière pour vérifier si la valeur est numérique
  const numericRegex = new RegExp("^[0-9]+$");

  if (!numericRegex.test(nbrDeTournois)) {
    // Afficher le message d'erreur en utilisant les attributs de données
    listeFormData[4].dataset.error = errorNbrDeTournois;
    listeFormData[4].dataset.errorVisible = true;
    return false;
  }

  // Le champ est valide, réinitialiser les attributs de données
  listeFormData[4].dataset.error = "";
  listeFormData[4].dataset.errorVisible = false;
  return true;
}

function validateUneRadio() {
  if (document.querySelectorAll('input[name="location"]:checked').length > 0) {
    // Au moins une radio est cochée, réinitialiser les attributs de données
    listeFormData[5].dataset.error = "";
    listeFormData[5].dataset.errorVisible = false;
    return true;
  } else {
    // Afficher le message d'erreur en utilisant les attributs de données
    listeFormData[5].dataset.error = errorLocationTournois;
    listeFormData[5].dataset.errorVisible = true;
    return false;
  }
}

function condiGeChecked() {
  if (!jaiLu.checked) {
    // Afficher le message d'erreur en utilisant les attributs de données
    listeFormData[6].dataset.error = errorConditionU;
    listeFormData[6].dataset.errorVisible = true;
    return false;
  } else {
    listeFormData[6].dataset.error = "";
    listeFormData[6].dataset.errorVisible = false;
    return true;
  }
}

champNom.addEventListener("change", validateNom);

champPrenom.addEventListener("change", validatePrenom);

champMail.addEventListener("change", validateMail);

champNaissance.addEventListener("change", validateBirthDate);

champNbrDeTournois.addEventListener("change", validateNbrTournois);

//listeRadios.addEventListener("change", validateUneRadio);

jaiLu.addEventListener("change", condiGeChecked);

//Message de confirmation
function ouverturMsgConf() {
  const modalMsgConfirmation = document.querySelector(".msgConfirmation");
  modalMsgConfirmation.style.display = "block";
}

//traitement de l'evenement submit du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    validatePrenom() &&
    validateNom() &&
    validateMail() &&
    validateBirthDate() &&
    validateNbrTournois() &&
    validateUneRadio() &&
    condiGeChecked()
  ) {
    ouverturMsgConf();
  }
});

// const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const workDay = week.filter(function(element, index) {
//   return (index > 0 && index < 6);
// })

// console.log(workDay);

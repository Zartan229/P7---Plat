import { updateRecipes } from './loop.js';
import { tag, displayTags } from './tags.js';


function displayIngredients(filteredRecipes) {
  const listIngredient = document.querySelector(".listIngredient");

  // Effacer les ingrédients existants
  listIngredient.innerHTML = "";

  // Créer un élément ul pour stocker la liste des ingrédients
  const ulElement = document.createElement("ul");

  // Créer un SET pour stocker les ingrédients uniques
  const uniqueIngredients = new Set();

  // Itérer à travers les recettes affichées pour collecter les ingrédients uniques
  filteredRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!tag.includes(ingredient.ingredient.toLowerCase())) {
        // Vérifier si l'ingrédient n'est pas déjà dans les tags
        uniqueIngredients.add(ingredient.ingredient.toLowerCase());
      }
    });
  });

  // Convertir les Set en tableau et le trier par ordre alphabétique
  const sortedIngredients = [...uniqueIngredients].sort();

  // Afficher les ingrédients dans la div listIngredient en tant qu'éléments de liste
  sortedIngredients.forEach((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;

    // Ajouter un écouteur d'événements de clic à chaque élément li
    liElement.addEventListener("click", function () {
      // Lorsqu'un élément li est cliqué, ajoutez son contenu au tableau de balises
      tag.push(ingredient);
      displayTags();
      const tagInputIngr = document.querySelector(".tagInputIngrédients");
      const spanElement = document.createElement("span");
      spanElement.textContent = ingredient;
      tagInputIngr.appendChild(spanElement);
      // Supprimer l'ingrédient de la liste affichée
      this.remove();
    });

    ulElement.appendChild(liElement);
  });

  // Ajouter l'élément ul à la div listIngredient
  listIngredient.appendChild(ulElement);

  // Retourner sortedIngredients pour une utilisation ultérieure
  return sortedIngredients;
}

// Fonction pour filtrer les ingrédients en fonction du terme de recherche et des recettes actuellement affichées
function filterIngredients(searchTerm, filteredRecipes) {
  const listIngredient = document.querySelector(".listIngredient");
  const ulElement = document.createElement("ul");
  const uniqueIngredients = new Set();

  // Itérer à travers les recettes affichées pour collecter les ingrédients uniques
  filteredRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient.toLowerCase().includes(searchTerm)) {
        if (!tag.includes(ingredient.ingredient.toLowerCase())) {
          // Vérifie si l'ingrédient n'est pas déjà dans les tags
          uniqueIngredients.add(ingredient.ingredient.toLowerCase());
        }
      }
    });
  });

  // Afficher les ingrédients filtrés dans la div listIngredient en tant qu'éléments de liste
  uniqueIngredients.forEach((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;

    // Ajouter un écouteur d'événements de clic à chaque ingrédient filtré
    liElement.addEventListener("click", function () {
      // Lorsqu'un ingrédient filtré est cliqué, ajoutez-le au tableau de balises
      tag.push(ingredient);
      displayTags();

      // Supprime l'élément de la liste des ingrédients
      this.remove();
    });

    ulElement.appendChild(liElement);
  });

  listIngredient.innerHTML = "";
  listIngredient.appendChild(ulElement);
}

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour afficher le menu déroulant
  function toggleDropdown(toggleId, contentClass) {
    var toggleElement = document.getElementById(toggleId);
    var contentElement = document.querySelector("." + contentClass);

    toggleElement.addEventListener("click", function (event) {
      event.stopPropagation(); // Arrêter la propagation de l'événement de clic vers le document
      // Basculer l'affichage du contenu du menu déroulant
      contentElement.style.display = contentElement.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
      if (!contentElement.contains(event.target)) {
        // Fermer le menu déroulant s'il est ouvert
        contentElement.style.display = "none";
      }
    });
  }

  // Inclus les menus déroulants
  toggleDropdown("ingDropdownToggle", "dropdownIngContent");
  toggleDropdown("ustDropdownToggle", "dropdownUstContent");
  toggleDropdown("appDropdownToggle", "dropdownAppContent");
});

// Fonction pour afficher les ustensiles uniques dans la div listUst
function displayUstensils(filteredRecipes) {
  const listUst = document.querySelector(".listUst");

  // Effacer les ustensiles existants
  listUst.innerHTML = "";

  // Créer un élément ul pour stocker la liste des ustensiles
  const ulElement = document.createElement("ul");

  // Créer un SET pour stocker les ustensiles uniques
  const uniqueUstensils = new Set();

  // Itérer à travers les recettes affichées pour collecter les ustensiles uniques
  filteredRecipes.forEach((recipe) => {
    recipe.ustensils.forEach((utensil) => {
      if (!tag.includes(utensil.toLowerCase())) {
        // Vérifier si l'ustensile n'est pas déjà dans les tags
        uniqueUstensils.add(utensil.toLowerCase());
      }
    });
  });

  // Convertir les Set en tableau et le trier par ordre alphabétique
  const sortedUstensils = [...uniqueUstensils].sort();

  // Afficher les ustensiles filtrés dans la div listUst en tant qu'éléments de liste
  uniqueUstensils.forEach((utensil) => {
    const liElement = document.createElement("li");
    liElement.textContent = utensil;

    // Ajouter un écouteur d'événements de clic à chaque ustensile filtré
    liElement.addEventListener("click", function () {
      // Lorsqu'un ustensile filtré est cliqué, ajoutez-le au tableau de balises
      tag.push(utensil);
      displayTags();
      const tagInputUst = document.querySelector(".tagInputUstensiles");
      const spanElement = document.createElement("span");
      spanElement.textContent = utensil;
      tagInputUst.appendChild(spanElement);
      this.remove();
    });

    ulElement.appendChild(liElement);
  });

  // Ajouter l'élément ul à la div listUst
  listUst.appendChild(ulElement);

  // Retourner sortedUstensils pour une utilisation ultérieure
  return sortedUstensils;
}

// Fonction pour filtrer les ustensiles en fonction du terme de recherche et des recettes actuellement affichées
function filterUstensils(searchTerm, filteredRecipes) {
  const listUst = document.querySelector(".listUst");
  const ulElement = document.createElement("ul");
  const uniqueUstensils = new Set();

  // Itérer à travers les recettes affichées pour collecter les ustensiles uniques
  filteredRecipes.forEach((recipe) => {
    recipe.ustensils.forEach((utensil) => {
      if (utensil.toLowerCase().includes(searchTerm)) {
        if (!tag.includes(utensil.toLowerCase())) {
          // Vérifier si l'ustensile n'est pas déjà dans les tags
          uniqueUstensils.add(utensil.toLowerCase());
        }
      }
    });
  });

  // Afficher les ustensiles filtrés dans la div listUst en tant qu'éléments de liste
  uniqueUstensils.forEach((utensil) => {
    const liElement = document.createElement("li");
    liElement.textContent = utensil;

    // Ajouter un écouteur d'événements de clic à chaque ustensile filtré
    liElement.addEventListener("click", function () {
      // Lorsqu'un ustensile filtré est cliqué, ajoutez-le au tableau de balises
      tag.push(utensil);
      displayTags();
      // Supprime l'élément de la liste des ustensiles
      this.remove();
    });

    ulElement.appendChild(liElement);
  });

  listUst.innerHTML = "";
  listUst.appendChild(ulElement);
}

// Fonction pour afficher les appareils uniques dans la div listApp
function displayAppliances(filteredRecipes) {
  const listApp = document.querySelector(".listApp");

  // Effacer les appareils existants
  listApp.innerHTML = "";

  // Créer un élément ul pour stocker la liste des appareils
  const ulElement = document.createElement("ul");

  // Créer un SET pour stocker les appareils uniques
  const uniqueAppliances = new Set();

  // Itérer à travers les recettes affichées pour collecter les appareils uniques
  filteredRecipes.forEach((recipe) => {
    // Vérifier si la propriété "appliance" existe dans la recette
    if (recipe.appliance) {
      if (!tag.includes(recipe.appliance.toLowerCase())) {
        // Vérifier si l'appareil n'est pas déjà dans les tags
        uniqueAppliances.add(recipe.appliance.toLowerCase());
      }
    }
  });

  // Convertir les Set en tableau et le trier par ordre alphabétique
  const sortedAppliances = [...uniqueAppliances].sort();

  // Afficher les appareils dans la div listApp en tant qu'éléments de liste
  sortedAppliances.forEach((appliance) => {
    const liElement = document.createElement("li");
    liElement.textContent = appliance;

    // Ajouter un écouteur d'événements de clic à chaque élément li
    liElement.addEventListener("click", function () {
      // Lorsqu'un élément li est cliqué, ajoutez son contenu au tableau de balises
      tag.push(appliance);
      displayTags();
      const tagInputApp = document.querySelector(".tagInputAppareils");
      const spanElement = document.createElement("span");
      spanElement.textContent = appliance;
      tagInputApp.appendChild(spanElement);
      // Supprime l'élément de la liste des appliance
      this.remove();
    });

    ulElement.appendChild(liElement);
  });

  // Ajouter l'élément ul à la div listApp
  listApp.appendChild(ulElement);

  // Retourner sortedAppliances pour une utilisation ultérieure
  return sortedAppliances;
}

// Fonction pour filtrer les appareils en fonction du terme de recherche et des recettes actuellement affichées
function filterAppliances(searchTerm, filteredRecipes) {
  const listApp = document.querySelector(".listApp");
  const ulElement = document.createElement("ul");
  const uniqueAppliances = new Set();

  // Itérer à travers les recettes affichées pour collecter les appareils uniques
  filteredRecipes.forEach((recipe) => {
    if (recipe.appliance && recipe.appliance.toLowerCase().includes(searchTerm)) {
      if (!tag.includes(recipe.appliance.toLowerCase())) {
        // Vérifier si l'appareil n'est pas déjà dans les tags
        uniqueAppliances.add(recipe.appliance.toLowerCase());
      }
    }
  });

  // Afficher les appareils filtrés dans la div listApp en tant qu'éléments de liste
  uniqueAppliances.forEach((appliance) => {
    const liElement = document.createElement("li");
    liElement.textContent = appliance;

    // Ajouter un écouteur d'événements de clic à chaque appareil filtré
    liElement.addEventListener("click", function () {
      // Lorsqu'un appareil filtré est cliqué, ajoutez-le au tableau de balises
      tag.push(appliance);
      displayTags();
      // Supprime l'élément de la liste des appliance
      this.remove();
    });

    ulElement.appendChild(liElement);
  });

  listApp.innerHTML = "";
  listApp.appendChild(ulElement);
}
//permet de vider input main
document.addEventListener("DOMContentLoaded", function () {
  const inputMain = document.querySelector(".inputMain");
  const deleteIcon = document.querySelector(".deleteInput");

  inputMain.addEventListener("input", function () {
    if (this.value.length > 0) {
      deleteIcon.style.display = "block";
    } else {
      deleteIcon.style.display = "none";
    }
  });

  deleteIcon.addEventListener("click", function () {
    inputMain.value = "";
    deleteIcon.style.display = "none";
    updateRecipes("");
  });
});

// Fonction pour afficher les recettes
async function displayRecipes() {
  try {
    // Écouteur d'événements pour les modifications de inputMain
    const inputMain = document.querySelector(".inputMain");

    inputMain.addEventListener("input", function () {
      const searchTerm = inputMain.value.toLowerCase();
      if (searchTerm.length >= 3) {
        // Mettre à jour les recettes lorsque le terme de recherche a au moins trois caractères
        updateRecipes(sanitizeInput(searchTerm));
      } else {
        // Si le terme de recherche a moins de trois caractères, afficher toutes les recettes
        updateRecipes("");
      }
    });

    // Écouteur d'événements pour la soumission du formulaire
    const searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchTerm = inputMain.value.toLowerCase();
      updateRecipes(searchTerm);
    });

    // Écouteur d'événements pour les modifications de tag
    const listTag = document.querySelector(".listTag");
    listTag.addEventListener("click", function () {
      updateRecipes();
    });

    // Afficher toutes les recettes initialement
    updateRecipes("");
  } catch (error) {
    console.error("Error fetching or displaying recipes:", error);
  }
}

function sanitizeInput(input) {
  // Check for HTML tags
  if (/<.*?>/.test(input)) {
    alert("Du code HTML a été détecter");
    const inputMain = document.querySelector(".inputMain");
    inputMain.value = "";
  }
}

displayRecipes();

export { displayIngredients, displayUstensils, displayAppliances, filterIngredients, filterUstensils, filterAppliances };
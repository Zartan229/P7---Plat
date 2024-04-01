import recipes from "./recipes.js";
import { tag } from './tags.js';
import { createRecipeCard } from './recipeCard.js';
import { displayIngredients, displayUstensils, displayAppliances, filterIngredients, filterUstensils, filterAppliances } from './front.js';
const mainCardFlex = document.querySelector(".mainCardFlex");
const inputMain = document.querySelector('.inputMain');
let recipesDisplayed = 0;
let filteredRecipes = [];



 // Écouteur d'événements pour les changements de saisie
 const ingInput = document.querySelector(".ingInput");
  
 // Mettre à jour les écouteurs d'événements pour passer les recettes filtrées
 ingInput.addEventListener("input", function () {
   const searchTerm = ingInput.value.toLowerCase();
   filterIngredients(searchTerm, filteredRecipes);
 });


   // Écouteur d'événements pour les changements de saisie des ustensiles
   const ustInput = document.querySelector(".ustInput");
  
   ustInput.addEventListener("input", function () {
     const searchTerm = ustInput.value.toLowerCase();
     filterUstensils(searchTerm, filteredRecipes);
   });

     // Écouteur d'événements pour les changements de saisie des appareils
  const appInput = document.querySelector(".appInput");
  
  appInput.addEventListener("input", function () {
    const searchTerm = appInput.value.toLowerCase();
    filterAppliances(searchTerm, filteredRecipes);
  });

// Fonction pour mettre à jour les recettes en fonction du terme de recherche et des balises sélectionnées
function updateRecipes(searchTerm = "") {
  // Réinitialiser recipesDisplayed lors de la mise à jour des recettes
  recipesDisplayed = 0;

  const selectedTags = tag ? tag.map((tag) => tag.toLowerCase()) : [];
  let searchTermInput = inputMain.value.trim().toLowerCase();

  // Vérifie si le contenu de inputMain comporte trois caractères ou plus
  if (searchTermInput.length >= 3) {

    searchTerm = searchTermInput; // Utilise le contenu de inputMain comme searchTerm
  }

  filteredRecipes = recipes.filter((recipe) => {
    const hasSearchTerm = (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchTerm))
    );

    // Vérifie si toutes les balises sélectionnées sont présentes dans la recette
    const hasAllSelectedTags = selectedTags.every(tag => 
      recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase() === tag) ||
      recipe.ustensils.some((utensil) => utensil.toLowerCase() === tag) ||
      (recipe.appliance && recipe.appliance.toLowerCase() === tag)
    );

    return hasSearchTerm && hasAllSelectedTags;
  });

  if (!mainCardFlex) {
    console.error("Element with class 'mainCardFlex' not found.");
    return;
  }

  mainCardFlex.innerHTML = ""; // Clear existing recipes

  filteredRecipes.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    mainCardFlex.appendChild(card);
    recipesDisplayed++;
  });

  const recetteCount = document.querySelector(".recette");
  if (recetteCount) {
    recetteCount.textContent = `${recipesDisplayed} recette${recipesDisplayed !== 1 ? "s" : ""}`;
  } else {
    console.error("Element with class 'recette' not found.");
  }
  displayIngredients(filteredRecipes);
  displayUstensils(filteredRecipes);
  displayAppliances(filteredRecipes);
}




// Appelle la fonction pour afficher les recettes

export { updateRecipes };


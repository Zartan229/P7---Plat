import recipes from "./recipes.js";
import { tag } from './tags.js';
import { createRecipeCard } from './recipeCard.js';
import { displayIngredients, displayUstensils, displayAppliances, filterIngredients, filterUstensils, filterAppliances } from './front.js';
const mainCardFlex = document.querySelector(".mainCardFlex");
const inputMain = document.querySelector('.inputMain');
let recipesDisplayed = 0;
let filteredRecipes = [];



 // Event listener for input changes
 const ingInput = document.querySelector(".ingInput");
  
 // Update the event listeners to pass the filtered recipes
 ingInput.addEventListener("input", function () {
   const searchTerm = ingInput.value.toLowerCase();
   filterIngredients(searchTerm, filteredRecipes);
 });


   // Event listener for utensil input changes
   const ustInput = document.querySelector(".ustInput");
  
   ustInput.addEventListener("input", function () {
     const searchTerm = ustInput.value.toLowerCase();
     filterUstensils(searchTerm, filteredRecipes);
   });

     // Event listener for appliance input changes
  const appInput = document.querySelector(".appInput");
  
  appInput.addEventListener("input", function () {
    const searchTerm = appInput.value.toLowerCase();
    filterAppliances(searchTerm, filteredRecipes);
  });

// Function to update recipes based on search term and selected tags
function updateRecipes(searchTerm = "") {
  // Reset recipesDisplayed when updating recipes
  recipesDisplayed = 0;

  const selectedTags = tag ? tag.map((tag) => tag.toLowerCase()) : [];
  let searchTermInput = inputMain.value.trim().toLowerCase();

  // Check if the inputMain content has three or more characters
  if (searchTermInput.length >= 3) {

    searchTerm = searchTermInput; // Use the content of inputMain as the searchTerm
  }

  filteredRecipes = recipes.filter((recipe) => {
    const hasSearchTerm = (
      searchTerm.length < 3 || // Display all recipes if the search term has less than three characters
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchTerm))
    );

    // Check if all selected tags are present in the recipe
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




// Call the function to display recipes

export { updateRecipes };


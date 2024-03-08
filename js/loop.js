import recipes from "./recipes.js";
import { tag } from './tags.js';
import { createRecipeCard } from './recipeCard.js';
import { displayIngredients, displayUstensils, displayAppliances } from './front.js';
const mainCardFlex = document.querySelector(".mainCardFlex");
let recipesDisplayed = 0;
let filteredRecipes = [];

// Function to update recipes based on search term and selected tags
function updateRecipes(searchTerm = "") {
  // Reset recipesDisplayed when updating recipes
  recipesDisplayed = 0;

  const selectedTags = tag ? tag.map((tag) => tag.toLowerCase()) : [];

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


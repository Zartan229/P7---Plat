// recipeCard.js
export function createRecipeCard(recipe) {
    const mainCard = document.createElement("div");
    mainCard.className = "mainCard";

    // Helper function to create an element
    function createElement(tag, className, textContent) {
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = textContent || '';
        return element;
    }

    // Create and append image element
    mainCard.appendChild(createElement("img", "mainCardImage")).src = "asset/" + recipe.image;

    // Create and append title element
    mainCard.appendChild(createElement("h3", "mainCardTitle", recipe.name));

    // Create and append description element
    mainCard.appendChild(createElement("p", "mainCardText", recipe.description));

    // Create and append ingredients section
    const ingredientsSection = document.createElement("div");
    ingredientsSection.className = "mainCardStuffFlex";
    mainCard.appendChild(ingredientsSection);

    // Iterate through ingredients and create elements
    recipe.ingredients.forEach((ingredient) => {
        const ingredientElement = document.createElement("div");
        ingredientElement.className = "mainCardStuff";

        ingredientElement.appendChild(createElement("h6", "", ingredient.ingredient));
        ingredientElement.appendChild(createElement("p", "", `${ingredient.quantity} ${ingredient.unit || ''}`));

        ingredientsSection.appendChild(ingredientElement);
    });

    return mainCard;
}

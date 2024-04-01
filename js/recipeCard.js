export function createRecipeCard(recipe) {
    const mainCard = document.createElement("div");
    mainCard.className = "mainCard";

    // Fonction d'aide pour créer un élément
    function createElement(tag, className, textContent) {
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = textContent || '';
        return element;
    }

    // Créer et ajouter l'élément image
    mainCard.appendChild(createElement("img", "mainCardImage")).src = "asset/" + recipe.image;

    // Créer et ajouter l'élément titre
    mainCard.appendChild(createElement("h3", "mainCardTitle", recipe.name));

    // Créer et ajouter l'élément description
    mainCard.appendChild(createElement("p", "mainCardText", recipe.description));

    // Créer la section des ingrédients
    const ingredientsSection = document.createElement("div");
    ingredientsSection.className = "mainCardStuffFlex";
    mainCard.appendChild(ingredientsSection);

    // Itérer à travers les ingrédients et créer des éléments
    recipe.ingredients.forEach((ingredient) => {
        const ingredientElement = document.createElement("div");
        ingredientElement.className = "mainCardStuff";

        ingredientElement.appendChild(createElement("h6", "", ingredient.ingredient));
        ingredientElement.appendChild(createElement("p", "", `${ingredient.quantity} ${ingredient.unit || ''}`));

        ingredientsSection.appendChild(ingredientElement);
    });

    return mainCard;
}
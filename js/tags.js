import { updateRecipes } from "./loop.js";

const tag = [];

function displayTags() {
  const listTag = document.querySelector(".listTag");

  // Effacer les balises existantes
  listTag.innerHTML = "";

  // Itérer à travers les tags et créer des éléments div
  tag.forEach((tagItem) => {
    const tagElement = document.createElement("div");
    tagElement.className = "labelSearch";
    tagElement.textContent = tagItem;

    const crossElement = document.createElement("img");
    crossElement.className = "labelClose";
    crossElement.src = "../img/cross.svg";

    tagElement.appendChild(crossElement);
    // Ajouter un écouteur d'événements de clic à chaque élément de tag
    tagElement.addEventListener("click", function () {
      // Supprimer le tag cliquée du tableau des tags
      const index = tag.indexOf(tagItem);
      if (index !== -1) {
        tag.splice(index, 1);
        // Afficher les tags mises à jour
        displayTags();
        updateRecipes();

        const spanToRemoveIng = document.querySelector(".tagInputIngrédients span");
        if (spanToRemoveIng && spanToRemoveIng.textContent === tagItem) {
          spanToRemoveIng.remove();
        }

        const spanToRemoveUst = document.querySelector(".tagInputUstensiles span");
        if (spanToRemoveUst && spanToRemoveUst.textContent === tagItem) {
          spanToRemoveUst.remove();
        }

        const spanToRemoveApp = document.querySelector(".tagInputAppareils span");
        if (spanToRemoveApp && spanToRemoveApp.textContent === tagItem) {
          spanToRemoveApp.remove();
        }
      }
    });

    listTag.appendChild(tagElement);
  });

  // updateRecipes sans searchTerm pour actualiser les recettes en fonction des tags
  updateRecipes();
}

export { tag, displayTags };

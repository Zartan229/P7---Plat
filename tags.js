// In another JS file where updateRecipes() is needed
import { updateRecipes } from './factory.js';

const tag = [];

function displayTags() {
    const listTag = document.querySelector(".listTag");
  
    // Clear existing tags
    listTag.innerHTML = "";
  
    // Iterate through tags and create div elements
    tag.forEach((tagItem) => {
      const tagElement = document.createElement("div");
      tagElement.className = "labelSearch";
      tagElement.textContent = tagItem;
  
      // Add a click event listener to each tag element
      tagElement.addEventListener('click', function () {
        // Remove the clicked tag from the tag array
        const index = tag.indexOf(tagItem);
        if (index !== -1) {
          tag.splice(index, 1);
          // Display updated tags
          displayTags();
          // Log tags for testing
          console.log("Tags:", tag);
          // Update recipes
          updateRecipes(); // Call updateRecipes without searchTerm
        }
      });
  
      listTag.appendChild(tagElement);
    });
  
    // Call updateRecipes without searchTerm to refresh recipes based on tags
    updateRecipes();
  }

  // Export tag array and displayTags function
export { tag, displayTags };
import { updateRecipes } from './loop.js';
import { tag, displayTags } from './tags.js';

// Function to display unique ingredients in the listIngredient div
function displayIngredients(filteredRecipes) {
    const listIngredient = document.querySelector(".listIngredient");
  
    // Clear existing ingredients
    listIngredient.innerHTML = "";
  
    // Create a ul element to store the list of ingredients
    const ulElement = document.createElement("ul");
  
    // Create a Set to store unique ingredients
    const uniqueIngredients = new Set();
  
    // Iterate through displayed recipes to collect unique ingredients
    filteredRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        uniqueIngredients.add(ingredient.ingredient.toLowerCase());
      });
    });
  
    // Convert Set to array and sort alphabetically
    const sortedIngredients = [...uniqueIngredients].sort();
  
    // Display ingredients in listIngredient div as list items
    sortedIngredients.forEach((ingredient) => {
      const liElement = document.createElement("li");
      liElement.textContent = ingredient;
  
      // Add a click event listener to each li element
      liElement.addEventListener('click', function () {
        // When an li is clicked, add its content to the tag array
        tag.push(ingredient);
        console.log("Tags:", tag); // Log tags for testing
        displayTags();
      });
  
      ulElement.appendChild(liElement);
    });
  
    // Append the ul element to the listIngredient div
    listIngredient.appendChild(ulElement);
  
    // Return sortedIngredients for later use
    return sortedIngredients;
  }
  
  // Function to filter ingredients based on the search term and currently displayed recipes
  function filterIngredients(searchTerm, filteredRecipes) {
    const listIngredient = document.querySelector(".listIngredient");
    const ulElement = document.createElement("ul");
    const uniqueIngredients = new Set();
  
    // Iterate through displayed recipes to collect unique ingredients
    filteredRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (ingredient.ingredient.toLowerCase().includes(searchTerm)) {
          uniqueIngredients.add(ingredient.ingredient.toLowerCase());
        }
      });
    });
  
    // Display filtered ingredients in listIngredient div as list items
    uniqueIngredients.forEach((ingredient) => {
      const liElement = document.createElement("li");
      liElement.textContent = ingredient;
      
      // Add a click event listener to each filtered ingredient
      liElement.addEventListener('click', function () {
        // When a filtered ingredient is clicked, add it to the tag array
        tag.push(ingredient);
        console.log("Tags:", tag); // Log tags for testing
        displayTags();
      });
  
      ulElement.appendChild(liElement);
    });
    
  
    listIngredient.innerHTML = "";
    listIngredient.appendChild(ulElement);
  }
    
  // Call the function to initially display all ingredients and store sortedIngredients
  //const sortedIngredients = displayIngredients();
  
  document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle dropdown
    function toggleDropdown(toggleId, contentClass) {
      var toggleElement = document.getElementById(toggleId);
      var contentElement = document.querySelector('.' + contentClass);
  
      toggleElement.addEventListener('click', function (event) {
        event.stopPropagation(); // Stop the click event from propagating to the document
        // Toggle the display of the dropdown content
        contentElement.style.display = (contentElement.style.display === 'block') ? 'none' : 'block';
      });
  
      document.addEventListener('click', function (event) {
        if (!contentElement.contains(event.target)) {
          // Close the dropdown if it's open
          contentElement.style.display = 'none';
        }
      });
    }
  
    // Toggle dropdowns
    toggleDropdown('ingDropdownToggle', 'dropdownIngContent');
    toggleDropdown('ustDropdownToggle', 'dropdownUstContent');
    toggleDropdown('appDropdownToggle', 'dropdownAppContent');
  });
  
  // Function to display unique ustensils in the listUst div
  // Function to display unique ustensils in the listUst div
  function displayUstensils(filteredRecipes) {
    const listUst = document.querySelector(".listUst");
  
    // Clear existing ustensils
    listUst.innerHTML = "";
  
    // Create a ul element to store the list of ustensils
    const ulElement = document.createElement("ul");
  
    // Create a Set to store unique ustensils
    const uniqueUstensils = new Set();
  
    // Iterate through displayed recipes to collect unique ustensils
    filteredRecipes.forEach((recipe) => {
      recipe.ustensils.forEach((utensil) => {
        uniqueUstensils.add(utensil.toLowerCase());
      });
    });
  
    // Convert Set to array and sort alphabetically
    const sortedUstensils = [...uniqueUstensils].sort();
  
      // Display filtered ustensils in listUst div as list items
    uniqueUstensils.forEach((utensil) => {
      const liElement = document.createElement("li");
      liElement.textContent = utensil;
      
      // Add a click event listener to each filtered utensil
      liElement.addEventListener('click', function () {
        // When a filtered utensil is clicked, add it to the tag array
        tag.push(utensil);
        console.log("Tags:", tag); // Log tags for testing
        displayTags();
      });
  
      ulElement.appendChild(liElement);
    });
  
    // Append the ul element to the listUst div
    listUst.appendChild(ulElement);
  
    // Return sortedUstensils for later use
    return sortedUstensils;
  }
  
  // Function to filter ustensils based on the search term and currently displayed recipes
  function filterUstensils(searchTerm, filteredRecipes) {
    const listUst = document.querySelector(".listUst");
    const ulElement = document.createElement("ul");
    const uniqueUstensils = new Set();
  
    // Iterate through displayed recipes to collect unique ustensils
    filteredRecipes.forEach((recipe) => {
      recipe.ustensils.forEach((utensil) => {
        if (utensil.toLowerCase().includes(searchTerm)) {
          uniqueUstensils.add(utensil.toLowerCase());
        }
      });
    });
  
    // Display filtered ustensils in listUst div as list items
    uniqueUstensils.forEach((utensil) => {
      const liElement = document.createElement("li");
      liElement.textContent = utensil;
      
      // Add a click event listener to each filtered utensil
      liElement.addEventListener('click', function () {
        // When a filtered utensil is clicked, add it to the tag array
        tag.push(utensil);
        console.log("Tags:", tag); // Log tags for testing
        displayTags();
      });
  
      ulElement.appendChild(liElement);
    });
  
    listUst.innerHTML = "";
    listUst.appendChild(ulElement);
  }
  
  // Call the function to initially display all ustensils and store sortedUstensils
  //const sortedUstensils = displayUstensils();
  
  // Function to display unique appliances in the listApp div
  // Function to display unique appliances in the listApp div
  function displayAppliances(filteredRecipes) {
    const listApp = document.querySelector(".listApp");
  
    // Clear existing appliances
    listApp.innerHTML = "";
  
    // Create a ul element to store the list of appliances
    const ulElement = document.createElement("ul");
  
    // Create a Set to store unique appliances
    const uniqueAppliances = new Set();
  
    // Iterate through displayed recipes to collect unique appliances
    filteredRecipes.forEach((recipe) => {
      // Check if "appliance" property exists in the recipe
      if (recipe.appliance) {
        uniqueAppliances.add(recipe.appliance.toLowerCase());
      }
    });
  
    // Convert Set to array and sort alphabetically
    const sortedAppliances = [...uniqueAppliances].sort();
  
    // Display appliances in listApp div as list items
    sortedAppliances.forEach((appliance) => {
      const liElement = document.createElement("li");
      liElement.textContent = appliance;
  
      // Add a click event listener to each li element
      liElement.addEventListener('click', function () {
        // When an li is clicked, add its content to the tag array
        tag.push(appliance);
        console.log("Tags:", tag); // Log tags for testing
        displayTags();
      });
  
      ulElement.appendChild(liElement);
    });
  
    // Append the ul element to the listApp div
    listApp.appendChild(ulElement);
  
    // Return sortedAppliances for later use
    return sortedAppliances;
  }
  
  // Function to filter appliances based on the search term and currently displayed recipes
  function filterAppliances(searchTerm, filteredRecipes) {
    const listApp = document.querySelector(".listApp");
    const ulElement = document.createElement("ul");
    const uniqueAppliances = new Set();
  
    // Iterate through displayed recipes to collect unique appliances
    filteredRecipes.forEach((recipe) => {
      if (recipe.appliance && recipe.appliance.toLowerCase().includes(searchTerm)) {
        uniqueAppliances.add(recipe.appliance.toLowerCase());
      }
    });
  
      // Display filtered appliances in listApp div as list items
      uniqueAppliances.forEach((appliance) => {
        const liElement = document.createElement("li");
        liElement.textContent = appliance;
        
        // Add a click event listener to each filtered appliance
        liElement.addEventListener('click', function () {
          // When a filtered appliance is clicked, add it to the tag array
          tag.push(appliance);
          console.log("Tags:", tag); // Log tags for testing
          displayTags();
        });
    
        ulElement.appendChild(liElement);
      });
  
    listApp.innerHTML = "";
    listApp.appendChild(ulElement);
  }

document.addEventListener("DOMContentLoaded", function() {
    const inputMain = document.querySelector('.inputMain');
    const deleteIcon = document.querySelector('.deleteInput');
  
    inputMain.addEventListener('input', function() {
        if (this.value.length > 0) {
            deleteIcon.style.display = 'block';
        } else {
            deleteIcon.style.display = 'none';
        }
    });
  
    deleteIcon.addEventListener('click', function() {
        inputMain.value = '';
        deleteIcon.style.display = 'none';
    });
  });

// Function to display recipes
async function displayRecipes() {
    try {
      // Event listener for inputMain changes
      const inputMain = document.querySelector(".inputMain");
  
      inputMain.addEventListener("input", function () {
        const searchTerm = inputMain.value.toLowerCase();
        if (searchTerm.length >= 3) {
          // Update recipes when the search term has at least three characters
          updateRecipes(searchTerm);
        } else {
          // If the search term has less than three characters, display all recipes
          updateRecipes("");
        }
      });
  
      // Event listener for form submit
      const searchForm = document.querySelector("form");
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchTerm = inputMain.value.toLowerCase();
        updateRecipes(searchTerm);
      });
  
      // Event listener for tag changes
      const listTag = document.querySelector(".listTag");
      listTag.addEventListener("click", function () {
        updateRecipes();
      });
  
      // Display all recipes initially
      updateRecipes("");
    } catch (error) {
      console.error("Error fetching or displaying recipes:", error);
    }
  }

displayRecipes();

export { displayIngredients, displayUstensils, displayAppliances, filterIngredients, filterUstensils, filterAppliances };
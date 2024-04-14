const recipes = [
    { 
        name: "Macaroni Salad", 
        ingredients: [
            "Macaroni",
            "Condiments",
            "Sugar",
            "Vinegar",
            "Seasonings",
            "Vegetables"
        ],
        description: "This flavorful macaroni salad is easy to make and is the perfect crowd-pleasing dish to bring to your next picnic or potluck.",
        instructions: ["Heat oil in a large pot or deep skillet over medium high heat. Add onion and garlic, cook for 3 minutes or until light golden and softened.",
                        "Turn heat up to high and add beef. Cook, breaking it up as your go, until browned.",
                        "Add red wine. Bring to simmer and cook for 1 minute, scraping the bottom of the pot, until the alcohol smell is gone.",
                        "Add remaining ingredients except salt and pepper. Stir, bring to a simmer then turn down to medium so it bubbles gently. Cook for 20 – 30 minutes (no lid), adding water if the sauce gets too thick for your taste. Stir occasionally.",
                        "Slow simmer option: really takes this to another level, if you have the time! Add 3/4 cup of water, cover with lid and simmer on very low for 2 – 2.5 hours, stirring every 30 minutes or so. (Note 5) Uncover, simmer 20 minutes to thicken sauce. (Note 6 for slow cooker)",
                        "Adjust salt and pepper to taste right at the end. Serve over spaghetti – though if you have the time, I recommend tossing the sauce and pasta per steps below."]

    },
    { 
        name: "Chicken Stir Fry",  
        ingredients: [
            "Chicken breast",
            "Bell peppers",
            "Broccoli",
            "Soy sauce",
            "Ginger",
            "Garlic"
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus eleifend eros at sem blandit, nec cursus lacus varius.\nFusce pharetra nibh vel nisl sollicitudin efficitur.\nMauris a sem in tellus finibus fringilla.\nMorbi eu justo posuere, dictum ex id, tincidunt urna.",
        instructions: ["Heat oil in a large pot or deep skillet over medium high heat. Add onion and garlic, cook for 3 minutes or until light golden and softened.",
                        "Turn heat up to high and add beef. Cook, breaking it up as your go, until browned.",
                        "Add red wine. Bring to simmer and cook for 1 minute, scraping the bottom of the pot, until the alcohol smell is gone.",
                        "Add remaining ingredients except salt and pepper. Stir, bring to a simmer then turn down to medium so it bubbles gently. Cook for 20 – 30 minutes (no lid), adding water if the sauce gets too thick for your taste. Stir occasionally.",
                        "Slow simmer option: really takes this to another level, if you have the time! Add 3/4 cup of water, cover with lid and simmer on very low for 2 – 2.5 hours, stirring every 30 minutes or so. (Note 5) Uncover, simmer 20 minutes to thicken sauce. (Note 6 for slow cooker)",
                        "Adjust salt and pepper to taste right at the end. Serve over spaghetti – though if you have the time, I recommend tossing the sauce and pasta per steps below."]
    },
    { 
        name: "Caprese Salad", 
        ingredients: [
            "Tomatoes",
            "Fresh mozzarella",
            "Basil leaves",
            "Olive oil",
            "Balsamic vinegar"
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus eleifend eros at sem blandit, nec cursus lacus varius.\nFusce pharetra nibh vel nisl sollicitudin efficitur.\nMauris a sem in tellus finibus fringilla.\nMorbi eu justo posuere, dictum ex id, tincidunt urna.",
        instructions: ["Heat oil in a large pot or deep skillet over medium high heat. Add onion and garlic, cook for 3 minutes or until light golden and softened.",
                        "Turn heat up to high and add beef. Cook, breaking it up as your go, until browned.",
                        "Add red wine. Bring to simmer and cook for 1 minute, scraping the bottom of the pot, until the alcohol smell is gone.",
                        "Add remaining ingredients except salt and pepper. Stir, bring to a simmer then turn down to medium so it bubbles gently. Cook for 20 – 30 minutes (no lid), adding water if the sauce gets too thick for your taste. Stir occasionally.",
                        "Slow simmer option: really takes this to another level, if you have the time! Add 3/4 cup of water, cover with lid and simmer on very low for 2 – 2.5 hours, stirring every 30 minutes or so. (Note 5) Uncover, simmer 20 minutes to thicken sauce. (Note 6 for slow cooker)",
                        "Adjust salt and pepper to taste right at the end. Serve over spaghetti – though if you have the time, I recommend tossing the sauce and pasta per steps below."]
    }
];

const recipesElement = document.querySelector(".container");

recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");
    const nameElement = document.createElement("h2");
    nameElement.textContent = recipe.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = recipe.description;
 

    const ingredientsElement = document.createElement("ul");
    ingredientsElement.classList.add("collapsed");

    const instructionsElement = document.createElement("ol");
    recipe.instructions.forEach(instruction => {
        const instructionElement = document.createElement("li");
        instructionElement.textContent = instruction;
        instructionsElement.appendChild(instructionElement);
    });

    recipe.ingredients.forEach(ingredient => {
        const ingredientElement = document.createElement("li");
        ingredientElement.textContent = ingredient;
        ingredientsElement.appendChild(ingredientElement);
    });

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Ingredients";
    buttonElement.addEventListener("click", () => {
        ingredientsElement.classList.toggle("collapsed");
    });




    recipeElement.appendChild(nameElement);
    recipeElement.appendChild(descriptionElement);
    recipeElement.appendChild(instructionsElement);
    recipeElement.appendChild(buttonElement);
    recipeElement.appendChild(ingredientsElement);


    recipesElement.appendChild(recipeElement);
});
import borschtImage from "./assets/borscht.jpg";
import potRoastImage from "./assets/pot roast.jpeg";
import ajiacoBogotanoImage from "./assets/ajiaco bogotano.jpg";
import tiramisuImage from "./assets/tiramisu.jpg";
import kartoffelSalatImage from "./assets/kartoffelsalat.jpg";
import greekMoussakaImage from "./assets/greek moussaka.jpeg";
import feijoadaImage from "./assets/feijoada.jpg";
import menemenImage from "./assets/menemen.jpg";

export const items = [
  {
    id: "1",
    difficulty: "Hard",
    title: "Traditional Ukrainian Borscht",
    description:
      "A hearty and flavorful beet soup loaded with vegetables, tender beef, and a touch of sourness from vinegar or lemon juice. Served hot with sour cream and fresh dill.",
    imageUrl: borschtImage,
    category: "Soup",
    prepTime: 110,
    serving: 6,
    ingridients: [
      {
        name: "Beef shank",
        quantity: "500g",
      },
      {
        name: "Beets",
        quantity: "3 medium",
      },
      {
        name: "Carrots",
        quantity: "2 medium",
      },
      {
        name: "Potatoes",
        quantity: "3 medium",
      },
      {
        name: "Cabbage",
        quantity: "300g",
      },
      {
        name: "Onion",
        quantity: "1 large",
      },
      {
        name: "Tomato paste",
        quantity: "2 tablespoons",
      },
      {
        name: "Garlic",
        quantity: "3 cloves",
      },
      {
        name: "Vinegar or lemon juice",
        quantity: "1 tablespoon",
      },
      {
        name: "Bay leaves",
        quantity: "2",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Black pepper",
        quantity: "to taste",
      },
      {
        name: "Fresh dill",
        quantity: "for garnish",
      },
      {
        name: "Sour cream",
        quantity: "for serving",
      },
    ],
    instructions: [
      "In a large pot, cover the beef with water and bring to a boil. Skim off any foam, then reduce heat and simmer for 45-60 minutes until tender.",
      "While the broth is cooking, peel and grate the beets. Julienne the carrots and shred the cabbage. Dice the potatoes and onion.",
      "In a separate pan, sauté onions and carrots in oil until soft. Add tomato paste and beets, cook for 5-7 minutes. Add vinegar or lemon juice to preserve the color.",
      "Add diced potatoes to the beef broth and cook for 10 minutes.",
      "Add the sautéed vegetables, cabbage, bay leaves, salt, and pepper to the pot. Simmer for another 20-30 minutes until all vegetables are tender.",
      "Add minced garlic at the end and adjust seasoning to taste.",
      "Serve hot, garnished with fresh dill and a generous spoonful of sour cream.",
    ],
    tags: ["Ukrainian", "Soup", "Beet", "Traditional"],
    nutrition: {
      calories: 350,
      protein: "22g",
      carbs: "30g",
      fat: "15g",
    },
  },
  {
    id: "2",
    difficulty: "Medium",
    title: "Classic Pot Roast",
    description:
      "A comforting, slow-cooked beef pot roast braised with vegetables, herbs, and a rich, savory broth. Perfect for family dinners and cold-weather gatherings.",
    imageUrl: potRoastImage,
    category: "Main Course",
    prepTime: 200,
    servings: 6,
    ingredients: [
      {
        name: "Chuck roast",
        quantity: "1.5kg",
      },
      {
        name: "Carrots",
        quantity: "4 large, cut into chunks",
      },
      {
        name: "Potatoes",
        quantity: "4 medium, halved",
      },
      {
        name: "Celery stalks",
        quantity: "3, cut into pieces",
      },
      {
        name: "Onion",
        quantity: "1 large, quartered",
      },
      {
        name: "Garlic",
        quantity: "4 cloves, minced",
      },
      {
        name: "Beef broth",
        quantity: "700ml",
      },
      {
        name: "Red wine (optional)",
        quantity: "250ml",
      },
      {
        name: "Tomato paste",
        quantity: "2 tablespoons",
      },
      {
        name: "Olive oil",
        quantity: "2 tablespoons",
      },
      {
        name: "Bay leaves",
        quantity: "2",
      },
      {
        name: "Thyme",
        quantity: "1 teaspoon dried or 3 sprigs fresh",
      },
      {
        name: "Rosemary",
        quantity: "1 teaspoon dried or 2 sprigs fresh",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Black pepper",
        quantity: "to taste",
      },
      {
        name: "Fresh parsley",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Preheat oven to 160°C (325°F).",
      "Season the chuck roast generously with salt and pepper.",
      "In a large Dutch oven or heavy oven-safe pot, heat olive oil over medium-high heat.",
      "Sear the roast on all sides until well-browned. Remove and set aside.",
      "In the same pot, sauté onion, celery, and garlic until fragrant and softened.",
      "Stir in tomato paste and cook for 1 minute.",
      "Deglaze the pot with red wine (if using), scraping up browned bits.",
      "Add beef broth, bay leaves, thyme, rosemary, and return the roast to the pot.",
      "Cover and cook in the oven for 2 hours.",
      "Add carrots and potatoes, cover, and cook for another 1 hour or until the beef is fork-tender.",
      "Remove bay leaves and herb sprigs. Adjust seasoning.",
      "Serve sliced roast with vegetables and cooking juices, garnished with fresh parsley.",
    ],
    tags: ["American", "Beef", "Comfort Food", "Slow-Cooked", "One-Pot"],
    nutrition: {
      calories: 550,
      protein: "40g",
      carbs: "20g",
      fat: "35g",
    },
  },
  {
    id: "3",
    difficulty: "Medium",
    title: "Ajiaco Bogotano",
    description:
      "A traditional Colombian chicken and potato soup from Bogotá, featuring three types of potatoes, corn on the cob, and the distinctive flavor of guasca herb. Typically served with avocado, capers, and cream.",
    imageUrl: ajiacoBogotanoImage,
    category: "Soup",
    prepTime: 110,
    servings: 4,
    ingredients: [
      {
        name: "Chicken breast (bone-in preferred)",
        quantity: "600g",
      },
      {
        name: "Yellow potatoes (papa amarilla)",
        quantity: "300g",
      },
      {
        name: "White potatoes",
        quantity: "300g",
      },
      {
        name: "Creole potatoes (or red potatoes)",
        quantity: "200g",
      },
      {
        name: "Corn on the cob",
        quantity: "2 ears, halved",
      },
      {
        name: "Guasca (dried herb)",
        quantity: "2 tablespoons",
      },
      {
        name: "Onion",
        quantity: "1 medium",
      },
      {
        name: "Garlic",
        quantity: "3 cloves",
      },
      {
        name: "Chicken stock",
        quantity: "2 liters",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Black pepper",
        quantity: "to taste",
      },
      {
        name: "Fresh cilantro",
        quantity: "for garnish",
      },
      {
        name: "Capers",
        quantity: "for serving",
      },
      {
        name: "Heavy cream",
        quantity: "for serving",
      },
      {
        name: "Avocado",
        quantity: "1 large, sliced",
      },
    ],
    instructions: [
      "In a large pot, bring chicken stock to a boil. Add chicken breasts, halved corn cobs, chopped onion, and minced garlic. Simmer for 30 minutes, skimming any foam.",
      "Peel and cut potatoes: slice the yellow potatoes thinly (to help thicken the soup), and cut white and Creole potatoes into chunks.",
      "Add all potatoes to the pot, season with salt and pepper, and simmer for 20 minutes.",
      "Remove chicken, shred it, and return to the pot.",
      "Stir in guasca and simmer for another 20-30 minutes, until the soup is thickened and the potatoes are tender.",
      "Adjust seasoning. Remove corn cobs for serving.",
      "Serve hot with shredded chicken, corn cob, and garnishes: sliced avocado, capers, fresh cilantro, and a drizzle of heavy cream.",
    ],
    tags: ["Colombian", "Soup", "Chicken", "Traditional", "Comfort Food"],
    nutrition: {
      calories: 450,
      protein: "30g",
      carbs: "35g",
      fat: "20g",
    },
  },
  {
    id: "4",
    difficulty: "Hard",
    title: "Classic Italian Tiramisu",
    description:
      "A rich and indulgent Italian dessert made with layers of coffee-soaked ladyfingers, creamy mascarpone filling, and a dusting of cocoa powder.",
    imageUrl: tiramisuImage,
    category: "Dessert",
    prepTime: 45,
    serving: 6,
    ingridients: [
      {
        name: "Mascarpone cheese",
        quantity: "500g",
      },
      {
        name: "Ladyfinger biscuits",
        quantity: "300g",
      },
      {
        name: "Egg yolks",
        quantity: "5",
      },
      {
        name: "Sugar",
        quantity: "100g",
      },
      {
        name: "Strong brewed coffee (cooled)",
        quantity: "300ml",
      },
      {
        name: "Cocoa powder",
        quantity: "for dusting",
      },
      {
        name: "Dark rum or Marsala wine (optional)",
        quantity: "2 tablespoons",
      },
      {
        name: "Heavy cream (optional for extra fluffiness)",
        quantity: "200ml",
      },
    ],
    instructions: [
      "Prepare the coffee and let it cool. Add rum or Marsala if using.",
      "In a large bowl, whisk egg yolks and sugar until thick and pale.",
      "Gently fold in mascarpone cheese until smooth. Optionally, whip heavy cream and fold it into the mascarpone mixture for extra lightness.",
      "Briefly dip each ladyfinger into the coffee, ensuring they are moist but not soggy.",
      "Layer dipped ladyfingers in the bottom of a dish.",
      "Spread half of the mascarpone mixture over the ladyfingers.",
      "Repeat with another layer of dipped ladyfingers and the remaining mascarpone cream.",
      "Cover and refrigerate for at least 4 hours (ideally overnight).",
      "Before serving, generously dust the top with cocoa powder.",
    ],
    tags: ["Italian", "Dessert", "Coffee", "Traditional"],
    nutrition: {
      calories: 420,
      protein: "7g",
      carbs: "35g",
      fat: "28g",
    },
  },

  {
    id: "5",
    difficulty: "Easy",
    title: "Kartoffelsalat (German Potato Salad)",
    description:
      "A traditional warm German potato salad made with tender potatoes, crisp bacon, onions, and a tangy vinegar-mustard dressing.",
    imageUrl: kartoffelSalatImage,
    category: "Salad",
    prepTime: 25,
    serving: 4,
    ingridients: [
      {
        name: "Waxy potatoes",
        quantity: "800g",
      },
      {
        name: "Bacon (diced)",
        quantity: "100g",
      },
      {
        name: "Onion (finely chopped)",
        quantity: "1 medium",
      },
      {
        name: "White wine vinegar",
        quantity: "3 tablespoons",
      },
      {
        name: "Dijon mustard",
        quantity: "1 tablespoon",
      },
      {
        name: "Vegetable oil",
        quantity: "3 tablespoons",
      },
      {
        name: "Chicken or vegetable broth",
        quantity: "150ml",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Black pepper",
        quantity: "to taste",
      },
      {
        name: "Fresh parsley (chopped)",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Boil the potatoes in their skins until tender, about 15–20 minutes. Let cool slightly, then peel and slice.",
      "In a pan, fry diced bacon until crispy. Remove bacon and sauté onions in the bacon fat until soft.",
      "Add vinegar, mustard, and broth to the pan. Bring to a simmer.",
      "Add sliced potatoes to a bowl. Pour the warm dressing over the potatoes and gently toss.",
      "Add cooked bacon, salt, and pepper to taste. Mix carefully.",
      "Let the salad sit for 10 minutes to absorb the flavors.",
      "Garnish with chopped parsley before serving.",
    ],
    tags: ["German", "Salad", "Easy", "Side Dish"],
    nutrition: {
      calories: 280,
      protein: "7g",
      carbs: "28g",
      fat: "16g",
    },
  },
  {
    id: "6",
    difficulty: "Hard",
    title: "Greek Moussaka",
    description:
      "A traditional Greek baked dish with layers of eggplant, spiced minced meat, and creamy béchamel sauce, baked to golden perfection.",
    imageUrl: greekMoussakaImage,
    category: "Main Course",
    prepTime: 90,
    serving: 6,
    ingridients: [
      { name: "Eggplants", quantity: "3 large" },
      { name: "Minced lamb or beef", quantity: "500g" },
      { name: "Onion (chopped)", quantity: "1 large" },
      { name: "Garlic cloves (minced)", quantity: "3" },
      { name: "Tomato paste", quantity: "2 tablespoons" },
      { name: "Canned tomatoes", quantity: "400g" },
      { name: "Red wine", quantity: "100ml" },
      { name: "Olive oil", quantity: "4 tablespoons" },
      { name: "Cinnamon", quantity: "1/2 teaspoon" },
      { name: "Nutmeg", quantity: "1/4 teaspoon" },
      { name: "Flour (for béchamel)", quantity: "50g" },
      { name: "Butter (for béchamel)", quantity: "50g" },
      { name: "Milk (for béchamel)", quantity: "500ml" },
      { name: "Egg yolks (for béchamel)", quantity: "2" },
      { name: "Grated parmesan", quantity: "50g" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black pepper", quantity: "to taste" },
    ],
    instructions: [
      "Slice eggplants, sprinkle with salt, and let sit for 30 minutes. Rinse and pat dry. Fry in olive oil until golden.",
      "In a pan, sauté onions and garlic. Add minced meat and cook until browned.",
      "Add tomato paste, canned tomatoes, red wine, cinnamon, nutmeg, salt, and pepper. Simmer for 30 minutes.",
      "For béchamel: melt butter, stir in flour, then gradually add milk. Cook until thick, then whisk in egg yolks, nutmeg, and parmesan.",
      "Layer fried eggplants, meat sauce, and béchamel in a baking dish. Repeat layers and finish with béchamel on top.",
      "Bake at 180°C for 40–45 minutes until golden and bubbling.",
      "Let rest 15 minutes before serving.",
    ],
    tags: ["Greek", "Main Course", "Traditional", "Baked"],
    nutrition: {
      calories: 550,
      protein: "30g",
      carbs: "22g",
      fat: "38g",
    },
  },
  {
    id: "7",
    difficulty: "Hard",
    title: "Feijoada",
    description:
      "A rich and hearty Brazilian black bean stew made with a variety of pork cuts, traditionally served with rice, farofa, and orange slices.",
    imageUrl: feijoadaImage,
    category: "Main Course",
    prepTime: 150,
    serving: 8,
    ingridients: [
      { name: "Black beans (dried)", quantity: "500g" },
      { name: "Pork shoulder (cubed)", quantity: "500g" },
      { name: "Smoked sausage (sliced)", quantity: "300g" },
      { name: "Bacon (diced)", quantity: "200g" },
      { name: "Pig's trotters (optional)", quantity: "2" },
      { name: "Onion (chopped)", quantity: "1 large" },
      { name: "Garlic cloves (minced)", quantity: "4" },
      { name: "Bay leaves", quantity: "2" },
      { name: "Olive oil", quantity: "3 tablespoons" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black pepper", quantity: "to taste" },
      { name: "Orange slices", quantity: "for serving" },
      { name: "Rice", quantity: "as side" },
      { name: "Farofa (toasted manioc flour)", quantity: "for garnish" },
    ],
    instructions: [
      "Soak the black beans overnight in plenty of water.",
      "In a large pot, sauté bacon in olive oil until crispy. Add pork shoulder and brown on all sides.",
      "Add sausage and pig's trotters (if using). Cook for a few minutes.",
      "Add onions and garlic. Sauté until softened.",
      "Drain beans and add to the pot along with enough water to cover everything.",
      "Add bay leaves, salt, and pepper. Simmer on low heat for about 2–3 hours, stirring occasionally, until beans are tender and flavors meld.",
      "Skim any excess fat off the surface.",
      "Serve with white rice, farofa, and orange slices to cut through the richness.",
    ],
    tags: ["Brazilian", "Stew", "Pork", "Traditional"],
    nutrition: {
      calories: 680,
      protein: "42g",
      carbs: "25g",
      fat: "45g",
    },
  },
  {
    id: "8",
    difficulty: "Easy",
    title: "Menemen",
    description:
      "A popular Turkish scrambled egg dish made with tomatoes, green peppers, onions, and spices — perfect for breakfast or a light lunch.",
    imageUrl: menemenImage,
    category: "Breakfast",
    prepTime: 20,
    serving: 2,
    ingridients: [
      { name: "Eggs", quantity: "4" },
      { name: "Ripe tomatoes (chopped)", quantity: "4" },
      { name: "Green peppers (sliced)", quantity: "2" },
      { name: "Onion (optional, chopped)", quantity: "1 small" },
      { name: "Olive oil", quantity: "3 tablespoons" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black pepper", quantity: "to taste" },
      { name: "Red pepper flakes", quantity: "1/2 teaspoon" },
      { name: "Parsley (for garnish)", quantity: "optional" },
    ],
    instructions: [
      "Heat olive oil in a pan and sauté onions (if using) and green peppers until softened.",
      "Add chopped tomatoes and cook until they break down and become saucy.",
      "Season with salt, pepper, and red pepper flakes.",
      "Crack eggs directly into the pan. Gently stir, letting eggs set partially before stirring again.",
      "Cook until eggs are softly set but still creamy.",
      "Serve immediately, garnished with fresh parsley.",
    ],
    tags: ["Turkish", "Breakfast", "Eggs", "Vegetarian"],
    nutrition: {
      calories: 220,
      protein: "10g",
      carbs: "8g",
      fat: "16g",
    },
  },
];

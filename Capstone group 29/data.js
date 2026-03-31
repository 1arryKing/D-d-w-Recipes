// ============================================================
// data.js — All Recipes & Categories
// ============================================================

const recipes = [

  // ===== ORIGINAL RECIPES =====

  {
    id: '1',
    name: 'Classic Scrambled Eggs',
    image: 'https://images.unsplash.com/photo-1600028657385-f5f772e618b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '10 mins',
    category: 'Breakfast',
    tags: [],
    ingredients: ['eggs', 'butter', 'salt', 'pepper', 'milk'],
    instructions: [
      'Crack eggs into a bowl and whisk with milk, salt, and pepper',
      'Heat butter in a non-stick pan over medium heat',
      'Pour in egg mixture and gently stir with a spatula',
      'Cook until eggs are softly set and slightly runny in places',
      'Remove from heat and serve immediately'
    ],
    description: 'Creamy, fluffy scrambled eggs perfect for a quick breakfast'
  },

  {
    id: '2',
    name: 'Tomato Basil Pasta',
    image: 'https://images.unsplash.com/photo-1761545832779-bc0b4290fc5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '20 mins',
    category: 'Dinner',
    tags: [],
    ingredients: ['pasta', 'tomato', 'garlic', 'basil', 'olive oil', 'salt', 'pepper'],
    instructions: [
      'Cook pasta according to package directions',
      'Dice tomatoes and mince garlic',
      'Heat olive oil in a pan and sauté garlic until fragrant',
      'Add diced tomatoes and cook for 5-7 minutes',
      'Toss cooked pasta with tomato sauce',
      'Add fresh basil, salt, and pepper to taste',
      'Serve hot with a drizzle of olive oil'
    ],
    description: 'Simple and delicious pasta with fresh tomatoes and basil'
  },

  {
    id: '3',
    name: 'Cheese Omelette',
    image: 'https://images.unsplash.com/photo-1717616870033-324057c397a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '15 mins',
    category: 'Breakfast',
    tags: [],
    ingredients: ['eggs', 'cheese', 'butter', 'salt', 'pepper'],
    instructions: [
      'Beat eggs with salt and pepper',
      'Heat butter in a pan over medium heat',
      'Pour in eggs and let set slightly',
      'Sprinkle cheese on one half',
      'Fold omelette in half and cook until cheese melts',
      'Slide onto plate and serve'
    ],
    description: 'Fluffy omelette filled with melted cheese'
  },

  {
    id: '4',
    name: 'Grilled Chicken Salad',
    image: 'https://images.unsplash.com/photo-1760888549075-0b9727e07735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '25 mins',
    category: 'Healthy Meals',
    tags: [],
    ingredients: ['chicken', 'lettuce', 'tomato', 'cucumber', 'olive oil', 'lemon', 'salt', 'pepper'],
    instructions: [
      'Season chicken with salt, pepper, and olive oil',
      'Grill chicken for 6-7 minutes per side',
      'Chop lettuce, tomatoes, and cucumbers',
      'Slice grilled chicken',
      'Combine vegetables in a bowl',
      'Top with sliced chicken',
      'Drizzle with olive oil and lemon juice'
    ],
    description: 'Healthy and protein-packed salad with grilled chicken'
  },

  {
    id: '5',
    name: 'Vegetable Stir Fry',
    image: 'Images/vegetableStir.jpg',
    cookingTime: '15 mins',
    category: 'Lunch',
    tags: [],
    ingredients: ['carrot', 'broccoli', 'bell pepper', 'onion', 'garlic', 'soy sauce', 'olive oil'],
    instructions: [
      'Chop all vegetables into bite-sized pieces',
      'Heat oil in a wok or large pan over high heat',
      'Add garlic and onion, stir for 1 minute',
      'Add harder vegetables (carrots, broccoli) first',
      'Stir fry for 3-4 minutes',
      'Add bell peppers and stir fry for 2 more minutes',
      'Add soy sauce and toss everything together',
      'Serve hot over rice if desired'
    ],
    description: 'Quick and colorful vegetable stir fry'
  },

  {
    id: '6',
    name: 'Chocolate Chip Cookies',
    image: 'https://images.unsplash.com/photo-1605553961639-57a466c7e5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '30 mins',
    category: 'Desserts',
    tags: [],
    ingredients: ['flour', 'butter', 'sugar', 'eggs', 'chocolate chips', 'vanilla', 'baking soda', 'salt'],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Cream together butter and sugar',
      'Beat in eggs and vanilla',
      'In a separate bowl, mix flour, baking soda, and salt',
      'Gradually blend dry ingredients into wet ingredients',
      'Stir in chocolate chips',
      'Drop spoonfuls onto baking sheet',
      'Bake for 10-12 minutes until golden brown',
      'Cool on wire rack'
    ],
    description: 'Classic homemade chocolate chip cookies'
  },

  {
    id: '7',
    name: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1561517146-dfbd99b0c14d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '5 mins',
    category: 'Breakfast',
    tags: [],
    ingredients: ['bread', 'avocado', 'lemon', 'salt', 'pepper', 'olive oil'],
    instructions: [
      'Toast bread until golden brown',
      'Mash avocado in a bowl',
      'Add lemon juice, salt, and pepper to avocado',
      'Spread avocado mixture on toast',
      'Drizzle with olive oil',
      'Optional: top with eggs or tomatoes'
    ],
    description: 'Trendy and nutritious avocado toast'
  },

  {
    id: '8',
    name: 'Chicken Fried Rice',
    image: 'Images/ChickenFriedRice.jpg',
    cookingTime: '20 mins',
    category: 'Dinner',
    tags: [],
    ingredients: ['rice', 'chicken', 'eggs', 'carrot', 'peas', 'soy sauce', 'garlic', 'onion', 'oil'],
    instructions: [
      'Cook rice and let it cool (use day-old rice if possible)',
      'Cut chicken into small pieces and cook in oil',
      'Remove chicken and scramble eggs in the same pan',
      'Add diced carrots and peas, stir fry for 2 minutes',
      'Add rice and break up any clumps',
      'Add chicken back to pan',
      'Pour soy sauce over everything and stir fry for 3-4 minutes',
      'Serve hot'
    ],
    description: 'Savory fried rice with chicken and vegetables'
  },

  {
    id: '9',
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1772302541031-a3b86115ba5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '15 mins',
    category: 'Lunch',
    tags: [],
    ingredients: ['lettuce', 'parmesan', 'bread', 'garlic', 'lemon', 'olive oil', 'salt', 'pepper'],
    instructions: [
      'Wash and chop romaine lettuce',
      'Make croutons by toasting bread cubes with garlic and olive oil',
      'In a bowl, mix olive oil, lemon juice, salt, and pepper for dressing',
      'Toss lettuce with dressing',
      'Add croutons and shaved parmesan',
      'Serve immediately'
    ],
    description: 'Classic Caesar salad with homemade croutons'
  },

  {
    id: '10',
    name: 'Banana Pancakes',
    image: 'https://images.unsplash.com/photo-1613333400161-e2d821410244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '20 mins',
    category: 'Breakfast',
    tags: [],
    ingredients: ['banana', 'eggs', 'flour', 'milk', 'butter', 'sugar', 'baking powder', 'salt'],
    instructions: [
      'Mash bananas in a large bowl',
      'Add eggs, milk, and melted butter, mix well',
      'In another bowl, combine flour, sugar, baking powder, and salt',
      'Pour wet ingredients into dry ingredients and mix until just combined',
      'Heat a griddle or pan over medium heat',
      'Pour batter to form pancakes',
      'Cook until bubbles form, then flip and cook other side',
      'Serve with syrup or fresh fruit'
    ],
    description: 'Fluffy banana pancakes perfect for weekend mornings'
  },

  {
    id: '11',
    name: 'Caprese Salad',
    image: 'https://images.unsplash.com/photo-1724154854089-4bbd0e7d09c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '10 mins',
    category: 'Healthy Meals',
    tags: [],
    ingredients: ['tomato', 'mozzarella', 'basil', 'olive oil', 'balsamic vinegar', 'salt', 'pepper'],
    instructions: [
      'Slice tomatoes and mozzarella into rounds',
      'Arrange alternating slices on a plate',
      'Tuck fresh basil leaves between slices',
      'Drizzle with olive oil and balsamic vinegar',
      'Sprinkle with salt and pepper',
      'Let sit for 5 minutes before serving'
    ],
    description: 'Fresh Italian salad with tomatoes and mozzarella'
  },

  {
    id: '12',
    name: 'Brownies',
    image: 'https://images.unsplash.com/photo-1762922425478-7049c54bfbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '35 mins',
    category: 'Desserts',
    tags: [],
    ingredients: ['chocolate', 'butter', 'sugar', 'eggs', 'flour', 'cocoa powder', 'vanilla', 'salt'],
    instructions: [
      'Preheat oven to 350°F (175°C)',
      'Melt chocolate and butter together',
      'Stir in sugar, eggs, and vanilla',
      'Mix in flour, cocoa powder, and salt',
      'Pour into greased baking pan',
      'Bake for 25-30 minutes',
      'Let cool before cutting into squares'
    ],
    description: 'Rich and fudgy chocolate brownies'
  },

  {
    id: '13',
    name: 'Greek Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1610858630667-4b658633a527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '5 mins',
    category: 'Breakfast',
    tags: [],
    ingredients: ['yogurt', 'granola', 'berries', 'honey'],
    instructions: [
      'Layer Greek yogurt in a glass or bowl',
      'Add a layer of granola',
      'Add a layer of fresh berries',
      'Repeat layers',
      'Drizzle with honey',
      'Serve immediately'
    ],
    description: 'Healthy and delicious breakfast parfait'
  },

  {
    id: '14',
    name: 'Beef Tacos',
    image: 'https://images.unsplash.com/photo-1640983743761-4f0e0204bc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '25 mins',
    category: 'Dinner',
    tags: [],
    ingredients: ['beef', 'tortillas', 'tomato', 'lettuce', 'cheese', 'onion', 'sour cream', 'taco seasoning'],
    instructions: [
      'Brown ground beef in a pan',
      'Add taco seasoning and water, simmer until thickened',
      'Warm tortillas',
      'Chop lettuce, tomatoes, and onions',
      'Assemble tacos with beef and toppings',
      'Top with cheese and sour cream',
      'Serve hot'
    ],
    description: 'Tasty beef tacos with all the fixings'
  },

  {
    id: '15',
    name: 'Quinoa Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1525790428446-ad5140bdd234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '30 mins',
    category: 'Healthy Meals',
    tags: [],
    ingredients: ['quinoa', 'chickpeas', 'avocado', 'spinach', 'carrot', 'cucumber', 'lemon', 'olive oil'],
    instructions: [
      'Cook quinoa according to package directions',
      'Roast chickpeas with olive oil and spices',
      'Chop vegetables',
      'Arrange quinoa, chickpeas, and vegetables in a bowl',
      'Add sliced avocado',
      'Drizzle with olive oil and lemon juice',
      'Season with salt and pepper'
    ],
    description: 'Nutritious Buddha bowl packed with protein and vegetables'
  },

  {
    id: '16',
    name: 'French Toast',
    image: 'https://images.unsplash.com/photo-1762370861019-488fd3b8dbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '15 mins',
    category: 'Breakfast',
    tags: [],
    ingredients: ['bread', 'eggs', 'milk', 'cinnamon', 'vanilla', 'butter', 'sugar'],
    instructions: [
      'Whisk together eggs, milk, cinnamon, vanilla, and sugar',
      'Heat butter in a pan over medium heat',
      'Dip bread slices in egg mixture',
      'Cook until golden brown on both sides',
      'Serve with syrup, powdered sugar, or fresh fruit'
    ],
    description: 'Sweet and cinnamon-spiced French toast'
  },

  {
    id: '17',
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '25 mins',
    category: 'Dinner',
    tags: [],
    ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'basil', 'olive oil', 'salt'],
    instructions: [
      'Preheat oven to 475°F (245°C)',
      'Roll out pizza dough',
      'Spread tomato sauce evenly',
      'Add sliced mozzarella',
      'Drizzle with olive oil and sprinkle with salt',
      'Bake for 12-15 minutes',
      'Top with fresh basil leaves',
      'Slice and serve hot'
    ],
    description: 'Classic Italian pizza with fresh mozzarella and basil'
  },

  {
    id: '18',
    name: 'Apple Crumble',
    image: 'https://images.unsplash.com/photo-1772547103123-823bfb230fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    cookingTime: '45 mins',
    category: 'Desserts',
    tags: [],
    ingredients: ['apples', 'flour', 'butter', 'sugar', 'oats', 'cinnamon', 'salt'],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Peel and slice apples, place in baking dish',
      'Mix apples with cinnamon and a tablespoon of sugar',
      'In a bowl, combine flour, oats, remaining sugar, and salt',
      'Cut in butter until mixture is crumbly',
      'Spread crumble topping over apples',
      'Bake for 35-40 minutes until golden and bubbly',
      'Serve warm with ice cream'
    ],
    description: 'Warm apple crumble with a crispy oat topping'
  },


  // ===== GHANAIAN DISHES =====

  {
    id: '20',
    name: 'Jollof Rice',
    image: 'Images/Jollof.jpg',
    cookingTime: '1 hour',
    category: 'Dinner',
    tags: ['ghanaian'],
    ingredients: ['rice', 'tomatoes', 'tomato paste', 'onion', 'pepper', 'garlic', 'ginger', 'chicken stock', 'bay leaves', 'thyme', 'oil', 'salt'],
    instructions: [
      'Blend tomatoes, onion, pepper, garlic, and ginger into a smooth paste',
      'Heat oil in a pot and fry the blended mixture for 15-20 minutes until it dries out',
      'Add tomato paste and stir, cook for another 5 minutes',
      'Pour in chicken stock and season with salt, thyme, and bay leaves',
      'Bring to a boil then add washed rice',
      'Stir well, reduce heat to low, cover and cook for 30 minutes',
      'Check and stir halfway through to prevent burning',
      'Serve hot with chicken, fish, or plantain'
    ],
    description: 'Ghana\'s iconic party rice — smoky, rich, and full of flavour'
  },

  {
    id: '21',
    name: 'Kelewele (Spiced Fried Plantain)',
    image: 'Images/kelewele.jpeg',
    cookingTime: '20 mins',
    category: 'Snacks',
    tags: ['ghanaian'],
    ingredients: ['ripe plantain', 'ginger', 'pepper', 'salt', 'cloves', 'oil'],
    instructions: [
      'Peel and cut plantain into cubes',
      'Blend ginger, pepper, and cloves into a paste',
      'Mix spice paste with plantain and salt, leave to marinate for 10 minutes',
      'Heat oil in a deep pan to medium-high',
      'Fry plantain in batches until golden and crispy outside',
      'Drain on paper towels',
      'Serve hot as a snack or side dish'
    ],
    description: 'Fiery spiced fried plantain — Ghana\'s favourite street snack'
  },

  {
    id: '22',
    name: 'Groundnut Soup (Peanut Soup)',
    image: 'Images/Groundnutsoup.jpg',
    cookingTime: '1 hour 15 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['chicken', 'groundnut paste', 'tomatoes', 'onion', 'pepper', 'ginger', 'garlic', 'salt', 'water'],
    instructions: [
      'Season chicken with salt, ginger, and garlic and cook until tender',
      'Blend tomatoes, onion, and pepper and fry in oil until thickened',
      'Add groundnut paste to the tomato base and stir well',
      'Pour in water or stock gradually, stirring to avoid lumps',
      'Add the cooked chicken and simmer for 20-30 minutes',
      'Adjust seasoning to taste',
      'Serve with fufu, rice, or banku'
    ],
    description: 'Creamy, nutty Ghanaian peanut soup — comfort food at its finest'
  },

  {
    id: '23',
    name: 'Waakye (Rice and Beans)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.6b9jp8gNMrd-hhTgQ3UYCAHaFO%3Fpid%3DApi&sp=1774953106T49981237235bd2e8315dd4c6b9fc424e985b968eb64de03b4fedab607fc34a1b',
    cookingTime: '1 hour',
    category: 'Lunch',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['rice', 'black-eyed beans', 'millet leaves', 'salt', 'water'],
    instructions: [
      'Wash beans and soak for 30 minutes',
      'Boil beans with millet leaves until half cooked',
      'Remove millet leaves and add washed rice',
      'Season with salt and add water if needed',
      'Cook on low heat until both rice and beans are soft',
      'Serve with waakye stew, spaghetti, eggs, and fried fish'
    ],
    description: 'Ghana\'s beloved street food — rice and beans slow-cooked to perfection'
  },

  {
    id: '24',
    name: 'Banku and Tilapia',
    image: 'https://afrocipe.co.uk/wp-content/uploads/2024/12/banku-and-tilapia-768x768-1.png',
    cookingTime: '1 hour 30 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['fermented corn dough', 'cassava dough', 'tilapia', 'pepper', 'onion', 'tomatoes', 'salt', 'oil', 'ginger', 'garlic'],
    instructions: [
      'Mix fermented corn dough and cassava dough together with water',
      'Cook dough mixture in a pot over medium heat, stirring constantly',
      'Continue stirring and folding for 30-40 minutes until banku is smooth and stretchy',
      'Season tilapia with salt, ginger, and pepper',
      'Grill or fry tilapia until cooked through',
      'Blend tomatoes, pepper, and onion for pepper sauce',
      'Fry pepper sauce in oil until thick',
      'Serve banku with tilapia and pepper sauce'
    ],
    description: 'Classic Ghanaian banku paired with perfectly grilled tilapia'
  },

  {
    id: '25',
    name: 'Fufu and Light Soup',
    image: 'Images/Fufu.jpg',
    cookingTime: '1 hour 30 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['cassava', 'plantain', 'chicken or goat meat', 'tomatoes', 'pepper', 'onion', 'ginger', 'salt', 'water'],
    instructions: [
      'Boil cassava and plantain separately until soft',
      'Pound cassava and plantain together until smooth and stretchy',
      'Season meat with salt, ginger, and garlic and boil until tender',
      'Blend tomatoes, pepper, and onion',
      'Add blended mixture to meat broth and simmer for 20 minutes',
      'Season to taste',
      'Mold fufu into balls and serve in the light soup'
    ],
    description: 'The ultimate Ghanaian comfort meal — silky fufu in a light, peppery broth'
  },

  {
    id: '26',
    name: 'Kontomire Stew (Palava Sauce)',
    image: 'Images/KontomireStew.jpg',
    cookingTime: '45 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['kontomire leaves', 'palm oil', 'onion', 'tomatoes', 'pepper', 'salted fish', 'eggs', 'salt'],
    instructions: [
      'Wash and blanch kontomire leaves, then squeeze out excess water',
      'Chop the leaves finely',
      'Heat palm oil and fry onions until soft',
      'Add blended tomatoes and pepper and cook until oil rises',
      'Add salted fish and stir',
      'Add chopped kontomire and mix well',
      'Beat eggs and stir into the stew',
      'Cook for 5 more minutes and serve with boiled yam, plantain, or rice'
    ],
    description: 'Hearty Ghanaian spinach stew cooked in palm oil with fish and eggs'
  },

  {
    id: '27',
    name: 'Omo Tuo (Rice Balls)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.gX9lwre38jtsyxgY_qd1XQHaFj%3Fpid%3DApi&sp=1774953216T0a40dca2e3e635c7bf57aaeac01f3279d8f4a2238c5ca386c67efeabb04dd783',
    cookingTime: '40 mins',
    category: 'Lunch',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['short grain rice', 'water', 'salt'],
    instructions: [
      'Wash rice thoroughly',
      'Cook rice with more water than usual until very soft and sticky',
      'Mash the cooked rice while still in the pot until smooth',
      'Wet your hands and shape the rice into smooth balls',
      'Serve with groundnut soup or palm nut soup'
    ],
    description: 'Soft Ghanaian rice balls — the perfect companion to groundnut soup'
  },

  {
    id: '28',
    name: 'Tuo Zaafi (TZ)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.R0m3oKzH8m1kMp-pgDgW8wHaIN%3Fpid%3DApi&sp=1774953247T4eb8da9363c8632135eaaf9e75423d7041b85f0211ece8082003be368199a4c2',
    cookingTime: '45 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['millet flour', 'water', 'salt', 'dawadawa', 'okro', 'palm nut soup'],
    instructions: [
      'Bring water to a boil in a pot',
      'Mix millet flour with cold water to form a smooth paste',
      'Pour paste into boiling water, stirring constantly',
      'Cook and stir for 20-25 minutes until thick and smooth',
      'Add salt and dawadawa and stir well',
      'Serve with ayoyo (jute leaves) or okro soup'
    ],
    description: 'Northern Ghana\'s staple — thick millet porridge served with spiced soup'
  },

  {
    id: '29',
    name: 'Abenkwan (Palm Nut Soup)',
    image: 'https://afrifoodnetwork.com/wp-content/uploads/2016/11/Abenkwan.jpg',
    cookingTime: '1 hour 30 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['palm nut cream', 'chicken or crab', 'tomatoes', 'onion', 'pepper', 'ginger', 'garlic', 'salt'],
    instructions: [
      'Season meat or crab with salt, ginger, and garlic and cook until tender',
      'Blend tomatoes, onion, and pepper',
      'Add palm nut cream to a pot and bring to a gentle boil',
      'Add blended tomato mixture and stir',
      'Add cooked meat or crab and the stock',
      'Simmer for 20-25 minutes, stirring occasionally',
      'Season to taste',
      'Serve with fufu, banku, or omo tuo'
    ],
    description: 'Rich and aromatic palm nut soup — a Ghanaian delicacy'
  },

  {
    id: '30',
    name: 'Meat Pie',
    image: 'https://kikifoodies.com/wp-content/uploads/2024/12/3A8364CE-2F40-4ABD-BD01-72AF8BF5CDEC.jpeg',
    cookingTime: '1 hour',
    category: 'Snacks',
    tags: ['ghanaian'],
    ingredients: ['flour', 'butter', 'egg', 'beef', 'onion', 'carrot', 'potato', 'curry powder', 'pepper', 'salt', 'water'],
    instructions: [
      'Make pastry by mixing flour, butter, and salt until crumbly',
      'Add egg and cold water, knead into a smooth dough and rest for 20 minutes',
      'Cook diced beef with onion, carrot, potato, curry powder, and seasoning until dry',
      'Roll out dough and cut into circles',
      'Place filling on one half of each circle',
      'Fold over and crimp edges to seal',
      'Brush with egg wash',
      'Bake at 180°C for 25-30 minutes until golden'
    ],
    description: 'Flaky pastry stuffed with spiced beef and vegetables — Ghana\'s classic snack'
  },

  {
    id: '31',
    name: 'Bofrot (Puff Puff)',
    image: 'https://i0.wp.com/travelandmunchies.com/wp-content/uploads/2022/11/IMG_0039.jpg?resize=1536%2C1097&ssl=1',
    cookingTime: '40 mins',
    category: 'Snacks',
    tags: ['ghanaian'],
    ingredients: ['flour', 'sugar', 'yeast', 'warm water', 'nutmeg', 'salt', 'oil'],
    instructions: [
      'Mix flour, sugar, yeast, nutmeg, and salt in a bowl',
      'Add warm water gradually and mix into a thick batter',
      'Cover and let rise for 30 minutes until doubled',
      'Heat oil in a deep pot to medium heat',
      'Scoop batter with a spoon and drop into oil',
      'Fry in batches until golden brown all around',
      'Drain and serve warm'
    ],
    description: 'Soft and fluffy Ghanaian doughnuts — perfect with a cold drink'
  },

  {
    id: '32',
    name: 'Ampesi with Garden Egg Stew',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.vNYUcXMFo8wD1_PAdymVsQHaEK%3Fpid%3DApi&sp=1774949533T18fc558cb6f6c1d8236cb8bb3b03903eeb7cecdcb3e31db286d501de02455bdf',
    cookingTime: '50 mins',
    category: 'Lunch',
    tags: ['ghanaian', 'healthy'],
    ingredients: ['yam', 'cocoyam', 'garden eggs', 'tomatoes', 'onion', 'pepper', 'salted fish', 'palm oil', 'salt'],
    instructions: [
      'Peel and boil yam and cocoyam until soft',
      'Boil garden eggs until soft, then blend roughly',
      'Fry onions in palm oil until golden',
      'Add blended tomatoes and pepper and cook until thickened',
      'Add garden egg mixture and salted fish',
      'Cook for 10 minutes, season to taste',
      'Serve boiled yam and cocoyam with garden egg stew'
    ],
    description: 'Boiled yam and cocoyam served with a rich garden egg and fish stew'
  },

  {
    id: '33',
    name: 'Ga Kenkey with Pepper Sauce',
    image: 'Images/GaKenkeywithfriedfish.jpg.jpeg',
    cookingTime: '2 hours',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['fermented corn dough', 'banana leaves or corn husks', 'fried fish', 'tomatoes', 'pepper', 'onion', 'salt', 'oil'],
    instructions: [
      'Divide fermented corn dough into two portions',
      'Cook one half in a pot with water, stirring until thick (aflata)',
      'Mix cooked dough back into raw dough and combine well',
      'Wrap portions in banana leaves or corn husks',
      'Steam wrapped kenkey for 1 hour until firm',
      'Blend tomatoes, pepper, and onion for sauce and fry in oil',
      'Serve kenkey with pepper sauce and fried fish'
    ],
    description: 'Fermented corn dumpling — a cornerstone of Ga cuisine'
  },

  {
    id: '34',
    name: 'Red Red (Bean Stew with Plantain)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.FKgae4dkEVk3BK9CJDBdGwHaEK%3Fpid%3DApi&sp=1774949635Td89573462c0f1ca676abb610c825db5e6d85f12bf04aacec7d44a707ebbc2579',
    cookingTime: '1 hour',
    category: 'Lunch',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['black-eyed beans', 'palm oil', 'onion', 'tomatoes', 'pepper', 'salted fish', 'ripe plantain', 'oil', 'salt'],
    instructions: [
      'Soak and boil beans until soft',
      'Fry onions in palm oil until golden',
      'Add blended tomatoes and pepper and cook well',
      'Add beans to the stew and stir, add stock if needed',
      'Add salted fish and season to taste',
      'Simmer for 10 minutes',
      'Fry sliced ripe plantain in oil until golden on both sides',
      'Serve bean stew with fried plantain'
    ],
    description: 'Ghanaian black-eyed bean stew in palm oil, served with sweet fried plantain'
  },

  {
    id: '35',
    name: 'Tuna Fried Rice (Ghana Style)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.lea9COnUwByO-vHYUE5wzgHaHa%3Fpid%3DApi&sp=1774949690Tac427a693c59640801b5202aa095deabb8e5cba431f10a70dfaab1b7334e7f4a',
    cookingTime: '30 mins',
    category: 'Lunch',
    tags: ['ghanaian'],
    ingredients: ['cooked rice', 'canned tuna', 'eggs', 'onion', 'pepper', 'carrot', 'spring onion', 'soy sauce', 'oil', 'salt'],
    instructions: [
      'Heat oil in a large pan or wok over high heat',
      'Scramble eggs in the pan and set aside',
      'Fry onion and pepper for 2 minutes',
      'Add diced carrot and stir fry for 3 minutes',
      'Add cooked rice and break up any lumps',
      'Add drained tuna and stir everything together',
      'Add eggs back in and mix',
      'Season with soy sauce and salt',
      'Garnish with spring onion and serve hot'
    ],
    description: 'Ghana-style tuna fried rice — quick, filling, and full of flavour'
  },

  {
    id: '36',
    name: 'Abomu (Spicy Garden Egg Dip)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpCIon4H7_xc%2Fmaxresdefault.jpg&sp=1774949840Tf65e1f211a66a7ba2b40f2d9c6a5ca8cfad9b699ffebca77f5efa188d97a0059',
    cookingTime: '15 mins',
    category: 'Snacks',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['pepper', 'onion', 'tomatoes', 'garden eggs', 'salted fish', 'dawadawa', 'palm oil', 'salt'],
    instructions: [
      'Roast pepper, tomatoes, onion, and garden eggs',
      'Grind or blend all roasted ingredients roughly in an asanka or blender',
      'Add dawadawa and salted fish and mix well',
      'Stir in a little palm oil',
      'Season with salt to taste',
      'Serve as a dip with kontomire, boiled yam, or kenkey'
    ],
    description: 'Traditional Ghanaian spiced pepper dip ground fresh in an asanka pot'
  },

  {
    id: '37',
    name: 'Koko (Hausa Porridge)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.M2QXkByUbY0YnvTsw_GwWAHaEK%3Fpid%3DApi&sp=1774949930T60b177bd1c59e67c93f4b65d4fc32826db8bbbd6d7c7c7cb9e290fd27701fe17',
    cookingTime: '30 mins',
    category: 'Breakfast',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['millet', 'water', 'ginger', 'pepper', 'cloves', 'sugar', 'milk'],
    instructions: [
      'Grind millet into a fine flour',
      'Mix millet flour with cold water to form a smooth paste',
      'Boil water with ginger, pepper, and cloves',
      'Strain spice water and bring back to boil',
      'Pour millet paste slowly into boiling spice water, stirring constantly',
      'Cook for 15-20 minutes until smooth and thick',
      'Add sugar to taste',
      'Serve hot with milk and koose or bread'
    ],
    description: 'Spiced millet porridge — a warming Northern Ghanaian breakfast'
  },

  {
    id: '38',
    name: 'Nkontomire with Boiled Plantain',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.c34IYuhMtA-Y_wxOcyEm2QHaHg%3Fpid%3DApi&sp=1774949988Td5c2b691cccb91deca931356d3d43159ec40d4bd2b197eb23d240a2e24ff779b',
    cookingTime: '35 mins',
    category: 'Lunch',
    tags: ['ghanaian', 'healthy'],
    ingredients: ['kontomire leaves', 'plantain', 'onion', 'tomatoes', 'pepper', 'palm oil', 'dried fish', 'salt'],
    instructions: [
      'Peel and boil plantain in salted water until soft',
      'Wash and boil kontomire leaves, then chop finely',
      'Fry onion in palm oil until translucent',
      'Add tomatoes and pepper and cook until oil floats',
      'Add dried fish and stir',
      'Add chopped kontomire and combine well',
      'Simmer for 5 minutes and adjust seasoning',
      'Serve kontomire sauce with boiled plantain'
    ],
    description: 'Nutritious kontomire leaves cooked in palm oil, served with soft boiled plantain'
  },

  {
    id: '39',
    name: 'Tubani (Bean Cake)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.DT8hLs8UfDPKFOjawTB-pQHaHa%3Fpid%3DApi&sp=1774950029T05ab840b5f5bf19c4385bbad3632df993274157c875cbbb268b391e281f8132a',
    cookingTime: '1 hour',
    category: 'Snacks',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['black-eyed beans', 'onion', 'pepper', 'salt', 'water', 'banana leaves or foil'],
    instructions: [
      'Soak beans overnight and peel off the skins',
      'Blend beans with onion and a little water into a smooth thick paste',
      'Add pepper and salt and mix well',
      'Scoop portions onto banana leaves or foil and wrap tightly',
      'Steam wrapped portions for 35-40 minutes',
      'Unwrap and serve warm as a snack or breakfast'
    ],
    description: 'Steamed bean cake seasoned with onion and pepper — a healthy Ghanaian snack'
  },

  {
    id: '40',
    name: 'Mpotompoto (Cocoyam Porridge)',
    image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.He__piRmgJKVtboXEVkTKQHaHa%3Fpid%3DApi&sp=1774950057Tfe3bd947e02a3a4af779bc44f5488d76278a266b7f44f19beae2881cc21bd6a2',
    cookingTime: '50 mins',
    category: 'Lunch',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['cocoyam', 'palm oil', 'onion', 'tomatoes', 'pepper', 'salted fish', 'kontomire leaves', 'salt'],
    instructions: [
      'Peel and cut cocoyam into chunks',
      'Boil cocoyam in water with salt until soft',
      'Fry onion in palm oil, add tomatoes and pepper',
      'Add salted fish and cook for 5 minutes',
      'Add the sauce to the cocoyam pot',
      'Mash some of the cocoyam into the stew to thicken',
      'Add chopped kontomire and cook for 5 more minutes',
      'Serve warm as a one-pot meal'
    ],
    description: 'Thick, hearty cocoyam porridge cooked with palm oil and greens'
  },

  {
    id: '41',
    name: 'Simple and Healthy Okro Stew',
    image: 'Images/Okrrosoup.jpg',
    cookingTime: '45 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'healthy'],
    ingredients: ['okro', 'onion', 'fermented fish', 'pepper', 'ginger', 'garlic', 'tomatoes', 'salt', 'garden eggs', 'fried fish', 'mushrooms'],
    instructions: [
      'Add chopped onions and fermented fish to a pot and heat gently',
      'Add blended pepper, ginger, and garlic mixture and stir',
      'Allow mixture to cook and release aroma',
      'Add chopped tomatoes and cook until soft',
      'Blend okro with onions until smooth',
      'Pour okro mixture into the pot and stir',
      'Add salt lightly due to salted fish',
      'Cook until stew thickens slightly',
      'Add garden eggs and stir gently',
      'Add fried fish and mushrooms',
      'Allow to cook until everything is well combined',
      'Remove from heat and serve with your preferred swallow'
    ],
    description: 'Nutritious okro stew packed with vegetables and protein'
  },

  {
    id: '42',
    name: 'Black Eye Beans and Jasmine Rice',
    image: 'Images/Blackeyedbeans.jpg',
    cookingTime: '45 mins',
    category: 'Lunch',
    tags: ['healthy'],
    ingredients: ['black eye beans', 'jasmine rice', 'onion', 'coconut oil', 'salt', 'water'],
    instructions: [
      'Rinse beans thoroughly and boil until tender',
      'Chop onion finely',
      'Heat coconut oil in a pot',
      'Sauté onions until translucent',
      'Add cooked beans to the pot',
      'Add jasmine rice and mix',
      'Add water and salt',
      'Cover and cook on low heat until rice is soft',
      'Fluff and serve warm'
    ],
    description: 'Healthy rice and beans cooked with coconut oil'
  },

  {
    id: '43',
    name: 'Zobo Drink',
    image: 'Images/zobodrink.png',
    cookingTime: '50 mins',
    category: 'Drinks',
    tags: ['refreshing'],
    ingredients: ['zobo leaves', 'pineapple', 'water', 'cloves', 'ginger', 'mint', 'rosemary', 'sugar', 'ice'],
    instructions: [
      'Wash pineapple thoroughly and peel, keeping the skin',
      'Rinse zobo leaves multiple times to remove dirt',
      'Add pineapple peel and zobo leaves to a pot',
      'Add water, cloves, ginger, mint, and rosemary',
      'Boil for 30 minutes',
      'Blend or juice pineapple flesh separately',
      'Strain the zobo mixture and allow to cool slightly',
      'Add sugar and stir to dissolve',
      'Mix in fresh pineapple juice',
      'Chill with ice and serve cold'
    ],
    description: 'Refreshing hibiscus drink infused with pineapple and spices'
  },

  {
    id: '44',
    name: 'Yam and Spinach with Eggs and Cured Fish',
    image: 'Images/Yamandspinatch.jpg',
    cookingTime: '40 mins',
    category: 'Lunch',
    tags: ['ghanaian', 'healthy'],
    ingredients: ['yam', 'spinach', 'tomato', 'onion', 'pepper', 'eggs', 'avocado', 'koobi', 'momoni', 'shrimp powder', 'palm oil', 'salt'],
    instructions: [
      'Peel and boil yam until soft',
      'Chop spinach, tomato, onion, and pepper',
      'Heat palm oil and sauté onions',
      'Add tomatoes and pepper and cook',
      'Add cured fish and stir',
      'Add shrimp powder and seasoning',
      'Add spinach and cook until wilted',
      'Fry eggs separately',
      'Serve yam with spinach mixture and eggs',
      'Add sliced avocado on the side'
    ],
    description: 'Balanced meal with yam, greens, protein, and healthy fats'
  },

  {
    id: '45',
    name: 'Fresh Vegetable and Boiled Egg Salad',
    image: 'Images/CucumberSalad.jpg',
    cookingTime: '15 mins',
    category: 'Healthy Meals',
    tags: ['healthy', 'quick'],
    ingredients: ['cucumber', 'carrot', 'tomato', 'red onion', 'vinegar', 'mayonnaise', 'honey', 'boiled eggs'],
    instructions: [
      'Wash and chop all vegetables into small pieces',
      'Place vegetables in a bowl',
      'Add vinegar, mayonnaise, and honey',
      'Mix until well combined',
      'Chop boiled eggs and gently fold into salad',
      'Serve fresh'
    ],
    description: 'Creamy vegetable salad with boiled eggs'
  },

  {
    id: '46',
    name: 'Chicken Salad',
    image: 'Images/ChickenSalad.png',
    cookingTime: '35 mins',
    category: 'Healthy Meals',
    tags: ['protein'],
    ingredients: ['chicken tenders', 'flour', 'panko breadcrumbs', 'seasoning', 'oregano', 'ginger powder', 'paprika', 'lettuce', 'cucumber', 'carrot', 'tomato', 'onion'],
    instructions: [
      'Season chicken with spices',
      'Coat chicken in flour mixture',
      'Dip in breadcrumbs',
      'Cook until golden and fully cooked',
      'Chop vegetables',
      'Combine chicken with vegetables',
      'Serve with dressing'
    ],
    description: 'Crispy chicken served over fresh vegetables'
  },

  {
    id: '47',
    name: 'Agushi Stew',
    image: 'Images/KontomireStew.jpg',
    cookingTime: '1 hour 20 mins',
    category: 'Dinner',
    tags: ['ghanaian', 'traditional'],
    ingredients: ['kontomire leaves', 'meat', 'palm oil', 'onion', 'momoni', 'tomato sauce', 'pepper', 'shrimp powder', 'mackerel', 'agushi', 'yam', 'eggs', 'salt'],
    instructions: [
      'Season and cook meat until tender',
      'Add palm oil and onions to the pot',
      'Add momoni and allow to melt into oil',
      'Add tomato sauce and pepper',
      'Cook mixture for 10 minutes',
      'Add shrimp powder and fish',
      'Add chopped kontomire leaves and cook',
      'Prepare agushi by mixing with water and onion',
      'Cook agushi in palm oil until crumbly',
      'Add agushi to stew and simmer',
      'Boil yam separately until soft',
      'Serve palaba sauce with yam or rice'
    ],
    description: 'Rich Ghanaian kontomire stew with agushi and assorted proteins'
  },
  {
    id: '48',
    name: 'Gari Soaking with Milk',
    image: 'Images/GariSoke.jpg.jpeg',
    cookingTime: '5 mins',
    category: 'Snack',
    tags: ['ghanaian', 'quick', 'traditional'],
    ingredients: ['gari', 'milk', 'sugar', 'peanuts', 'ice cubes', 'water'],
    instructions: [
      'Add desired amount of gari to a bowl',
      'Pour cold water over the gari to cover it',
      'Stir briefly and drain off the water (to remove any particles)',
      'Add sugar to taste and mix well',
      'Pour in chilled milk (fresh or evaporated) gradually while stirring to desired consistency',
      'Add roasted peanuts and ice cubes',
      'Stir everything together and serve immediately'
    ]
  }

];


// ===== CATEGORIES =====
const categories = [
  { name: 'Breakfast',     icon: '🍳',  description: 'Start your day right' },
  { name: 'Lunch',         icon: '🥗',  description: 'Midday meals' },
  { name: 'Dinner',        icon: '🍽️', description: 'Evening favourites' },
  { name: 'Desserts',      icon: '🍰',  description: 'Sweet treats' },
  { name: 'Healthy Meals', icon: '🥑',  description: 'Nutritious options' },
  { name: 'Snacks',        icon: '🥐',  description: 'Light bites & street food' },
  { name: 'Drinks',        icon: '🥤',  description: 'Refreshing beverages' },
  { name: 'Ghanaian',      icon: '🇬🇭', description: 'Traditional Ghanaian dishes' }
];

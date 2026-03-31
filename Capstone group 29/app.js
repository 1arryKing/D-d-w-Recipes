// ============================================================
// app.js — Router + Dynamic Data Only
// ============================================================


// ===== STATE =====
let currentIngredients = [];


// ===== PAGE IDs =====
const ALL_PAGES = [
    'page-home',
    'page-categories',
    'page-category-detail',
    'page-recipes',
    'page-recipe-detail',
    'page-about',
    'page-404'
];


// ============================================================
// INITIALISE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initRouter();
    handleRoute();
});


// ============================================================
// ROUTER
// ============================================================
function initRouter() {
    window.addEventListener('hashchange', handleRoute);
}

function handleRoute() {
    const hash  = window.location.hash.slice(1) || 'home';
    const [route, param] = hash.split('/');

    // Close mobile menu on every navigation
    document.getElementById('mobile-nav').classList.remove('active');

    // Highlight correct nav link
    updateActiveNavLinks(route);

    // Show the right page
    switch (route) {
        case 'home':
            showPage('page-home');
            setupIngredientInput();
            renderIngredientTags();
            renderRecipeResults();
            break;

        case 'categories':
            showPage('page-categories');
            populateCategoryGrid();
            break;

        case 'category':
            showPage('page-category-detail');
            populateCategoryDetail(decodeURIComponent(param));
            break;

        case 'recipes':
            showPage('page-recipes');
            populateAllRecipes();
            break;

        case 'recipe':
            showPage('page-recipe-detail');
            populateRecipeDetail(param);
            break;

        case 'about':
            showPage('page-about');
            break;

        default:
            showPage('page-404');
    }

    window.scrollTo(0, 0);
}


// ============================================================
// showPage
// Hides every page section, then reveals only the one we want.
// ============================================================
function showPage(pageId) {
    ALL_PAGES.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';
}


// ============================================================
// ACTIVE NAV LINKS
// ============================================================
function updateActiveNavLinks(route) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').slice(1);
        link.classList.toggle('active', href === route);
    });
}


// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('mobile-nav');
    if (btn && nav) {
        btn.addEventListener('click', () => nav.classList.toggle('active'));
    }
}


// ============================================================
// HOME PAGE — ingredient input setup
// ============================================================
function setupIngredientInput() {
    const old = document.getElementById('ingredient-input');
    if (!old) return;
    const fresh = old.cloneNode(true);
    old.parentNode.replaceChild(fresh, old);
    fresh.addEventListener('keypress', e => {
        if (e.key === 'Enter') addIngredient();
    });
}


// ============================================================
// CATEGORIES PAGE — fill the grid with category cards
// ============================================================
function populateCategoryGrid() {
    const grid = document.getElementById('category-grid');
    if (!grid) return;

    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="navigateToCategory('${cat.name}')">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p>${cat.description}</p>
        </div>
    `).join('');
}


// ============================================================
// CATEGORY DETAIL PAGE — fill title, count, and recipe grid
// ============================================================
function populateCategoryDetail(categoryName) {
    const titleEl = document.getElementById('category-detail-title');
    const countEl = document.getElementById('category-detail-count');
    const grid    = document.getElementById('category-detail-grid');
    if (!grid) return;

    const filtered = categoryName === 'Ghanaian'
        ? recipes.filter(r => r.tags && r.tags.includes('ghanaian'))
        : recipes.filter(r => r.category === categoryName);

    if (titleEl) titleEl.textContent = categoryName;
    if (countEl) countEl.textContent = `Found ${filtered.length} recipe${filtered.length !== 1 ? 's' : ''}`;

    grid.innerHTML = filtered.map(r => createRecipeCard(r)).join('');
}


// ============================================================
// ALL RECIPES PAGE — fill the full grid
// ============================================================
function populateAllRecipes() {
    const countEl = document.getElementById('all-recipes-count');
    const grid    = document.getElementById('all-recipes-grid');
    if (!grid) return;

    if (countEl) countEl.textContent = `${recipes.length} delicious recipes to try`;
    grid.innerHTML = recipes.map(r => createRecipeCard(r)).join('');
}


// ============================================================
// RECIPE DETAIL PAGE
// ============================================================
function populateRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);

    if (!recipe) {
        showPage('page-404');
        return;
    }

    // Reset image visibility for re-visits
    const img         = document.getElementById('recipe-detail-image');
    const placeholder = document.getElementById('recipe-detail-placeholder');
    img.style.display         = 'block';
    placeholder.style.display = 'none';

    // Fill every pre-existing element in index.html
    document.getElementById('recipe-detail-name').textContent        = recipe.name;
    document.getElementById('recipe-detail-time').textContent        = `⏱️ ${recipe.cookingTime}`;
    document.getElementById('recipe-detail-category').textContent    = `📂 ${recipe.category}`;
    document.getElementById('recipe-detail-description').textContent = recipe.description;

    img.src = recipe.image || '';
    img.alt = recipe.name;

    const ghanaEl = document.getElementById('recipe-detail-ghana');
    if (ghanaEl) {
        ghanaEl.style.display = (recipe.tags && recipe.tags.includes('ghanaian')) ? 'inline' : 'none';
    }

    document.getElementById('recipe-detail-ingredients').innerHTML =
        recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

    document.getElementById('recipe-detail-instructions').innerHTML =
        recipe.instructions.map(step => `<li>${step}</li>`).join('');
}


// ============================================================
// RECIPE CARD TEMPLATE
// ============================================================
function createRecipeCard(recipe) {
    const isGhanaian = recipe.tags && recipe.tags.includes('ghanaian');
    const ghanaTag   = isGhanaian
        ? `<span class="recipe-card-ghana">🇬🇭 Ghanaian</span>`
        : '';

    return `
        <div class="recipe-card" onclick="navigateToRecipe('${recipe.id}')">
            <img
                src="${recipe.image || ''}"
                alt="${recipe.name}"
                class="recipe-card-image"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            />
            <div style="display:none;height:200px;background:linear-gradient(135deg,#6B7D52,#8FA876);align-items:center;justify-content:center;font-size:4rem">
                🍲
            </div>
            <div class="recipe-card-content">
                <h3 class="recipe-card-title">${recipe.name}</h3>
                <div class="recipe-card-meta">
                    <span>⏱️ ${recipe.cookingTime}</span>
                    <span class="recipe-card-category">${recipe.category}</span>
                    ${ghanaTag}
                </div>
            </div>
        </div>
    `;
}


// ============================================================
// INGREDIENT MANAGEMENT
// ============================================================
function addIngredient() {
    const input      = document.getElementById('ingredient-input');
    const ingredient = input.value.trim().toLowerCase();

    if (ingredient && !currentIngredients.includes(ingredient)) {
        currentIngredients.push(ingredient);
        input.value = '';
        renderIngredientTags();
        renderRecipeResults();
    }
}

function removeIngredient(ingredient) {
    currentIngredients = currentIngredients.filter(i => i !== ingredient);
    renderIngredientTags();
    renderRecipeResults();
}

function findRecipes() {
    renderRecipeResults();
}

function renderIngredientTags() {
    const container = document.getElementById('ingredient-tags');
    if (!container) return;

    if (currentIngredients.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = currentIngredients.map(ingredient => `
        <span class="ingredient-tag">
            ${ingredient}
            <button onclick="removeIngredient('${ingredient}')" aria-label="Remove ${ingredient}">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </span>
    `).join('');
}

function renderRecipeResults() {
    const container = document.getElementById('recipe-results');
    const titleEl   = document.getElementById('results-title');
    const descEl    = document.getElementById('results-description');
    if (!container) return;

    let filtered;

    if (currentIngredients.length === 0) {
        // Show a curated popular mix — Ghanaian and international
        filtered = [
            recipes.find(r => r.id === '20'), 
            recipes.find(r => r.id === '1'),
            recipes.find(r => r.id === '22'), 
            recipes.find(r => r.id === '8'),  
            recipes.find(r => r.id === '21'), 
            recipes.find(r => r.id === '34'), 
        ].filter(Boolean);
        if (titleEl) titleEl.textContent = 'Popular Recipes';
        if (descEl)  descEl.textContent  = 'Get started by adding ingredients above';
    } else {
        filtered = recipes.filter(recipe => {
            const recipeIngredients = recipe.ingredients.map(i => i.toLowerCase());
            return currentIngredients.some(entered =>
                recipeIngredients.some(ri => ri.includes(entered))
            );
        });
        if (titleEl) titleEl.textContent = 'Matching Recipes';
        if (descEl)  descEl.textContent  =
            `Found ${filtered.length} recipe${filtered.length !== 1 ? 's' : ''} with your ingredients`;
    }

    container.innerHTML = filtered.length > 0
        ? filtered.map(r => createRecipeCard(r)).join('')
        : `<div class="empty-state" style="grid-column:1/-1">
               <div class="empty-state-icon">🍳</div>
               <p>No recipes found with those ingredients. Try different combinations!</p>
           </div>`;
}


// ============================================================
// NAVIGATION HELPERS
// ============================================================
function navigateToRecipe(recipeId) {
    window.location.hash = `#recipe/${recipeId}`;
}

function navigateToCategory(categoryName) {
    window.location.hash = `#category/${encodeURIComponent(categoryName)}`;
}

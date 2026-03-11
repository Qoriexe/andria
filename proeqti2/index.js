const dishesContainer = document.querySelector(".dishes");
const slider = document.getElementById('range');
const label = document.getElementById('spice-label');
const noNutsCheckbox = document.getElementById('no-nuts');
const vegetableCheckbox = document.getElementById('vegetable-only');
const applyBtn = document.querySelector('.apply-btn');
const resetBtn = document.querySelector('.reset-btn');
const categories = document.querySelectorAll(".category");

let currentCategory = "All"; 


const dishesData = [
  { name: "Laab Kai Chicken Salad", price: 10, spiciness: 2, nuts: true, vegetarian: false, category: "Salads", img: "https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png" },
  { name: "Som tam papaya salad", price: 9, spiciness: 0, nuts: false, vegetarian: true, category: "Salads", img: "https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png" },
  { name: "Tom yam kai", price: 7, spiciness: 3, nuts: false, vegetarian: false, category: "Soups", img: "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png" },
  { name: "Tom kha kai", price: 7, spiciness: 3, nuts: false, vegetarian: false, category: "Soups", img: "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png" },
  { name: "Tom kha koong", price: 8, spiciness: 2, nuts: false, vegetarian: false, category: "Soups", img: "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png" },
  { name: "Tom yam koong", price: 8, spiciness: 4, nuts: false, vegetarian: false, category: "Soups", img: "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png" },
  { name: "Tom yam vegetarian", price: 7, spiciness: 1, nuts: false, vegetarian: true, category: "Soups", img: "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png" },
  { name: "Tom kha vegetarian", price: 7, spiciness: 1, nuts: false, vegetarian: true, category: "Soups", img: "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png" },
  { name: "Sweet 'n sour chicken", price: 14, spiciness: 2, nuts: true, vegetarian: false, category: "Chicken", img: "https://course-jsbasic.javascript.ru/assets/products/sweet_n_sour.png" },
  { name: "Chicken cashew", price: 14, spiciness: 1, nuts: true, vegetarian: false, category: "Chicken", img: "https://course-jsbasic.javascript.ru/assets/products/chicken_cashew.png" },
  { name: "Kai see ew", price: 14, spiciness: 4, nuts: false, vegetarian: false, category: "Chicken", img: "https://course-jsbasic.javascript.ru/assets/products/kai_see_ew.png" },
  { name: "Beef massaman", price: 14, spiciness: 2, nuts: false, vegetarian: false, category: "Beef", img: "https://course-jsbasic.javascript.ru/assets/products/beef_massaman.png" },
  { name: "Seafood chu chee", price: 16, spiciness: 2, nuts: false, vegetarian: false, category: "Seafood", img: "https://course-jsbasic.javascript.ru/assets/products/chu_chee.png" },
  { name: "Penang shrimp", price: 16, spiciness: 4, nuts: true, vegetarian: false, category: "Seafood", img: "https://course-jsbasic.javascript.ru/assets/products/red_curry.png" },
  { name: "Green curry veggies", price: 12.5, spiciness: 0, nuts: true, vegetarian: true, category: "Vegetable", img: "https://course-jsbasic.javascript.ru/assets/products/green_curry.png" },
  { name: "Tofu cashew", price: 12, spiciness: 0, nuts: true, vegetarian: true, category: "Vegetable", img: "https://course-jsbasic.javascript.ru/assets/products/tofu_cashew.png" },
  { name: "Red curry veggies", price: 12, spiciness: 4, nuts: false, vegetarian: true, category: "Vegetable", img: "https://course-jsbasic.javascript.ru/assets/products/red_curry_vega.png" },
  { name: "Krapau tofu", price: 12, spiciness: 0, nuts: false, vegetarian: true, category: "Vegetable", img: "https://course-jsbasic.javascript.ru/assets/products/krapau_vega.png" },
  { name: "Prawn crackers", price: 2.5, spiciness: 1, nuts: false, vegetarian: false, category: "On-The-Side", img: "https://course-jsbasic.javascript.ru/assets/products/kroepoek.png" },
  { name: "Fish cakes", price: 6.5, spiciness: 1, nuts: false, vegetarian: false, category: "On-The-Side", img: "https://course-jsbasic.javascript.ru/assets/products/fish_cakes.png" },
  { name: "Chicken satay", price: 6.5, spiciness: 1, nuts: false, vegetarian: false, category: "Chicken", img: "https://course-jsbasic.javascript.ru/assets/products/sate.png" },
  { name: "Satay sauce", price: 1.5, spiciness: 2, nuts: false, vegetarian: false, category: "On-The-Side", img: "https://course-jsbasic.javascript.ru/assets/products/satesaus.png" },
  { name: "Shrimp springrolls", price: 6.5, spiciness: 3, nuts: false, vegetarian: false, category: "Bits&Bites", img: "https://course-jsbasic.javascript.ru/assets/products/mini_vega_springrolls.png" },
  { name: "Chicken springrolls", price: 6.5, spiciness: 2, nuts: false, vegetarian: false, category: "Bits&Bites", img: "https://course-jsbasic.javascript.ru/assets/products/chicken_loempias.png" },
  { name: "Thai fried rice", price: 7.5, spiciness: 2, nuts: false, vegetarian: false, category: "Bits&Bites", img: "https://course-jsbasic.javascript.ru/assets/products/fried_rice.png" },
  { name: "Fresh prawn crackers", price: 2.5, spiciness: 1, nuts: false, vegetarian: false, category: "On-The-Side", img: "https://course-jsbasic.javascript.ru/assets/products/kroepoek.png" },
];


slider.addEventListener('input', () => {
  label.textContent = slider.value == 0 ? "Spiciness: Not Chosen" : `Spiciness: ${slider.value}`;
});


function renderDishes(filter = false) {
  dishesContainer.innerHTML = "";
  dishesData.forEach(dish => {
    if(currentCategory !== "All" && dish.category !== currentCategory) return;
    if(filter){
      if(slider.value != 0 && dish.spiciness != slider.value) return;
      if(noNutsCheckbox.checked && !dish.nuts) return;
      if(vegetableCheckbox.checked && !dish.vegetarian) return;
    }

    dishesContainer.innerHTML += `
      <div class="dish-card">
        <img src="${dish.img}" alt="${dish.name}">
        <div class="dish-info">
          <p class="dish-name">${dish.name}</p>
          <h5 class="dish-spice">Spiciness ${dish.spiciness}</h5>
          <div class="dish-options">
            <input type="checkbox" disabled ${dish.nuts ? "checked" : ""}>
            <label>Nuts</label>
            <input type="checkbox" disabled ${dish.vegetarian ? "checked" : ""}>
            <label>Vegetarian</label>
          </div>
          <div class="dish-footer">
            <p class="dish-price">$${dish.price}</p>
            <button class="add-cart">Add to cart</button>
          </div>
        </div>
      </div>
    `;
  });


  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('mousemove', e => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const moveX = (x / rect.width - 0.5) * 20;
      const moveY = (y / rect.height - 0.5) * 20;
      button.style.boxShadow =
        `${-moveX}px ${-moveY}px 20px #ff0000,
         ${moveX}px ${moveY}px 20px #ff0000,
         ${-moveY}px ${moveX}px 40px rgba(0,0,0,0.5)`;
    });
    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = "0 0 20px #ff0000";
    });
  });
}


renderDishes();


applyBtn.addEventListener('click', () => renderDishes(true));
resetBtn.addEventListener('click', () => {
  slider.value = 0;
  noNutsCheckbox.checked = false;
  vegetableCheckbox.checked = false;
  label.textContent = "Spiciness: Not Chosen";
  currentCategory = "All";
  categories.forEach(el => el.classList.remove("active"));
  categories[0].classList.add("active"); // "All"
  renderDishes();
});

const categoriess = document.querySelectorAll(".category");

categoriess.forEach(cat => {
  cat.addEventListener("click", () => {

    categoriess.forEach(el => el.classList.remove("active"));

    cat.classList.add("active");

  });
});

categories.forEach(cat => {
  cat.addEventListener("click", () => {
    categories.forEach(el => el.classList.remove("active"));
    cat.classList.add("active");
    currentCategory = cat.textContent;
    renderDishes(true);
  });
});


const burger = document.querySelector('.burger-menu');
const dropdown = document.querySelector('.burger-dropdown');

burger.addEventListener('click', () => {
    if(dropdown.style.display === "flex"){
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
});


const loadMeal = (searchFood) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchFood}`)
    .then((res) => res.json())
    .then((food) => displayMeal(food.meals));
};

const displayMeal = (foods) => {
  console.log(foods);
  const showMeal = document.getElementById("show-meal");
  showMeal.innerHTML = ``;
  showMeal.classList.add("col");
  foods.forEach((food) => {
    const { strMeal, strMealThumb, strArea, strCategory, strInstructions } =
      food;
    console.log(food);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card h-100">
        <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strMeal}</h5>
          <p class="card-text">THIS MEAL INSTRUCTIONS IS TOO MUCH BIG THAT IT'S DOESN'T GIVE US A GOOD UI THAT'S WHY WE DIDN'T PUT THOSE INSTRUCTION HERE.</p>
          <!-- modal btn -->
          <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onclick="mealDetails('${food.idMeal}')">View Details</a>
          <!-- modal btn -->
        </div>
    </div>
        `;
    showMeal.appendChild(div);
  });
};

// search meal function
const searchMeal = () => {
  const searchField = document.getElementById("search");
  const searchText = searchField.value;
  loadMeal(searchText);
  searchField.value = ``;
};

loadMeal("a");
// meal details showing function
const mealDetails = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((meals) => showDetails(meals.meals));
};

// display modals function
const showDetails = (meal) => {
  meal.forEach((element) => {
    const { strMeal, strMealThumb, strArea, strCategory, strInstructions } =
      element;
    const display = document.getElementById('display')
    console.log(strMeal);
    // const div = document.createElement("div");
    
    display.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
      
        <h5 class="modal-title text-center" id="exampleModalToggleLabel">${strMeal}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img class="img-fluid" src="${strMealThumb}" alt="">
        <div class="d-flex justify-content-around mt-5">
        <p>Food Origin : ${strArea}</p>
        <p>Food Category : ${strCategory}</p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><a class="text-white text-decoration-none" href="http://google.com/">More Details</a></button>
      </div>
    </div>
    `;
    
  });
};


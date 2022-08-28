const loadMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((res) => res.json())
    .then((food) => displayMeal(food.meals));
};

const displayMeal = (foods) => {
  console.log(foods);
  const showMeal = document.getElementById("show-meal");
  showMeal.classList.add("col");
  foods.forEach((food) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card h-100">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `;
      showMeal.appendChild(div)
  });
};

loadMeal();

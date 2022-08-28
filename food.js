const loadMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
    .then(food => displayMeal(food))
}

const displayMeal = (food) => {
    console.log(food)
}


loadMeal()
const searchInputValue = document.getElementById("searchInput");
document.getElementById("searchButton").addEventListener("click", function() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue.value}`)
        .then(response => response.json())
        .then(data => displayAllFoods(data.meals));

})
const displayAllFoods = allFoods => {
    console.log(allFoods)

    const foodDiv = document.getElementById("foodCards");
    for (let i = 0; i < allFoods.length; i++) {
        const singleItem = allFoods[i];
        console.log(singleItem)
        const newDiv = document.createElement('div');

        newDiv.className = 'item';
        const foodInfo = `
            <img src="${singleItem.strMealThumb}">
            <h4>${singleItem.strMeal}</h4>
            `;

        newDiv.innerHTML = foodInfo;
        foodDiv.appendChild(newDiv);
    }

}
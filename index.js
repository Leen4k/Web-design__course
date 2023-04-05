const card = document.querySelector(".food-category__container");
fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=5c2871714bf44882b04f5d8855a94145&query=pasta&maxFat=25&number=2')
            .then(res=>res.json())
            .then(food=>card.innerHTML=food.extendedIngredients.map((food)=>{
                    console.log(food);
                    console.log(food.image);
                    return(
                        `
                        <article class="card">
                        <div class="img__container">
                            <img class="image" src="https://spoonacular.com/recipeImages/${food.id}-556x370.jpg"  alt="">
                            <div class="description__container">
                            <h1>${food.id}</h1>
                            <h3>${food.name}</h3>
                            <p>${food.original}</p>
                        </div>
                        </div>
                        </article>
                    `
                    )
                }).join("")
                )
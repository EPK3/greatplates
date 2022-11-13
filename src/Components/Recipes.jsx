import React from 'react'

const Recipes = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RECIPE_API_KEY,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&ranking=1&ignorePantry=true&number=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  return (
    <div className='flex my-12 justify-center content-center flex-wrap'>
        
    </div>
  )
}

export default Recipes
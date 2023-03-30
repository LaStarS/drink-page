import logo from './logo.svg';
import './App.css';
import React, { useContext, useState, useReducer } from 'react';
import Form from './components/Form';
import ShowDrinks from './components/ShowDrinks';
import Nav from './components/Nav';

function App() {

  // const [allRecipe, setAllRecipe] = useState([]);
  
  async function getAllRecipe() {
    let key = "www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    const response = await fetch(
      `https://api.spoonacular.com/recipes/716429/information?apiKey=a93db7d28f914ac0b7ce16290f124bf4&includeNutrition=true.`
    );
    const data = response.json();
    return data;
    }
    

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '11d3ddb55bmsh7e3b2c4274d49adp15cdf7jsn62b367c1d119',
  //     'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://the-cocktail-db.p.rapidapi.com/random.php', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  return (
    <div className="App">
      <Nav />
      <Form />
      {getAllRecipe.map(recipe => (
        <ShowDrinks 
        title={getAllRecipe.drinks.drink}
        ingredient={getAllRecipe.drinks.ingredient}
         />
      ))}
    </div>
  );
}

export default App;

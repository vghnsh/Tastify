const API_KEY = '2748637100bc45d991c883fb8b49dc94';
import axios from 'axios';
const getRandomRecipeService = ({number}) =>
  axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&limitLicense=true&number=${number}&instructionsRequired=true`,
  );

const getSerachByIngredientsService = ingredients =>
  axios.get(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}`,
  );

const getSerachByRecipesService = query =>
  axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`,
  );
export {
  getRandomRecipeService,
  getSerachByIngredientsService,
  getSerachByRecipesService,
};

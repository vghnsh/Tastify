const API_KEY = '2748637100bc45d991c883fb8b49dc94';
import axios from 'axios';
const getRandomRecipeService = ({number}) =>
  axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&limitLicense=true&number=${number}&instructionsRequired=true`,
  );

const getSerachByIngredientsService = queryString =>
  axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${queryString}`,
  );

const getSerachByRecipesService = query =>
  axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${query}`,
  );

const getRecipeById = id =>
  axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
  );

const searchByFilterService = query =>
  axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&${query}`,
  );
export {
  getRandomRecipeService,
  getSerachByIngredientsService,
  getSerachByRecipesService,
  getRecipeById,
  searchByFilterService,
};

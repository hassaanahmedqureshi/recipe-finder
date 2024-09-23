<template>
  <div>
    <h1>Recipe Finder by Hassaan Qureshi</h1>
    <input v-model="ingredients" placeholder="Enter ingredients (comma-separated)" />
    <button @click="getRecipes">Find Recipes</button>
    
    <div v-if="recipes.length">
  <h2>Recipes:</h2>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.label">
      <h3>{{ recipe.label }}</h3>
      <img :src="recipe.image" alt="Recipe Image" />
      <p>Ingredients: {{ recipe.ingredientLines.join(', ') }}</p>
      <a :href="recipe.url" target="_blank">View Recipe</a>
    </li>
  </ul>
</div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
  return {
    ingredients: '',
    recipes: [],
    error: null // Add error state
  };
},
  methods: {
    async getRecipes() {
  this.error = null; // Reset error before making a request
  try {
    const baseURL = process.env.NODE_ENV === 'production'
      ? `${process.env.VUE_APP_API_URL}/search`
      : '/api/search'; // Use proxy in development

    const response = await axios.get(baseURL, {
      params: {
        q: this.ingredients.split(',').map(ingredient => ingredient.trim()).join(','),
        app_id: process.env.VUE_APP_API_ID,
        app_key: process.env.VUE_APP_API_KEY
      }
    });

    this.recipes = response.data.hits.map(hit => hit.recipe);
  } catch (error) {
    this.error = 'Error fetching recipes. Please try again.'; // Set error message
    console.error('Error fetching recipes:', error);
  }
}

}
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
}

input {
  width: 300px;
  padding: 10px;
  margin: 20px auto;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>


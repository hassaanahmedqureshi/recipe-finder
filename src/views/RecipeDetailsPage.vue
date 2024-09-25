<template>
  <div class="max-w-4xl mx-auto p-4">
    <div v-if="recipe" class="bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <h1 class="text-3xl font-bold mb-4">{{ recipe.label }}</h1>
      <img :src="recipe.image" alt="Recipe Image" class="w-full h-64 object-cover rounded-md mb-4" />

      <h2 class="text-2xl font-semibold mb-2">Ingredients:</h2>
      <ul class="list-disc ml-6">
        <li v-for="(ingredient, index) in recipe.ingredientLines" :key="index" class="mb-2">{{ ingredient }}</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-4 mb-2">Instructions:</h2>
      <p>
        <a :href="recipe.url" target="_blank" class="text-blue-500 hover:underline">
          Click here for detailed instructions
        </a>
      </p>
    </div>

    <div v-else-if="loading" class="text-center">Loading recipe details...</div>
    <div v-else class="text-red-500 text-center">Failed to load recipe details.</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RecipeDetailsPage',
  data() {
    return {
      recipe: null,
      loading: false,
      error: null
    };
  },
  async created() {
    this.loading = true;
    const recipeId = this.$route.params.id; // Get recipe ID from route params

    try {
      const baseURL = process.env.NODE_ENV === 'production'
        ? `${process.env.VUE_APP_API_URL}/search`
        : '/api/search'; // Adjust as per your API setup

      const response = await axios.get(baseURL, {
        params: {
          q: recipeId,
          app_id: process.env.VUE_APP_API_ID,
          app_key: process.env.VUE_APP_API_KEY
        }
      });

      if (response.data.hits.length) {
        this.recipe = response.data.hits[0].recipe; // Get the first result
      } else {
        this.error = 'Recipe not found';
      }
    } catch (error) {
      this.error = 'Error fetching recipe details';
      console.error('Error:', error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles for the details page */
</style>

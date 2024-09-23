<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-yellow-500 text-center text-3xl font-bold mb-6">
      Recipe Finder by Hassaan Qureshi
    </h1>
    <div class="flex flex-col items-center">
      <input
        v-model="ingredients"
        placeholder="Enter ingredients (comma-separated)"
        class="w-full max-w-md p-2 border border-gray-300 rounded mb-4"
      />
      <button
        @click="getRecipes"
        class="w-full max-w-md p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Find Recipes
      </button>
    </div>

    <div v-if="recipes.length" class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="recipe in recipes"
        :key="recipe.label"
        class="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
      >
        <a :href="recipe.url" target="_blank" class="block">
          <h3 class="text-lg font-bold mb-2">{{ recipe.label }}</h3>
          <img :src="recipe.image" alt="Recipe Image" class="w-full h-40 object-cover rounded-md mb-2" />
          <p class="text-gray-700 mb-2">Ingredients: {{ recipe.ingredientLines.join(', ') }}</p>
          <button class="mt-2 w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition">
            View Recipe
          </button>
        </a>
      </div>
    </div>

    <div v-if="loading" class="text-center my-4">Loading more recipes...</div>
    <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
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
      error: null,
      loading: false,
      currentPage: 1,
      totalHits: 0,
    };
  },
  methods: {
    async getRecipes() {
      this.error = null; // Reset error before making a request
      this.loading = true; // Start loading
      try {
        const baseURL = process.env.NODE_ENV === 'production'
          ? `${process.env.VUE_APP_API_URL}/search`
          : '/api/search'; // Use proxy in development

        const response = await axios.get(baseURL, {
          params: {
            q: this.ingredients.split(',').map(ingredient => ingredient.trim()).join(','),
            app_id: process.env.VUE_APP_API_ID,
            app_key: process.env.VUE_APP_API_KEY,
            from: (this.currentPage - 1) * 10, // Adjust the starting index
            to: this.currentPage * 10 // Adjust the ending index
          }
        });

        this.totalHits = response.data.count; // Get the total hits
        this.recipes.push(...response.data.hits.map(hit => hit.recipe)); // Append new recipes
        this.currentPage++;
      } catch (error) {
        this.error = 'Error fetching recipes. Please try again.';
        console.error('Error fetching recipes:', error);
      } finally {
        this.loading = false; // Stop loading
      }
    },
    handleScroll() {
      const scrollable = document.documentElement.scrollHeight;
      const currentScroll = window.innerHeight + window.scrollY;
      if (currentScroll >= scrollable - 100 && !this.loading && this.recipes.length < this.totalHits) {
        this.getRecipes();
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

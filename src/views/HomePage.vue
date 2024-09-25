<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-center text-7xl font-bold mb-2 animated-gradient leading-normal" style="font-family: 'Style Script', cursive;">
      Recipe Finder
    </h1>

    <h2 class="text-center text-sm text-gray-500" style="font-family: 'Cinzel Decorative', serif;">
      by Hassaan AQ
    </h2>

    <div class="flex flex-col items-center mt-10">
      <input
        v-model="ingredients"
        placeholder="Enter ingredients (comma-separated)"
        class="w-full max-w-md p-2 border border-gray-300 rounded mb-4"
      />
      <button
        @click="getRecipes(true)"
        class="w-full max-w-md p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Find Recipes
      </button>
    </div>

    <div v-if="recipes.length" class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="recipe in recipes"
        :key="recipe.label"
        class="cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
      >
        <!-- Replace the anchor with router-link to navigate to details page -->
        <router-link :to="{ name: 'RecipeDetailsPage', params: { id: recipe.label } }" class="block">
          <h3 class="text-lg font-bold mb-2">{{ recipe.label }}</h3>
          <img :src="recipe.image" alt="Recipe Image" class="w-full h-40 object-cover rounded-md mb-2" />
          <p class="text-gray-700 mb-2">Ingredients: {{ recipe.ingredientLines.join(', ') }}</p>
          <button class="mt-2 w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition">
            View Recipe
          </button>
        </router-link>
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
    async getRecipes(isNewSearch = false) {
      this.error = null;
      this.loading = true;

      if (isNewSearch) {
        this.recipes = [];
        this.currentPage = 1;
      }

      try {
        const baseURL = process.env.NODE_ENV === 'production'
          ? `${process.env.VUE_APP_API_URL}/search`
          : '/api/search';

        const response = await axios.get(baseURL, {
          params: {
            q: this.ingredients.split(',').map(ingredient => ingredient.trim()).join(','),
            app_id: process.env.VUE_APP_API_ID,
            app_key: process.env.VUE_APP_API_KEY,
            from: (this.currentPage - 1) * 10,
            to: this.currentPage * 10
          }
        });

        this.totalHits = response.data.count;
        this.recipes.push(...response.data.hits.map(hit => hit.recipe));
        this.currentPage++;
      } catch (error) {
        this.error = 'Error fetching recipes. Please try again.';
        console.error('Error fetching recipes:', error);
      } finally {
        this.loading = false;
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Style+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Style+Script&display=swap');

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(270deg, #38b2ac, #f6e05e, #f6e05e, #38b2ac);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradient-animation 5s ease infinite;
  color: transparent;
}
</style>

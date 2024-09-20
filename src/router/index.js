import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import RecipeDetails from '../views/RecipeDetailsPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/recipe/:id', name: 'RecipeDetails', component: RecipeDetails }
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;
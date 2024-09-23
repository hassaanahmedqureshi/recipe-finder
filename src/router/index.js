import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import RecipeDetailsPage from '../views/RecipeDetailsPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/recipe/:id', name: 'RecipeDetailsPage', component: RecipeDetailsPage }
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;
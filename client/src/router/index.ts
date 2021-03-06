import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

import Home from '../components/views/Home.vue';
import About from '../components/views/About.vue';
import HowToUse from '../components/views/HowToUse.vue';
import Login from '../components/views/Login.vue';
import Signin from '../components/views/Signin.vue';
import Dashboard from '../components/views/Dashboard.vue';
import Recipe from '../components/views/Recipe.vue';

import Recipes from '../components/Dashboard/Recipes.vue';
import Favorites from '../components/Dashboard/Favorites.vue';
import Food from '../components/Dashboard/Food.vue';
import Import from '../components/Dashboard/Import.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/how-to-use',
    name: 'HowToUse',
    component: HowToUse,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/recipes',
    component: Dashboard,
    children: [
      {
        path: 'recipes',
        component: Recipes,
      },
      {
        path: 'favorites',
        component: Favorites,
      },
      {
        path: 'food',
        component: Food,
      },
      {
        path: 'import',
        component: Import,
      },
      { path: ':recipeId', component: Recipe, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/dashboard' || to.fullPath.match(/recipe/) || to.fullPath === '/dashboard/recipes') {
    if(!store.state.user && !localStorage.getItem('user')) {
      next('/')
    }
    else {
      if(!store.state.user) {
        const localUser = localStorage.getItem('user')
        if (localUser) {
          store.commit('setUser', JSON.parse(localUser));
        }
      }
      next(true)
    }
  } else {
    next(true)
  }
});

export default router;

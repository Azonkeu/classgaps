import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Men from '../views/MenView.vue';
import Women from '../views/WomenView.vue';
import Kids from '../views/KidsView.vue';
import Living from '../views/LivingView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/men',
    name: 'Men',
    component: Men,
  },
  {
    path: '/women',
    name: 'Women',
    component: Women,
  },
  {
    path: '/kids',
    name: 'Kids',
    component: Kids,
  },
  {
    path: '/home-&-living',
    name: 'Home-&-living',
    component: Living,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

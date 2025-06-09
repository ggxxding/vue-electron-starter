import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Welcome from '../components/pages/Welcome.vue'
import Home from '../components/pages/Home.vue'
import page2 from '../components/pages/page2.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'page2',
          name: 'page2',
          component: page2,
        },
      ],
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ApontamentoView from '@/views/ApontamentoView.vue'
import ProjetoView from '@/views/ProjetoView.vue'
import TabelaGeralView from '@/views/TabelaGeralView.vue'
import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Apontamento',
      name: "Apontamento",
      component: ApontamentoView
    },
    {
      path: '/Projeto',
      name: "Projeto",
      component: ProjetoView
    },
    {
      path: '/Login',
      name: "Login",
      component: LoginView
    },
    {
      path: '/Signup',
      name: "Sign Up",
      component: SignUpView
    },
    {
      path: '/TabelaGeral',
      name: "TabelaGeral",
      component: TabelaGeralView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

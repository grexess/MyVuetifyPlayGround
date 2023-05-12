import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/Blog',
    component: () => import('@/views/BlogView.vue'),
  },
  {
    path: '/Kontakt',
    component: () => import('@/views/KontaktView.vue'),
  },
  {
    path: '/Forum',
    component: () => import('@/views/ForumView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.Base,
  routes,
})

export default router

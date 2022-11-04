import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/PDFPrint',
    component: () => import('@/views/PDFPrint.vue'),
  },
  {
    path: '/ImageCropper',
    component: () => import('@/views/ImageCropper.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.Base,
  routes,
})

export default router

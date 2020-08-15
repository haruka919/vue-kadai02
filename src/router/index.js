import Vue from 'vue'
import VueRouter from 'vue-router'
import FormProfile from '../views/FormProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormProfile',
    component: FormProfile
  },
  {
    path: '/form-question',
    name: 'FormQuestion',
    component: () => import('../views/FormQuestion.vue')
  },
  {
    path: '/form-consultation',
    name: 'FormConsultation',
    component: () => import('../views/FormConsultation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Index.vue')
const Training = () => import('@/views/training/Index.vue')
const Student = () => import('@/views/student/Index.vue')
const Mine = () => import('@/views/mine/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/training',
    name: 'Training',
    component: Training,
  }, {
    path: '/student',
    name: 'Student',
    component: Student,
  }, {
    path: '/mine',
    name: 'Mine',
    component: Mine,
  }],
})


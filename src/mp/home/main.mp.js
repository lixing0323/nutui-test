
import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import '../../assets/rem'

import App from '../../App.vue'
import store from '../../store'
import Home from '../../views/home/Index.vue'
import Mine from '../../views/mine/Index.vue'
import Student from '../../views/student/Index.vue'
import Training from '../../views/training/Index.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/(home|index)?',
      name: 'Home',
      component: Home
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    }, {
      path: '/student',
      name: 'Student',
      component: Student,
    }, {
      path: '/training',
      name: 'Training',
      component: Training,
    }]
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)
  NutUI.install(Vue)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}

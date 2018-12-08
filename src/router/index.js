import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'helloword',
      path: '/',
      redirect: {name: 'home'}
    },
    {
      name: 'home',
      path: '/home',
      component: home
    }
  ]
})

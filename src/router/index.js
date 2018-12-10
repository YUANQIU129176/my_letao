import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home.vue'
import category from '@/views/Category.vue'
import search from '@/views/Search.vue'
import searchlist from '@/views/searchList.vue'
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
    },
    {
      name: 'category',
      path: '/category',
      component: category
    },
    {
      name: 'search',
      path: '/search',
      component: search
    },
    {
      name: 'searchlist',
      path: '/searchList/:key',
      component: searchlist
    }
  ]
})

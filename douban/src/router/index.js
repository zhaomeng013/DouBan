import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Index from '../pages/Index'
import Movie from '../pages/Movie'
import Book from '../pages/Book'
import Group from '../pages/Group'
import Market from '../pages/Market'
import FM from '../pages/FM'






Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Market',
      name: 'Market',
      component: Market
    },
    {
      path: '/FM',
      name: 'FM',
      component: FM
    }
  ]
})

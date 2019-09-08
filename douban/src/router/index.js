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
import Detail from '../pages/Detail'







Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/',
      name: 'Index',
      component: Index,     
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/fm',
      name: 'FM',
      component: FM
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

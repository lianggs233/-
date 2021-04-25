import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/layout/Login'
import Register from '@/layout/Register'
import Home from '@/layout/Home'
import Question from '@/views/Question'
import Parsonal from '@/views/Parsonal'
import Course from '@/views/Course'
import QueryTest from '@/views/QueryTest'
import QueryResults from '@/views/QueryResults'
import TestCard from '@/views/TestCard'
import Echarts from '@/components/Echarts'
import Newtest from '@/views/modules/Newtest'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'question',
          name: 'question',
          component: Question
        },
        {
          path: 'course',
          name: 'course',
          component: Course
        },
        {
          path: 'querytest',
          name: 'querytest',
          component: QueryTest
        },
        {
          path: 'queryresults',
          name: 'queryresults',
          component: QueryResults
        },
        {
          path: 'testcard',
          name: 'testcard',
          component: TestCard
        },
        {
          path: 'parsonal',
          name: 'parsonal',
          component: Parsonal
        },
        {
          path: 'echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path: 'newtest',
          name: 'newtest',
          component: Newtest
        },
        {
          path: 'test',
          name: 'test',
          component: Test
        }
      ]
    }
  ]
})

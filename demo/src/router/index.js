import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/layout/Login'
import Register from '@/layout/Register'
import Home from '@/layout/Home'
import Question from '@/views/Question'
import EditDialog from '@/views/modules/EditDialog'
import Upload from '@/views/modules/Upload'

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
          path: 'Question',
          name: 'Question',
          component: Question
        },
        {
          path: 'editdialog',
          name: 'editdialog',
          component: EditDialog
        },
        {
          path: 'upload',
          name: 'upload',
          component: Upload
        }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CommonPage from '../components/common/commonPage.vue'
import Index from '../views/index.vue'
import JobInfo from '../views/jobInfo.vue'
import UserInfo from '../views/userInfo.vue' 
import New from '../views/new.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobInfo',
    name: 'JobInfo',
    component: JobInfo
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path:'/commonPage',
    name: 'CommonPage',
    component: CommonPage
  },
  {
    path:'/userInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path:'/new',
    name:'New',
    component: New
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

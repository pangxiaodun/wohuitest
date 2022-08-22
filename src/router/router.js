import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import user from './../components/user'
import login from './../components/login'

const routes = [
  { path: '/', component: login },
  { path: '/user', component: user },
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes
})
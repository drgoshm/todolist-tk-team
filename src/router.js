import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'
import TaskPage from './pages/TaskPage.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
    { path: '/', component: HomePage},
    { path: '/:page', component: HomePage, props: true },
    { path: '/task/:taskid', component: TaskPage, props: true },
    { path: '*', component: NotFound}
  ]
  
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
  })
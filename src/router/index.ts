import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TodoListPage from '@/views/TodoList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: TodoListPage,
  },
  {
    path: '/todo',
    name: 'About',
    component: () => import('@/views/Create.vue'),
  },
  {
    path: '/todo/:id',
    name: 'About',
    component: () => import('@/views/Todo.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

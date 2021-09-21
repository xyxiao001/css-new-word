import { createApp, h } from 'vue'
import { createWebHashHistory, createRouter} from 'vue-router'
import './common.css'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/keywords',
    name: 'keywords',
    component: () => import('./pages/keywords.vue'),
  },
  {
    path: '/chapter3',
    name: 'chapter3',
    component: () => import('./pages/chapter3.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp({
  render: () => h(App)
})

app.use(router)

app.mount('#app')

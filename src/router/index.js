import { createRouter , createWebHistory} from 'vue-router';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: LoginView},
    {path: '/diary', component: import('../views/DiaryView.vue')},
    {path: '/start', component: import('../views/StartView.vue')},
  ]
})

export default router
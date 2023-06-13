import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [

    { path: '/', component: LoginView },//login
    { path: '/detalle', component: import('../views/DetalleEventoView.vue') },
    { path: '/inicio', component: import('../views/InicioView.vue') },
    { path: '/register', component: import('../views/RegisterView.vue') },
    { path: '/restorePassword', component: import('../views/RestorePasswordView.vue') },
    { path: '/perfil', component: import('../views/PerfilView.vue') },
    { path: '/direccion', component: import('../views/DireccionView.vue') },
    { path: '/agenda', component: import('../views/AgendaView.vue') },
    { path: '/buscar', component: import('../views/BuscarEventoView.vue') },
    { path: '/eventos', component: import('../views/EventosView.vue') },
    { path: '/usuarios', component: import('../views/UsuariosView.vue') },
    
    {path: '/logout', component: import('../views/logoutView.vue')},


  ]
})

export default router

<script>
import { storeToRefs } from 'pinia';
import { useLoginStore }  from './stores/login'

export default{
  data(){
      return{
        usuario: {},
      }
    },
  setup() {
    const store = useLoginStore();
    const { isLogin } = storeToRefs(store);

    return { isLogin };
  },
}

</script>

<template>
  <div class="contenedor-head">
    <header>
      <img src="./assets/img/logo-eventos.png" alt="" height="100">

    </header>
    <nav class="contenedor-nav">
      <router-link v-if="isLogin"  class="nav" to="/inicio">Inicio</router-link>
      <router-link v-if="isLogin"  class="nav" to="/agenda">Agenda</router-link>
      <router-link v-if="isLogin"  class="nav" to="/perfil">Perfil</router-link>
      <router-link v-if="!isLogin" class="nav" to="/">login</router-link>
      <router-link v-if="isLogin" class="nav" to="/logout">logout</router-link>
       
    </nav>
   
      <router-view/>

  </div>
</template>

<style scoped>

  header{
    width: 100%;
  }
  .contenedor-head{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .nav{
    text-decoration: none;
    font-weight: 700;
    color: black;
    display: flex;
  }

  .contenedor-nav{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
</style>

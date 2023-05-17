<script setup>

</script>

<template>
  <div class="contenedor-head">
    <header>
      <img src="./assets/img/logo-eventos.png" alt="" height="100">
    </header>
    <nav class="contenedor-nav">
      <router-link class="nav" to="/start">Start</router-link>
      <router-link class="nav" to="/diary">Diary</router-link>
      <router-link class="nav" to="/">Login</router-link>
    </nav>
  </div>
  <router-view/>
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

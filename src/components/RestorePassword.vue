<template>
  <form>
      <h4 class="titulo">Email:</h4>
      <input class="input-login" type="email" v-model="email" required>
       <div class="contenedor-button">
        <button class="button-login" @click.prevent="Registrarse">Registrarse</button>
      </div>
  </form>
</template>

<script>
export default {
 data(){
        return{
            email: '',
        }
    },
}
</script>

<style scope>
.input-login{
    min-width: 20rem;
    height: 2rem;
    border-radius: 10px;
}

.button-login{
    padding: 10px;
    min-width: 20.5rem;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: #FB7F56;
    color: white;
    font-size: larger;
}
</style>
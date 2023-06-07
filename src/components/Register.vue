<template>
      <form class="formulario">
      <h4 class="titulo">Nombre:</h4>
      <input class="input-login" type="email" v-model="nombre" required>

      <h4 class="titulo">Apellido:</h4>
      <input class="input-login" type="password"  v-model="apellido" required>

      <h4 class="titulo">Email:</h4>
      <input class="input-login" type="password"  v-model="email" required>

      <h4 class="titulo">Contraseña:</h4>
      <input class="input-login" type="password"  v-model="contraseña" required>
      <h4 class="titulo">Repetir contraseña:</h4>
      <input class="input-login" type="password"  v-model="repetirContraseña" required>
      <div class="contenedor-button">
        <button class="button-login" @click.prevent="Registrarse">Registrarse</button>
      </div>
      <div class="contenedor-iniciar">
        <button class="button-seccion" @click.prevent="iniciar">Iniciar seccion</button>
      </div>
    </form>

</template>

<script>
export default {
    data(){
        return{
            nombre: '',
            apellido: '',
            email: '',
            contraseña: '',
            repetirContraseña: '',
        }
    },
     methods:{
        Registrarse(){
            window.location.href = "/inicio"
        },

        iniciar(){
            window.location.href = "/"
        }
   }
    
}
</script>

<style scope>
.contenedor-iniciar{
    width: 99%;
    display: flex;
    justify-content: end;
}
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

.titulo{
  margin: .5rem;
}

.button-seccion{
  background: transparent;
  border: 0px;
  margin-top: 1rem;
}
</style>
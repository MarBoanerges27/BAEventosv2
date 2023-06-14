<template>
      <form class="formulario">
      <h4 class="titulo">Nombre:</h4>
      <input class="input-login" type="text" v-model="nombre" required>

      <h4 class="titulo">Apellido:</h4>
      <input class="input-login" type="text"  v-model="apellido" required>

      <h4 class="titulo">Email:</h4>
      <input class="input-login" type="email"  v-model="email" required>

      <h4 class="titulo">Contraseña:</h4>
      <input class="input-login" type="password"  v-model="contrasenia" required>
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
import { useLoginStore }  from '../stores/login'
import { storeToRefs } from 'pinia';
import listaServicioUsuario from "../Servicios/listaServicioUsuario";
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            usuario: {nombre: 'pe', apellido: 'pe', email: '', contrasenia: '', fotoPerfil: '', rol: '', id: ''},
            usuarios: [],          
            nombre: '',
            apellido: '',
            email: '',
            contrasenia: '',
            repetirContraseña: '',
        }
    },
    setup() {
        const store = useLoginStore();
        const login = store;
        const usuarioLogear = storeToRefs(store);
        return login;
    },
    methods:{
        async Registrarse(){
            this.usuarios = await listaServicioUsuario.cargarUsuario();

          if(this.email != '' && this.password != ''){

                this.usuario = [...this.usuarios.filter(usuario => usuario.email == this.email)]
                if(this.usuario.email != this.email){

                   await listaServicioUsuario.agregarUsuario(this.usuario);
                   this.login()
                   this.$router.push("/Inicio")
                }else{
                  Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Email ya registrado',
                  })
                }
          }else{
                  Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Ingrese su email o contraseña!',
                  })
          }
                
        },

        iniciar(){
            this.$router.push("/")
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
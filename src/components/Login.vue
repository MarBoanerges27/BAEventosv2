<template>
   <main>
    <div class="contenedor-logearse">
      <div class="contenedor-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </div>
      <h2>Acceder</h2>
      <form class="formulario">
        <h4 class="titulo">Email:</h4>
        <input class="input-login" type="email" v-model="email" required>

        <h4 class="titulo">Contraseña:</h4>
        <input class="input-login" type="password"  v-model="password" required>
        
        <div class="contenedor-button">
          <button class="button-login" @click.prevent="LogIn">Ingresar</button>
        </div>
      </form>

      <div class="contenedor-register">
          <button class="button-contraseña" @click.prevent="RestablecerContraseña">Restablecer Contraseña</button>
          <button class="button-registrarse" @click.prevent="Registrarse">Registrarse</button>
      </div>
    </div>

  </main>
</template>

<script>
import { useLoginStore }  from '../stores/login'
import { storeToRefs } from 'pinia';
import listaServicioUsuario from "../Servicios/listaServicioUsuario";
import Swal from 'sweetalert2'
export default{
   components: {
    listaServicioUsuario,
  },
  data(){
    return{
      usuarios: [],
       email: '',
      password: '',
    }
  },
  setup() {
    const store = useLoginStore();
    const login = store;
    const usuarioLogear = storeToRefs(store);
    return login;
  },
  methods:{
      async LogIn(){
        if(this.email != '' && this.password != ''){
          this.usuarios = await listaServicioUsuario.cargarUsuario();

          this.usuarioLogear = [...this.usuarios.filter(usuario => usuario.email == this.email)]
          if(this.usuarioLogear != {}){
            if(this.usuarioLogear[0].contrasenia == this.password){
              this.login()
              Swal.fire({
                position: 'center', 
                icon: 'success',
                title: 'Ingreso exitoso',
                showConfirmButton: false,
                timer: 1500
              })
              this.$router.push("/Inicio")
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta!',
              })
            }
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No se a encontrado el email ingresado!',
            })
          }
        }else{
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ingrese su email y contraseña!',
          })
        }
        
       },
       RestablecerContraseña(){
        this.$router.push("/restorePassword")
       },
       Registrarse(){
        this.$router.push("/register")
       }

      },

 
  }
</script>

<style scoped>

.button-registrarse,.button-contraseña {
  background: transparent;
  border: 0px;
  text-decoration: underline;
}
.contenedor-svg{
  width: 100%;
  display: flex;
  justify-content: center;
}
.contenedor-svg>svg{
  color: rgb(235, 235, 235);
}
.input-login{
    min-width: 20rem;
    height: 2rem;
    border-radius: 10px;
}

.contenedor-register{
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
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
</style>
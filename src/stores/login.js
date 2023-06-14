
import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", {
  state: () => {
    return { 
      usuario: {nombre: 'pe', apellido: 'pe', email: '', contrasenia: '', fotoPerfil: '', rol: '', id: ''},
      isLogin: false 
    };
  },
  actions: {
    logout() {
      this.isLogin = false;
    },
    login() {
      this.isLogin = true;
      console.log(this.usuario)
    },
  },
});

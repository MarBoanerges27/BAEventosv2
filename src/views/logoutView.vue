<template>
{{getout}}
</template>

<script>
import { useLoginStore }  from '../stores/login'
export default {
  data() {
    return {
       usuario: {nombre: '', apellido: '', email: '', contrasenia: '', fotoPerfil: '', rol: '', id: ''}
    };
  },
  setup() {
    const store = useLoginStore();
    const logout = store;
    return logout;
  },
  computed: {
    getout(){
        this.logout()
        this.$router.push("/");
    }
  },
};
</script>

<style>
</style>
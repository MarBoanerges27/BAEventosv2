<template>
{{getout}}
</template>

<script>
import { useLoginStore }  from '../stores/login'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
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
/*         this.usuario = {email: "" ,password: ""} */
        this.$router.push("/");
    }
  },
};
</script>

<style>
</style>
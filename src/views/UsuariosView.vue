<template>
  <ABMUsuarios />
</template>

<script>
import ABMUsuarios from "../components/ABMUsuarios.vue";
export default {
  components: {
    ABMUsuarios,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

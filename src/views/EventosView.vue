<template>
  <ABMEventos />
</template>

<script>
import ABMEventos from "../components/ABMEventos.vue";
export default {
  components: {
    ABMEventos,
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

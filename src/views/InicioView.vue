<template>
  <Start />
</template>

<script>
import Start from "../components/Inicio.vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";

export default {
  components: {
    Start,
  },
  setup() {
    const store = useLoginStore();
    const { isLogin } = storeToRefs(store);
    return { isLogin };
  },
};
</script>

<style>
</style>
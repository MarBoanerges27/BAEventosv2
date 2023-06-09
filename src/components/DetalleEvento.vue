<template>
  <h1>Prueba</h1>
  <div v-for="evento in eventos" :key="evento.id">
<h1>{{evento.titulo}}</h1>
<h1>{{evento.tipo}}</h1>
  </div> 
</template>

<script>
import listaServicioEvento from "../Servicios/listaServicioEvento"; //lo que quiero traer a mi componente

export default {
  components: {
    listaServicioEvento,
  },

  data() {

    return {
        eventos : []
    };
  },
  methods: {
    devolverEvento(id) {
      //buscar evento y devolverlo!
    },
  },

  async mounted() {
    this.eventos = await listaServicioEvento.cargarEvento();
  },
};
</script>

<style></style>

<template>
  <div class="card mb-3">
    <img :src="evento.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ evento.titulo }}</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p>Direcicon: {{ evento.direccion }}</p>
      <p>Tipo evento: {{ evento.tipo }}</p>
      <p class="card-text">
        <small class="text-muted">{{ evento.fecha }}</small>
      </p>
    </div>
  </div>
</template>

<script>
import listaServicioEvento from "../Servicios/listaServicioEvento";

export default {
  data() {
    return {
      evento: {},
    };
  },
  async created() {
    await this.devolverEvento();
  },
  methods: {
    async devolverEvento() {
      let ide = this.$route.params.idEvento;
      this.evento = await listaServicioEvento.cargarEventoPorId(ide);
    },
  },
};
</script>

<style></style>

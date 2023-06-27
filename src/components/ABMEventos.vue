<template>
  <h1 class="display-1">Eventos</h1>
  
    <!--<button type="button" class="btn btn-secondary btn-lg btn-block" @click="agregarEvento()">Agregar Evento</button>Hacer el agregar evento-->

  
  <!--Tabla BootsTrap-->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Titulo</th>
        <th scope="col">Tipo</th>
        <th scope="col">Direccion</th>
        <th scope="col">Fecha</th>
        <th scope="col"></th>
       
      </tr>
    </thead>
    <tbody v-for="evento in lista" :key="evento.id">
      <tr>
        <th scope="row">{{ evento.titulo }}</th>
        <td>{{ evento.tipo }}</td>
        <td>{{ evento.direccion }}</td>
        <td>{{ evento.fecha }}</td>
        <td>
          <!--<button @click="listaServicioEvento.agregarEvento()">Agregar</button>-->
          <button class="btn btn-light" @click="listaServicioEvento.modificarEvento(evento.id)">Editar</button>
          <button class="btn btn-danger" @click="eliminar(evento.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
  <!--Fin-->
  
</template>

<script>
import listaServicioEvento from "../Servicios/listaServicioEvento";

export default {
  components: {
    listaServicioEvento,
  },

  data() {
    return {
      elemento: {},
      lista: [], //determino que se va a retornar un array, declaro el mismo
    };
  },

  methods: {
    devolverEvento(id) {
      //buscar evento y devolverlo!
    },

    async eliminar(id) {
      await listaServicioEvento.eliminarEvento(id);
      await listaServicioEvento.cargarEvento();
    },
  },

  async mounted() {
    //consultar que hacía el mounted
    this.lista = await listaServicioEvento.cargarEvento(); //carp el array de eventos con lo que me devuelve "cargar eventos" de lista de servicio evento
  },
};
</script>

<style></style>

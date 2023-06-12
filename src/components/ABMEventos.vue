<template>
  <h1>Eventos</h1>
  <!--Tabla-->
  <table class="table">
    <div>
      <!--Filas-->
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Tipo</th>
          <th>Direccion</th>
          <th>Fecha</th>
        </tr>
      </thead>
    </div>
    <div v-for="evento in lista" :key="evento.id">
      <tr>
        <td>{{ evento.titulo }}</td>
        <td>{{ evento.tipo }}</td>
        <td>{{ evento.direccion }}</td>
        <td>{{ evento.fecha }}</td>
        <td>
            <!--<button @click="listaServicioEvento.agregarEvento()">Agregar</button>-->
            <button @click="listaServicioEvento.modificarEvento(evento.id)">Editar</button>
            <button @click="eliminar(evento.id)">Eliminar</button>
        </td>
      </tr>
    </div>
  </table>
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

    async eliminar(id){
        await listaServicioEvento.eliminarEvento(id)
        await listaServicioEvento.cargarEvento()
    },
  },

  async mounted() {
    //consultar que hacía el mounted
    this.lista = await listaServicioEvento.cargarEvento(); //carp el array de eventos con lo que me devuelve "cargar eventos" de lista de servicio evento
  },


};
</script>

<style></style>

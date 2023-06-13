<template>
  <h1>Usuarios</h1>
  <!--Tabla-->
  <table class="table">
    <div>
      <!--Filas-->
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>E-mail</th>
        </tr>
      </thead>
    </div>
    <div v-for="usuario in lista" :key="usuario.id">
      <tr>
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.apellido }}</td>
        <td>{{ usuario.email }}</td>
        <td>
          <!--<button @click="listaServicioEvento.agregarEvento()">Agregar</button>-->
          <button @click="listaServicioUsuario.modificarEvento(usuario.id)">
            Editar
          </button>
          <button @click="eliminar(usuario.id)">Eliminar</button>
        </td>
      </tr>
    </div>
  </table>
</template>

<script>
import listaServicioUsuario from "../Servicios/listaServicioUsuario";
export default {
  components: {
    listaServicioUsuario,
  },

  data() {
    return {
      elemento: {},
      lista: [], //determino que se va a retornar un array, declaro el mismo
    };
  },

  methods: {
    devolverUsuario(id) {
      //buscar evento y devolverlo!
    },

    async eliminar(id) {
      await listaServicioUsuario.eliminarUsuario(id);
      await listaServicioUsuario.cargarUsuario();
    },
  },

  async mounted() {
    //consultar que hacía el mounted
    this.lista = await listaServicioUsuario.cargarUsuario(); //carp el array de eventos con lo que me devuelve "cargar usuario" de lista de servicio usuario
  },
};
</script>

<style></style>

<template>
  <h1 class="display-1">Usuarios</h1>
  <!--
  <button
    type="button"
    class="btn btn-secondary btn-lg btn-block"
    @click="agregarUsuario()"
  >
    Agregar Usuario</button
  >Hacer el agregar evento-->
  <!--Tabla-->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">E-mail</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody v-for="usuario in lista" :key="usuario.id">
      <tr>
        <th scope="row">{{ usuario.nombre }}</th>
        <td>{{ usuario.apellido }}</td>
        <td>{{ usuario.email }}</td>
        <td>
          <!--<button class="btn btn-light" @click="listaServicioEvento.agregarEvento()">Agregar</button>-->
          <button
            class="btn btn-light"
            @click="listaServicioUsuario.modificarEvento(usuario.id)"
          >
            Editar
          </button>
          <button class="btn btn-danger" @click="eliminar(usuario.id)">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
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

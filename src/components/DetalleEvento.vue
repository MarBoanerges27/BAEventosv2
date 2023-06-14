<template>
  <div class="contenedor">
    <div class="contenedor-img">
      <img class="img-div" :src="evento.img" alt="">
      
    </div>
      <div class="titulo">
        <h1>Titulo: {{evento.titulo}}</h1>
        <h2>Fecha: {{evento.fecha}}</h2>
        <h2>Direcicon: {{evento.direccion}}</h2>
        <h2>Tipo evento: {{evento.titulo}}</h2>
      </div>
    <div class="descripccion">

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Laudantium veniam deleniti saepe ullam. Accusantium harum necessitatibus
          pariatur iusto, et aliquid, deleniti iste laudantium dolorem ipsa non recusandae
           tempore nam sunt?</p>
    </div>
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
        eventos : [],
        evento: {},
    };
  },
  methods: {
    async devolverEvento() {
      let id = 1
       this.eventos = await listaServicioEvento.cargarEvento();

       this.evento = this.eventos.filter(evento => evento.id == id)
    },
  },
};
</script>

<style>
.contenedor{
  background-color: rgba(252, 182, 78, 0.473);
  width:60rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 10px;
}

.contenedor-img{
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  height: auto;
  
}

.titulo{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img-div{
  width: 100%;
  height: 30vh;
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.descripccion{
  width: 90%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1000px){
  .contenedor{
 /*    flex-direction: column; */
    width: 30rem;
  }

  .contenedor-img{
      width: 25rem;
  }
}

@media screen and (max-width: 500px){
  .contenedor{
    width: 22rem;
  }

  .contenedor-img{
      width: 17rem;
  }

  .img-div{
    height: 12rem;
    
  }
}
</style>

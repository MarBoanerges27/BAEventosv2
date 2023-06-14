<template>
  <main>
    <div class="contenedor-buscadores" >
        <div v-for="tipo in ArrayTipo" :key="tipo">
            <input  type="checkbox" :value="tipo" :id="tipo" v-model="categoriasSeleccionadas" checked>         
            <label :for="tipo">
                {{tipo}}
            </label>
            
        </div>
        <div class="contenedor-search">
                <input type="text" class="search" placeholder="Buscar por titulo" v-model="inputFiltro">
                {{filtrar}}
        </div>
    </div>
        

    <div class="titulo">
        <h1 class="subtitulo-inicio">Eventos de su interes</h1>
    </div>
    
    <template v-for="e of eventos" :key="e.id" >
        <div class="card" style="width: 18rem; margin: 1rem" data-aos="fade-left">
            <img :src="e.img" class="card-img-top ">
            <div class="card-body">
                <h5 class="card-title">{{e.titulo}} </h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Direccion: {{e.direccion}}</li>
                <li class="list-group-item">Fecha: {{e.fecha}} </li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Detalles</a>
                <a href="#" class="card-link">Asistir</a>
            </div>
        </div>
    </template>
     <P v-if="eventos.length == 0">No hay eventos seleccionados</P>
  </main>
</template>

<script>
import listaServicioEvento from "../Servicios/listaServicioEvento";

export default {
  components: {
    listaServicioEvento,

  },

  data() {
    return {
        eventos : [],
        ArrayTipo: [],
        backupEventos: [],
        categoriasSeleccionadas: [],
        inputFiltro: '',
    };
  },
  created(){
    this.filtrarEventos()
  },
  methods: {
    devolverEvento(id) {
      //buscar evento y devolverlo!
    },
    async filtrarEventos(){

        try{
            this.eventos = await listaServicioEvento.cargarEvento();
  
            this.backupEventos = this.eventos 
            this.ArrayTipo = this.backupEventos.map(evento => evento.tipo)
            this.ArrayTipo = new Set(this.eventos.map(evento => evento.tipo))
            this.ArrayTipo = Array.from(this.ArrayTipo)
            this.eventos.forEach(element => {
            //si el tip no esta dentro del array lo agrego 
            if(!this.ArrayTipo.includes(element.tipo)){

                this.ArrayTipo.push(element.tipo)
            }
        });
        }catch(err){
             console.log(err)
        }
        
    }
  },
  computed:{
        filtrar(){
            let primerFiltro = this.backupEventos.filter(evento => evento.titulo.toLowerCase().includes(this.inputFiltro.toLowerCase()))
            
            if(primerFiltro.length > 0){
                this.eventos = primerFiltro
                let segundoFiltro = primerFiltro.filter(evento1 => this.categoriasSeleccionadas.includes(evento1.tipo))
                if(segundoFiltro.length > 0){
                   this.eventos = segundoFiltro
                }
            }
        }
  },
};
</script>

<style scope>
.card{
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.contenedor-buscadores{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.titulo{
    width: 100%;
    text-align: center;
    
}
.card-img{
    width: 20rem;
    height: 15rem;
}

.contenedor-card{
    padding: 10px;
    background-color: #FDECBB;
    margin: 1rem;
    width: 21rem;
    border-radius: 10px;
}

/* html{
  background-color: #FBD156;
} */

body{
    background-color: #FBD156;
}

.search{
    min-width: 21rem;
    height: 1.5rem;
    border-radius: 10px;
}

.contenedor-search{
    display: flex;
    justify-content: center;
}

main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.subtitulo-inicio{
    color: #FB7F56;
}
</style>
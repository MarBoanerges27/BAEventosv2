<template>
  <main>
    <div class="contenedor-search">
        <input type="text" class="search">
    </div>
    
    <h2 class="subtitulo-inicio">Eventos de su interes</h2>
    
    <div class="contenedor-card">
        <div>
            <p>Evento: Feria del Libro</p>
            <p>Direccion: Avda. Santa Fe 4201</p>
        </div>
        <img class="card-img" src="../assets/img/feria-del-libro.jpg" alt="">
    </div>

    <div class="contenedor-card">
        <div>
            <p>Evento: Noche De Cine</p>
            <p>Direccion: Suipacha 232</p>
        </div>
        <img class="card-img" src="../assets/img/cine.jpg" alt="">
    </div>

  </main>
</template>

<script>

</script>

<style scope>
.card-img{
    width: 20rem;
}

.contenedor-card{
    padding: 10px;
    background-color: #FDECBB;
    margin: 1rem;
    width: 20rem;
}

html{
  background-color: #FBD156;
}

.search{
    min-width: 21rem;
    height: 1.5rem;
    border-radius: 10px;
}

.contenedor-search{
    display: flex;
    width: 100%;
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
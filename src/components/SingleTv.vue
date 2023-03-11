<script>
// Importa lo store della applicazione
import { store } from '../store.js'
export default {

  // Definisce il nome del componente
  name: "SingleTv",
  // Definisce le proprietà che vengono passate al componente da un altro componente
  props: ["info"],
  // Definisce i dati che il componente utilizza
  data() {
    return {
      // Aggiunge lo store alla componente
      store,
      // Definisce il flag per l'evento mouseover
      over: false,
    }
  },
  // Definisce i calcoli che possono essere utilizzati all'interno della componente
  computed: {
    // Verifica se la lingua originale del film/serie TV è presente nell'array di flag memorizzati nello store
    flagInStore() {
      if (this.store.listOfFlags.includes(this.info.original_language)) {
        return true
      }
    },
    // Ritorna il percorso del file dell'immagine del flag
    flagType() {
      return `../../public/img/flag/${this.info.original_language}.png `
    },
    // Calcola il numero di stelle per il rating del film/serie TV
    stars() {
      return parseInt(this.info.vote_average / 2)
    }
  }
}
</script>

<template>
  <!-- Crea un elemento elenco non ordinato e aggiunge un gestore di eventi per mouseover e mouseleave-->
  <li class="film" @mouseover="over = true" @mouseleave="over = false">
    <!-- Aggiunge un blocco di informazioni visibili durante l'evento mouseover -->
    <div v-if="over" class="info">
      <div>
        <!-- Mostra il titolo della serie TV -->
        <span>Titolo: </span>{{ info.name }}
      </div>
      <div>
        <!-- Mostra il titolo originale della serie TV -->
        <span>Titolo Originale: </span>{{ info.original_name }}
      </div>
      <span>Lingua Originale: </span>
      <!-- Mostra l'immagine del flag se presente nello store, altrimenti mostra solo il nome della lingua originale -->
      <img class="flag" v-if="flagInStore" :src="flagType" alt="">
      <div v-else>
        <span>Lingua Originale: </span> {{ info.original_language }}
      </div>
      <div class="stars-wrap">
        <span>Voto: </span>
        <!-- Mostra le stelle per il rating del film/serie TV -->
        <img v-for="star in stars" src="../../public/img/star.webp" alt="" class="star">
      </div>
      <div>
        <!-- Mostra la trama del film/serie TV -->
        <span>Overview: </span>{{ info.overview }}
      </div>
    </div>
    <!-- Aggiunge l'immagine del poster del film/serie TV -->
    <img :src="store.img + info.poster_path" alt="">
  </li>
</template>

<style lang="scss" scoped>
.film {
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info {
        position: absolute;
        color: rgb(200, 200, 200);
        width: 300px;
        height: 500px;
        background-color: rgba(0, 0, 0, 0.6);
        font-size: 1rem;
        padding: 20px;
        overflow: auto;



        span {
            color: white;
        }


        img.flag {
            border-radius: 50%;
            box-shadow: 0 0 6px 3px rgba(#000, 0.15);
            width: 20px;

        }

        img.star {
            width: 40px;
            color: white;
        }
    }
}
</style>

<script>
import { store } from '../store.js' //importa lo store globale

export default {
  name: 'SingleFilm',
  props: ['info'], //definisce la prop "info", che rappresenta i dati del singolo film

  data() {
    return {
      store, //chiama lo store globale
      over: false //variabile di stato che tiene traccia del fatto che il cursore del mouse sia sopra al componente o no
    }
  },

  computed: {
    flagInStore() { //calcola se la bandiera della lingua del film è presente nello store globale
      if (this.store.listOfFlags.includes(this.info.original_language)) {
        return true
      }
    },
    flagType() { //ritorna il percorso dell'immagine della bandiera corrispondente alla lingua del film
      return `../../public/img/flag/${this.info.original_language}.png `
    },
    stars() { //calcola il numero di stelle da mostrare in base al voto del film
      return parseInt(this.info.vote_average / 2)
    }
  }
}
</script>

<template>
  <li class="film" @mouseover="over = true" @mouseleave="over = false">
    <!-- mostra le informazioni sul film solo se il mouse è sopra al componente -->
    <div v-if="over" class="info">
      <div><span>Titolo: </span>{{ info.title }}</div>
      <div><span>Titolo Originale: </span>{{ info.original_title }}</div>
      <span>Lingua Originale: </span>
      <img class="flag" v-if="flagInStore" :src="flagType" alt=""> <!-- mostra l'immagine della bandiera solo se la lingua del film è presente nello store globale -->
      <div v-else><span>Lingua Originale: </span> {{ info.original_language }}</div>
      <div class="stars-wrap">
        <span>Voto: </span>
        <img v-for="star in stars" src="../../public/img/star.webp" alt="" class="star"> <!-- mostra le stelle corrispondenti al voto del film -->
      </div>
      <div><span>Overview: </span>{{ info.overview }}</div>
    </div>
    <!-- mostra l'immagine del poster del film -->
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
    overflow: auto;
    padding: 20px;

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

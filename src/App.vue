<script>
import axios from "axios";
import appHead from './components/appHead.vue'
import FilmList from './components/FilmList.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    appHead,
    FilmList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // Questo metodo effettua una richiesta HTTP per ottenere un elenco di film 
    // utilizzando le impostazioni di ricerca memorizzate in store
    getFilms() {
      let myUrl = `${store.apiURL}?${store.apiKey}&${store.parameter}=${store.query} `;

      axios
        .get(myUrl)
        .then(res => {
          store.filmList = res.data.results
          store.isLoading = false;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    },
    // Questo metodo effettua una richiesta HTTP per ottenere un elenco di programmi televisivi 
    // utilizzando le impostazioni di ricerca memorizzate in store
    getTv() {
      let myUrl = `${store.TVapiURL}?${store.apiKey}&${store.TVparameter}=${store.query} `;

      axios
        .get(myUrl)
        .then(res => {
          store.tvList = res.data.results
          store.isLoading = false;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    },
    // Questo metodo richiama i metodi getFilms() e getTv() per ottenere un elenco di film e di programmi televisivi
    generalGet() {
      this.getTv();
      this.getFilms();
    }
  },
  // Questo hook viene chiamato quando il componente viene montato nella pagina
  mounted() {
    this.generalGet();
  }
}  
</script>

<template>
  <header>
    <!-- Questo componente è responsabile dell'input di ricerca dell'utente -->
    <appHead @search="generalGet" />
  </header>
  <!-- Questo componente visualizza l'elenco di film e programmi televisivi ottenuti dalle richieste HTTP -->
  <FilmList />
</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>

<script >
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
        }

        );
    },
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
        }

        );
    },
    generalGet() {
      this.getTv();
      this.getFilms();
    }
  },

  mounted() {
    this.generalGet();

  }
}  
</script>

<template>
  <header>
    <appHead @search="generalGet" />
  </header>
  <FilmList />
</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>

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

      // if (store.status === "Alive") {

      //   myUrl += `?${store.parameter}=${store.status}`

      // } else if (store.status === "Dead") {

      //   myUrl += `?${store.parameter}=${store.status}`

      // } else if (store.status === "unknown") {

      //   myUrl += `?${store.parameter}=${store.status}`

      // }

      axios
        .get(myUrl)
        .then(res => {
          store.filmList = res.data.results
          store.isLoading = false;
          // store.totalResults = store.filmList.length;
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
          // store.totalResults = store.filmList.length;
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
  <appHead @search="generalGet" />
  <FilmList />
</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>

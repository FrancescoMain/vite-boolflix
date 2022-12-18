<script >
import axios from "axios";
import SearchBar from './components/SearchBar.vue'
import FilmList from './components/FilmList.vue'
import { store } from './store.js'
export default {

  name: "App",
  components: {
    SearchBar,
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
    }
  },
  mounted() {
    this.getFilms();
  }
}
</script>

<template>
  <SearchBar />
  <FilmList />
</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>

<script>
import SingleFilm from '../components/SingleFilm.vue'
import SingleTv from '../components/SingleTv.vue'
import { store } from "../store.js";

export default {
    name: "FilmList",
    components: {
        SingleFilm,
        SingleTv
    },
    data() {
        return {
            store, // Inizializza la variabile 'store' come un dato del componente con lo stato condiviso
        }
    }
}
</script>

<template>
    <section class="container">
        <ul class="row">
            <!-- Crea un componente 'SingleFilm' per ogni elemento dell'array 'store.filmList' e passa l'oggetto 'film' come proprietà -->
            <SingleFilm :info="film" class="col" v-for="film in store.filmList" :key="film.id" />
            <!-- Crea un componente 'SingleTv' per ogni elemento dell'array 'store.tvList' e passa l'oggetto 'tv' come proprietà -->
            <SingleTv :info="tv" class="col" v-for="tv in store.tvList" :key="tv.id" />
        </ul>
    </section>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: center;
}
</style>

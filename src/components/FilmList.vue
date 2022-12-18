<script >
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
            store,
        }
    }

}




</script>

<template>
    <section class="container">
        <ul class="row">

            <SingleFilm :info="film" class="col" v-for="film in store.filmList" :key="film.id" />


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

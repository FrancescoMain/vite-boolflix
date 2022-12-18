<script >
import SingleFilm from '../components/SingleFilm.vue'

import { store } from "../store.js";

export default {

    name: "FilmList",
    components: {
        SingleFilm
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
        <div class="row">
            <div class="col" v-for="film in store.filmList" :key="film.id">
                <SingleFilm :info="film" />
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: center;
}
</style>

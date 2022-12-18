<script >
import { store } from '../store.js'
export default {

    name: "SingleFilm",
    props: ["info"],
    data() {
        return {
            store,
        }
    },
    computed: {
        flagInStore() {
            if (this.store.listOfFlags.includes(this.info.original_language)) {
                return true
            }

        },
        flagType() {
            return `../../public/img/flag/${this.info.original_language}.png `
        }
    }
}


</script>

<template>

    <div class="film text-center">
        <h2>{{ info.title }}</h2>
        <h3>{{ info.original_title }}</h3>
        <img :src="store.img + info.backdrop_path" alt="">
        <img class="flag" v-if="flagInStore" :src="flagType" alt="">
        <h4 v-else>{{ info.original_language }}</h4>
        <h5>{{ info.vote_average }}</h5>
    </div>


</template>

<style lang="scss" scoped>
.film {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h2,
    h3,
    h5 {
        text-transform: capitalize;

        &::after {
            content: '';
            display: block;
            width: 40px;
            height: 1px;
            margin: 1rem, auto;
        }
    }

    img.flag {
        border-radius: 50%;
        box-shadow: 0 0 6px 3px rgba(#000, 0.15);
        width: 20px;
        display: block;

    }
}
</style>

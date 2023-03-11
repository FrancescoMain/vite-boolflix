<script>
import { store } from '../store.js'

export default {
    // definizione del nome del componente
    name: "SearchBar",
    // definizione dei dati del componente
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- template del componente -->
    <div class="wrapper">
        <h2>BOOLFIX</h2>
        <div class="row">
            <div class="col-auto">
                <!-- input per la ricerca con v-model che legge il valore di store.query -->
                <input v-model="store.query" class="form-control" placeholder="Cerca un film"
                    @keyup.prevent="$emit('search')">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.wrapper {
    background-color: $bg-color-first ;
    display: flex;
    justify-content: space-between;

    h2 {
        padding: 20px;
        color: $title-color;
    }

    div.row {
        padding: 20px
    }
}
</style>

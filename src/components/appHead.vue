<script >
import { store } from '../store.js'

export default {

    name: "SearchBar",


    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="wrapper">
        <h2>BOOLFIX</h2>
        <div class="row">
            <div class="col-auto">
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


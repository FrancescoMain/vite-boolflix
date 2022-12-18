<script >

export default {

    name: "SingleFilm",
    props: ["info"]

}
</script>

<template>

    <div class="film text-center">
        <h2>{{ info.title }}</h2>
        <h3>{{ info.original_title }}</h3>
        <h4>{{ info.original_language }}</h4>
        <h5>{{ info.vote_average }}</h5>
    </div>


</template>

<style lang="scss" scoped>
h4 {
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem, auto;
    }
}

img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>

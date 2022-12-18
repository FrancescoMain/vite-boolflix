import { reactive } from 'vue'

export const store = reactive({
    isLoading: true,
    filmList: [],
    apiURL: " https://api.themoviedb.org/3/search/movie",
    apiKey: "api_key=ce36e3c5e2b96caed3d113bbe685a349",
    parameter: "query",
    query: "",
    listOfFlags: ["en", "it", "ja", "uk", "fr", "es", "de"],


    // titolo: "Rick and Morty App",
    // status: "Open this select menu",
    // parameter: "status",
    // options: [
    //     { text: 'Alive', value: 'Alive' },
    //     { text: 'Dead', value: 'Dead' },
    //     { text: 'Unknown', value: 'unknown' },
    // ],

    // totalResults: 0
});
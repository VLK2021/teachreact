import {MY_KEY_API} from "./key";

export const urls = {
    searchFilm: (query) => `/search/movie?api_key=${MY_KEY_API}&language=uk-UK&query=${query}&include_adult=true`,
    singleMovie: (id) => `/movie/${id}?api_key=${MY_KEY_API}&language=uk-UK`,
}
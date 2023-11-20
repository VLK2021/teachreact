import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const movieService = {
    getAll: (query) => axiosService.get(urls.searchFilm(query)).then(value => value.data),
    getById: (id) => axiosService.get(urls.singleMovie(id)).then(value => value.data),
}
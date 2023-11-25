import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const movieService = {
    getAll: (query, page) => axiosService.get(urls.searchFilm(query, page)).then(value => value.data),
    getById: (id) => axiosService.get(urls.singleMovie(id)).then(value => value.data),
}
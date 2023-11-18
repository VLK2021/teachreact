import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const movieService = {
    getAll: (query) => axiosService.get(urls.searchFilm(query)).then(value => value.data),
}
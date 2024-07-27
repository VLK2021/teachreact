import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
}
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


export const commentService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
}
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const commentsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
}
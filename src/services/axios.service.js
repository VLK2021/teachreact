import axios from "axios";

import MY_TOKEN from "../constants/token.api";


const baseURL = 'https://api.themoviedb.org/3';

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${MY_TOKEN}`
    }
});
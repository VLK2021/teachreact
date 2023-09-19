import axios from "axios";

import baseURL from "../config/baseURL";


const axiosService = axios.create({baseURL});

export {axiosService}
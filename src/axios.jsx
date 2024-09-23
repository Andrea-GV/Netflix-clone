import axios from "axios";
import requests from "./requests";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",

})
// instance.interceptors.push({
//   request: (config) => {
//         config.params = { api_key: requests.API_KEY };
//         console.log(config)
//     return config;
//   },
// });

export default instance;

// 27.8.24 HE DEJADO POR AQUÍ EL PROYECTO, ME DA UN ERROR AL TRAER LA INFO DEL TRAILER EN PLAYER.JSX
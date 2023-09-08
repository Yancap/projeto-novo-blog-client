import axios from "axios";

export const api_client = axios.create({
    baseURL: 'http://localhost:3333/client/'
})
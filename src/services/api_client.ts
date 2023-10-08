import axios from "axios";

export const api_client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})
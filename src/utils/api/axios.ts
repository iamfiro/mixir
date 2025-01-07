import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const client = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

const accessToken = localStorage.getItem("accessToken");

export const authClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
})
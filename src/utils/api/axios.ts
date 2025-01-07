import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL as string;

export const client = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

const token = localStorage.getItem("accessToken");

export const authClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
})
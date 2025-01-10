import axios from "axios";
import Cookies from 'js-cookie'

const baseURL = import.meta.env.VITE_API_URL as string;

export const client = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

const token = Cookies.get("accessToken");

export const authClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
})
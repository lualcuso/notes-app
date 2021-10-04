import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/luiscubillosoto/notes-app-db/',
    timeout: 10000
});

export function getNotes() {
    try {
        return axiosInstance.get('/notes');
    } catch (error) {
        return error;
    }
}
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/luiscubillosoto/notes-app-db/',
    timeout: 10000
});

export function getFolders() {
    try {
        return axiosInstance.get('/folders');
    } catch (error) {
        return error;
    }
}
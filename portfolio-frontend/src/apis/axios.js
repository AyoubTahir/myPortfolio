import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000';

const BASE_URL_API = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL_API
});

axiosInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('auth')) {
        // try{
        const auth = JSON.parse(localStorage.getItem('auth'));
        req.headers.Authorization = `Bearer ${auth.token}`;
        // } catch (err)
        // {
        //  localStorage.clear();
        //}
    }
    return req;
})

export default axiosInstance;
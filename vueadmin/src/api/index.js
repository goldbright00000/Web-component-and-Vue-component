import axios from 'axios';
// import util from '@/utils/api'

const api_base_url = 'https://jsonplaceholder.typicode.com/'

var openapi_server = axios.create({
    baseURL: api_base_url,
    headers: {
        'Content-Type': 'application/json'
    }
});

const getConfig = headerparams => { return { headers: { 'authorization': localStorage.getItem('token') , ...headerparams } }; };

export const getUsers = params => { return openapi_server.get(`/users`) }
export const getPosts = params => { return openapi_server.get(`/posts`) }
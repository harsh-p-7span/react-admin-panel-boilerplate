import _ from 'lodash';
import axios from 'axios';
import { setUserToken } from '../utils/manageUserToken';

const BASE_URL = 'http://localhost:3000/';
const request = axios.create({
    baseURL: BASE_URL
});

request.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
request.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        if (_.get(response, 'data.token')) {
            setUserToken(_.get(response, 'data.token'));
        }
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default request;

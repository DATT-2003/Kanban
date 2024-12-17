import axios from "axios";
import queryString from "query-string";
const baseURL = `${window.location.protocol}//${window.location.hostname}:3001`;
const axiosClient = axios.create({
    baseURL,
    paramsSerializer: (params) => queryString.stringify(params)
})
axiosClient.interceptors.request.use(async (config: any) => {
    config.headers = {
        Authorization: '',
        Accept: 'application/json',
        ...config.headers,
    }
    //config.data;
    return config;
});
axios.interceptors.response.use(res => {
    if (res.data && res.status >= 200 && res.status < 300) {
        return res.data.data;
    }
    else {
        return Promise.reject(res.data.data)
    }
},
    (error) => {
        const { response } = error
        return Promise.reject(response.data)
    }
)

export default axiosClient;
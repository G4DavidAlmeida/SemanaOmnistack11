import axios from "axios";

const api = axios.create({
    baseURL: 'https://3333-e8f133c4-440c-43c8-8583-c30c12661c10.ws-us02.gitpod.io/'
});

export default api;
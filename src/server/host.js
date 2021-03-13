import axios from "axios";

export  let  host ="http://localhost:8080/api";

export  let  getFile ="http://localhost:8080/api/files/preview/";

export let headers = {
    'Content-Type': 'application/json; charset=utf-8',
};


export let axiosInstance = axios.create({
    baseURL: `${host}`,
    timeout: 30000
});

export let axiosInstanceAdmin = axios.create({
    baseURL: `${host+"/admin"}`,

});


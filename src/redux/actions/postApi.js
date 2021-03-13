import axios from "axios";
import {axiosInstance} from "../../server/host";

export function allPosts() {
    const req = axiosInstance.get("/admin/news/all")
        .then(res => res.data);

    return {
        type:"GET_POSTS",
        payload: req
    }
}

export function getPost(id) {
    const req = axiosInstance.get("/admin/news/"+id)
        .then(res => res.data);
    return {
        type:"GET_POST",
        payload: req
    }
}

export function getPopularPosts() {
    const req = axiosInstance.get("/admin/news/likes")
        .then(res => res.data);
    return {
        type:"GET_MOST_POSTS",
        payload: req
    }
}
import axios from "axios";
import {axiosInstance} from "../../server/host";

export function allPosts() {
    const req = axiosInstance.get("/admin/news/all")
        .then(res => res.data);

    return {
        type: "GET_POSTS",
        payload: req
    }
}

export function allPostsByPages(page = 0, size = 10) {
    const req = axiosInstance.get("/admin/news/rel?page=" + page + "&size=" + size)
        .then(res => res.data);

    return {
        type: "GET_POSTS_PAGES",
        payload: req
    }
}

export function getPost(id) {
    const req = axiosInstance.get("/admin/news/" + id)
        .then(res => res.data);
    return {
        type: "GET_POST",
        payload: req
    }
}

export function getPopularPosts() {
    const req = axiosInstance.get("/admin/news/likes")
        .then(res => res.data);
    return {
        type: "GET_MOST_POSTS",
        payload: req
    }
}

export function counts() {
    const req= axiosInstance.get("/admin/social/one").then(res =>res.data);

    return {
        type: "GET_COUNTS",
        payload: req
    }
}
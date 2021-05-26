import {axiosInstance} from "../../server/host";

export function allShortPosts(page=0,size=10) {
    const req = axiosInstance.get("/admin/shortnews?page="+page+"&size="+size)
        .then(res => res.data);

    return {
        type:"GET_SHORT_POSTS",
        payload: req
    }
}
export function getPostByCategoryId(categoryid) {
    const req = axiosInstance.get("/admin/"+categoryid+"/shortnews/")
        .then(res => res.data);
    return {
        type:"GET_SHORT_POST_BY_CATEGORID",
        payload: req
    }
}
export function getHeadShortPosts() {
    const req = axiosInstance.get("/auth/shortnews/head")
        .then(res => res.data);
    return {
        type:"GET_HEAD_SHORT_POSTS",
        payload: req
    }
}
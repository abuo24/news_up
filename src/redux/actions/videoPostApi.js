import {axiosInstance} from "../../server/host";

export function allVideoPosts() {
    const req = axiosInstance.get("/videonews")
        .then(res => res.data);
    return {
        type:"GET_VIDEO_POSTS",
        payload: req
    }
}export function allVideos(page=0,size=8) {
    const req = axiosInstance.get("/videonews/all?page="+page+"&size="+size)
        .then(res => res.data);
    return {
        type:"GET_VIDEOS",
        payload: req
    }
}
export function getPostByCategoryId(categoryid) {
    const req = axiosInstance.get("/admin/"+categoryid+"/shortnews/")
        .then(res => res.data);
    return {
        type:"GET_SHORT_POST_BY_CATEGORIID",
        payload: req
    }
}
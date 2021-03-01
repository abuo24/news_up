import axios from "axios";
import {axiosInstance} from "../../server/host";

export function allPosts() {
    const req = axiosInstance.get("/admin/shortnews")
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
        type:"GET_SHORT_POST_BY_CATEGORIID",
        payload: req
    }
}
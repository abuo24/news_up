import {axiosInstanceAdmin, host} from "../../server/host";
import axios  from "axios";

export let postsApi = {

    setLikesAndViews: (id) => {
        return axios.put(`${host}/admin/news/like/${id}`)
    }

    // resetPassword: (id, data) => {
    //     return axiosInstanceAdmin.post("/news/like/" + id, {
    //         likes: data.likes,
    //         views: data.views
    //     }, {
    //         headers: {
    //             code: data.code,
    //             phone: data.phone
    //         }
    //     })
    // }

};
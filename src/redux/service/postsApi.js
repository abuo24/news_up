import {axiosInstanceAdmin, host} from "../../server/host";
import axios from "axios";

export const postsApi = {
    setLikesAndViews: (id) => {
        return axios.put(`${host}/admin/news/views/${id}`)
    },
    setLikes: (id) => {
        return axios.put(`${host}/admin/news/like/${id}`)
    },
    setDisLikes: (id) => {
        return axios.put(`${host}/admin/news/dislike/${id}`)
    },
    createComment: (newsid, data) => {
        return axios.post(`${host}/comments/${newsid}`, {
                author: data.author,
                authorMail: data.authorMail,
                comments_id: data.comments_id === "" ? null : data.comments_id,
                message: data.message
            }
        )
    },
    createMessage: (data) => {
        return axios.post(`${host}/message/add`, {
                firstName: data.firstName,
                lastName: data.lastName,
                message: data.message
            }
        )
    }
};
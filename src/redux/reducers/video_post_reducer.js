export default function (state={}, action) {
    switch (action.type) {
        case "GET_VIDEO_POSTS":
            return {...state, posts: action.payload}
        case "GET_VIDEOS":
            return {...state, all: action.payload}
        case "GET_SHORT_POST_BY_CATEGORIID":
            return {...state, posts_category: action.payload}
        default:
            return state;
    }
}
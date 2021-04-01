export default function (state={}, action) {
    switch (action.type) {
        case "GET_POST":
            return {...state, post: action.payload}
        case "GET_POSTS":
            return {...state, posts: action.payload}
        case "GET_MOST_POSTS":
            return {...state, popular_posts: action.payload}
        case "GET_POSTS_PAGES":
            return {...state, post_pages: action.payload}
        case "GET_COUNTS":
            return {...state, count: action.payload}
        case "GET_MOST_POSTS_DATE":
            return {...state, popular_date: action.payload}

        default:
            return state;
    }
}
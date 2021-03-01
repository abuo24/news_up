export default function (state={}, action) {
    switch (action.type) {
        case "GET_CATEGORY":
            return {...state, categories: action.payload}
        case "GET_POST_CATEGORY":
            return {...state, news: action.payload}
        // case "GET_COMMENTS":
        // return {...state, file: action.payload}
        default:
            return state;
    }
}
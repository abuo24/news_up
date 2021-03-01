import {combineReducers} from "redux";
import post_reducer from "./post_reducer";
import comments_reducer from "./comments_reducer";
import category_reducer from "./category_reducer";
import short_post_reducer from "./short_post_reducer";

const rootReducer = combineReducers({
    post_reducer,
    comments_reducer,
    category_reducer,
    short_post_reducer
});
export default rootReducer;
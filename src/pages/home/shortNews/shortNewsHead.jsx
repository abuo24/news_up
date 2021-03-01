import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPostByCategoryId} from "../../../redux/actions/shortPostApi";
import ShortNews from "./shortNews";
import ShortNewsItem from "./shortNewsItem";

const ShortNewsHead = (props) => {


    const [post, setPost] = useState(null);

    useEffect(() => {
        props.getPostByCategoryId(props.category.id).then(
            res => setPost(res.payload.data)
        ).catch(
            err => console.log(err)
        )
    }, []);

    return (
        <>
            <div className="col-md-3 col-sm-3 col-xs-12">
                <div className="short-news">
                    <h4 className="sn-title">
                        {props.category.name}</h4>
                    { post && post.shortnews && post.shortnews.slice(0, 2).map((item, key) => (
                        <ShortNewsItem key={item.id} title={item.title} />
                    ))}
                </div>
            </div>
        </>
    );
}

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getPostByCategoryId}, dispatch));

export default connect(mstp, mdtp)(ShortNewsHead)

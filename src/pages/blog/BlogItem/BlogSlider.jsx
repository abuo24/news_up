import React, {useEffect, useState} from 'react';
import img from "../../../img/post-img/blog-post/blog-post-details-img.jpg"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getFile} from "../../../server/host";

const BlogSlider = (props) => {

    const [lang,setLang] = useState(true);

    useEffect(()=>{
      setLang(props.langReducer.type=="uz"?true:false)
        },[]);

    return (
        <div>
            <div className="blog-post-slider">
                <div className="container">
                    <div className="row">
                        <div className="blg-slider-text text-center">
                            <NavLink to={"/"} className="blg-post-cat  text-center">{lang?"BOSH SAHIFA":"ГЛАВНЫЙ"}</NavLink>
                            <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                                <a href="#" className="blog-post-title  text-center">{props.post_reducer.post&&props.post_reducer.post.data&& lang?props.post_reducer.post&&props.post_reducer.post.data&&props.post_reducer.post.data.titleUz:props.post_reducer.post&&props.post_reducer.post.data&&props.post_reducer.post.data.titleRu}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={ props.post_reducer.post&&props.post_reducer.post.data&&getFile+props.post_reducer.post.data.headAttachment.hashId} alt="blog post image"/>
            </div>
        </div>
    );
};

const mstp = (state) => (state);

export default connect(mstp, null)(BlogSlider);

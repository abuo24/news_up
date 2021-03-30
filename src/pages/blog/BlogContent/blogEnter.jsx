import React, {useEffect, useState} from 'react';
import img from "../../../img/post-img/entertainment/entertainment-img2.jpg"
import {AiTwotoneRightCircle, BiCalendarAlt, FaComment} from "react-icons/all";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getFile} from "../../../server/host";
import langReducer from "../../../redux/reducers/langReducer";

const BlogEnter = (props) => {

    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
        }
    )

    const getBlogs = props.post_reducer&&props.post_reducer.posts&&props.post_reducer.posts.data&&props.post_reducer.posts.data.slice(0,10).map((item, key)=>(
        <BlogEnterItem category={lang?item.category.nameUz:item.category.nameRu} img={getFile+item.headAttachment.hashId} comment={item.comments} date={item.createAt} title={lang?item.titleUz:item.titleRu} to={"/blog/"+item.id} key={key}/>
        ))

    return (
        <div className="fitness-area clm2-entertainment">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-top-bar">
                            <h4>{langs.foryou}</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {getBlogs}
                </div>
            </div>
        </div>
    );
};

const BlogEnterItem = ({img, category, date, comment, to, title}) => {
    return(
        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="trd-post-item">
                <img src={img} alt="entertainment-img"/>
                <div className="trd-post-info">
                    <div className="trd-desc-crumbs crmbs-one">
                        <span className="trd-cat">{category}<AiTwotoneRightCircle/></span>
                        <span><BiCalendarAlt/>{date.slice(0,16)}</span>
                        <span><FaComment/>{comment===undefined?0:comment.length}</span>
                    </div>
                    <NavLink to={to} className="trd-post-title">
                        {title}
                    </NavLink>
                </div>
            </div>
        </div>

    )
};

const mstp = (state) => (state);

export default connect(mstp, null)(BlogEnter);
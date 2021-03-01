import React, {useEffect, useState} from 'react';
import slider1 from '../../img/slider-img/slider-img1.jpg';
import author from '../../img/author-img/h1-author-img1.jpg';
import slider2 from './../../img/slider-img/slider-img2.jpg';
import slider3 from './../../img/slider-img/slider-img3.jpg';
import slider4 from './../../img/slider-img/slider-img4.jpg';
import {NavLink} from "react-router-dom";
import {BsFillHeartFill, FaComment, WiTime9} from "react-icons/all";
import {axiosInstance, getFile, host} from "../../server/host";
import {bindActionCreators} from "redux";
import {allPosts} from "../../redux/actions/postApi";
import {connect} from "react-redux";
import {allCommentsByNews} from "../../redux/actions/commentsApi";


const SliderPost = (props) => {


    const [posts, setPosts] = useState(null);

    useEffect(() => {
        setPosts(props.post_reducer.posts);
    });


    const getPost = posts != null && posts.data.slice(0, 3).map((item, key) => (
        <SlideItemHeader
            key={item.id}
            id={item.id}
            img={getFile + item.headAttachment.hashId}
            category={item.category.name}
            title={item.title}
            date={item.createAt.slice(0, 11)}
            like={item.likesCount == null ? 0 : item.likesCount}
            views={item.viewsCount}
            comment={item.comments == null ? 0 : item.comments.length}
        />));

    const headPost = props.post_reducer.popular_posts && props.post_reducer.popular_posts.data && props.post_reducer.popular_posts.data[0];

    return (
        <div className="slider-post-area clearfix">
            <div className="container-fluid  m-0 p-0">
                <div className="row m-0 p-0">
                    <div className="full-wide-slider col-12 col-md-8 px-0 mx-0">
                        {headPost && <div className="sl-post-item-area">
                            <img className="head-img" src={getFile + headPost.headAttachment.hashId} height={"660px!important"}
                                 alt="slider image"/>
                            <div className="slider-text">
                                <NavLink to={"/blog/" + headPost.id} className="sl-post-cat"
                                         href="#">{headPost.category.name}</NavLink>
                                <NavLink to={"/blog/" + headPost.id}
                                         className="sl-post-title">{headPost.title}</NavLink>
                                <div className="meta-autor">
                                    <img src={author} alt="author image"/>
                                    <div className="meta-tag-area">
                                        <span className="author-name">Admin</span>
                                        <span><WiTime9></WiTime9>{headPost.createAt}</span>
                                        <span><BsFillHeartFill></BsFillHeartFill>{headPost.likesCount == null ? 0 : headPost.likesCount.toString()}</span>
                                        <span><FaComment></FaComment>{headPost.comments.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="colm-three-slider  col-12 col-md-4 px-0 ml-0 mx-0">
                        {props.post_reducer.posts && getPost}
                    </div>
                </div>

            </div>
        </div>
    )
};

const SlideItemHeader = ({id, img, category, title, date, like, comment}) => {
    return (
        <div className="sl-post-item-area item-img mx-0 px-0  ml-0 ml-md-1">
            <img src={img} alt="slider image"/>
            <div className="slider-text sm-slider-text">
                <NavLink to={"/blog/" + id} className="sl-post-cat" href="#">{category}</NavLink><br/>
                <NavLink to={"/blog/" + id} className="sl-post-title">
                    {title}</NavLink>
                <div className="clearfix"></div>
                <div className="meta-autor">
                    <div className="meta-tag-area">
                        <span><WiTime9></WiTime9>{date}</span>
                        <span><BsFillHeartFill></BsFillHeartFill>{like}</span>
                        <span><FaComment></FaComment>{comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
const mstp = state => (state);

const mdtp = dispatch => (bindActionCreators({allCommentsByNews}, dispatch));

export default connect(mstp, mdtp())(SliderPost);
import React, {useEffect, useState} from 'react';
import author from '../../img/author-img/h1-author-img1.jpg';
import {NavLink} from "react-router-dom";
import {BsFillHeartFill, BsHeart, FaComment, FaUserTie, WiTime9} from "react-icons/all";
import {getFile} from "../../server/host";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {allCommentsByNews} from "../../redux/actions/commentsApi";
import {postsApi} from "../../redux/service/postsApi";


const SliderPost = (props) => {

    const [posts, setPosts] = useState(null);
    const [sliders,setSliders] = useState(null);
    const [lang, setLang] = useState(true);

    useEffect(() => {
        setPosts(props.post_reducer.posts)
        setSliders(props.post_reducer.posts);
        setLang(props.langReducer.type == "uz" ? true : false)
    });

    const headPost = props.post_reducer.posts && props.post_reducer.posts.data && props.post_reducer.posts.data[0];

    let [likes, setLikes] = useState(0);
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setToogle(!toogle);
        getLikes();
    };
    useEffect(() => (
        headPost && (headPost.likesCount === undefined || headPost.likesCount === undefined  || headPost.likesCount === null|| headPost.likesCount == null ? setLikes(0) : setLikes(headPost.likesCount))
    ), [headPost]);

    const getLikes = () => {
        !toogle ? postsApi.setLikes(headPost.id)
                .then(
                    res => {
                        setLikes(++likes)
                    },
                    err => console.log(err))
            : postsApi.setDisLikes(headPost.id)
                .then(res => {
                    setLikes(--likes)
                }, err => console.log(err))
    };
    const getPost = sliders&&sliders.data&&sliders.data.slice(1, 4).map((item, key) => (
        <SlideItemHeader
            key={item.id}
            id={item.id}
            img={getFile + item.headAttachment.hashId}
            category={lang ? item.category.nameUz : item.category.nameRu}
            cid={item.category.id}
            title={lang ? item.titleUz : item.titleRu}
            date={item.createAt.slice(0, 16)}
            like={item.likesCount == null ? 0 : item.likesCount}
            views={item.viewsCount}
            comment={item.comments == null ? 0 : item.comments.length}
        />));
    return (
        <div className="slider-post-area clearfix">
            <div className="container-fluid  m-0 p-0">
                <div className="row m-0 p-0">
                    <div className="full-wide-slider col-12 col-md-8 px-0 mx-0">
                        {headPost && <div className="sl-post-item-area">
                            <img className="head-img" src={getFile + headPost.headAttachment.hashId}
                                 height={"660px!important"}
                                 alt="slider image"/>
                            <div className="slider-text">
                                <NavLink to={"/news/" + headPost.category.id} className="sl-post-cat"
                                         href="#">{lang ? headPost.category.nameUz : headPost.category.nameRu}</NavLink>
                                <NavLink to={"/blog/" + headPost.id}
                                         className="sl-post-title">{lang ? headPost.titleUz : headPost.titleRu}</NavLink>
                                <div className="meta-autor">
                                    <div className="meta-tag-area">

                                        <span><WiTime9></WiTime9>{headPost.createAt.slice(0,16)}</span>
                                        <span onClick={e => (handleChange(e))}>
                        {toogle ? <BsFillHeartFill/> : <BsHeart/>}
                                            {likes}</span>
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

const SlideItemHeader = ({id, cid, img, category, title, date, like, comment}) => {


    let [likes, setLikes] = useState(0);
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setToogle(!toogle);
        getLikes();
    };
    useEffect(() => {
        like === null ? setLikes(0) : setLikes(like)
    }, []);

    const getLikes = () => {
        !toogle ? postsApi.setLikes(id)
                .then(
                    res => {
                        // console.log(res);
                        setLikes(++likes)
                    }
                    ,
                    err => console.log(err))
            : postsApi.setDisLikes(id)
                .then(res => {
                    // console.log(res);
                    setLikes(--likes)
                }, err => console.log(err))
    };

    return (
        <div className="sl-post-item-area item-img mx-0 px-0  ml-0 ml-md-1">
            <img src={img} alt="slider image"/>
            <div className="slider-text sm-slider-text">
                <NavLink to={"/news/" + cid} className="sl-post-cat" href="#">{category}</NavLink><br/>
                <NavLink to={"/blog/" + id} className="sl-post-title">
                    {title}</NavLink>
                <div className="clearfix"></div>
                <div className="meta-autor">
                    <div className="meta-tag-area">
                        <span><WiTime9></WiTime9>{date.slice(0,16)}</span>
                        <span onClick={e => (handleChange(e))}>
                        {toogle ? <BsFillHeartFill/> : <BsHeart/>}
                            {likes}</span>
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
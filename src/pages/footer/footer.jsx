import React, {useEffect, useState} from 'react'
import st from './footer.module.css'
import {Link, NavLink} from 'react-router-dom';
import {
    AiOutlineHeart,
    BiTime,
    BsFillHeartFill,
    BsHeart, BsHeartFill,
    GrTwitter,
    ImEye,
    VscChevronRight,
    WiTime9
} from "react-icons/all";
import {connect} from "react-redux";
import {postsApi} from "../../redux/service/postsApi";


const Footer = (props) => {


    return (
        <footer>
            <div className={"footer-top"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-xs-12"}>
                            <div className={"footer-logo"}>
                                <a href="#">NewsUpdate</a>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"footer-widget-area"}>
                            <div className={"col-md-3 col-sm-3 col-xs-12"}>
                                <div className={"widget-about"}>
                                    <h4 className={"ft-widget-title"}>Biz haqimizda</h4>
                                    <p>Biz bilan o'zgacha yangiliklarni birinchilardan bo'lib kuzating </p>
                                    <p>Bu yerda sizning reklamangiz bo'lishi mumkin edi:)</p>
                                </div>
                            </div>
                            <div className={"col-md-3 col-sm-3 col-xs-12"}>
                                <div className={"widget-recent-post"}>
                                    <h4 className={"ft-widget-title"}>Oxirgi Postlar</h4>
                                    {props.post_reducer && props.post_reducer.posts && props.post_reducer.posts.data && props.post_reducer.posts.data.slice(0, 2).map((item, key) => (
                                        <Item key={item.id} id={item.id} title={item.title} likesCount={item.likesCount}
                                              viewsCount={item.viewsCount} createAt={item.createAt}/>
                                    ))
                                    }
                                </div>
                            </div>
                            <div className={"col-md-3 col-sm-3 col-xs-12"}>
                                <div className={"widget-find-more"}>

                                    <h4 className={"ft-widget-title"}>Ko'proq ko'rish</h4>
                                    <ul>
                                        {props.category_reducer && props.category_reducer.categories && props.category_reducer.categories.slice(0, 5).map((item, key) => (
                                            <li key={item.id}><NavLink
                                                to={{
                                                    pathname: "/news/" + item.name.toLowerCase(),
                                                    state: {
                                                        item
                                                    }
                                                }}><VscChevronRight></VscChevronRight>{item.name}</NavLink>
                                            </li>))}
                                    </ul>
                                </div>
                            </div>
                            <div className={"col-md-3 col-sm-3 col-xs-12"}>
                                <div className={"widget-twitter-post"}>
                                    <h4 className={"ft-widget-title"}>Twitter</h4>
                                    <div className={"widget-twitter-item"}>
                                        <div className={"wti-post-icon"}>
                                            <GrTwitter></GrTwitter>
                                        </div>
                                        <div className={"wti-post-desc"}>
                                            <p>johan - themeforest PSD Template by <span
                                                className={"wti-act"}>@creative</span> on
                                                <span className={"wti-act"}>@dribbble</span> <span
                                                    className="wti-link"><a
                                                    href="#">https://t.co/Chi9zl8Rig</a></span>
                                            </p>
                                            <span className={"wti-post-day"}>24 days ago</span>
                                        </div>
                                    </div>
                                    <span className={"wd-line"}></span>
                                    <div className={"widget-twitter-item"}>
                                        <div className={"wti-post-icon"}>
                                            <GrTwitter></GrTwitter>
                                        </div>
                                        <div className={"wti-post-desc"}>
                                            <p>Get more <span className={"wti-act"}>@creative</span> on <span
                                                className={"wti-act"}>@dribbble</span>
                                                <span className={"wti-link"}><a href="#">https://t.co/666</a></span>
                                            </p>
                                            <span className={"wti-post-day"}>12 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"footer-bottom"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <p>Copyright@2017 Thmeforest.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


const Item = ({id, title, viewsCount, createAt, likesCount}) => {


    let [likes, setLikes] = useState(0);
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setToogle(!toogle);
        getLikes();
    }
    useEffect(() => (
        likesCount === null ? setLikes(0) : setLikes(likesCount)
    ), [])

    const getLikes = () => {
        !toogle ? postsApi.setLikes(id)
                .then(
                    res => {
                        console.log(res);
                        setLikes(++likes)
                    }
                    ,
                    err => console.log(err))
            : postsApi.setDisLikes(id)
                .then(res => {
                    console.log(res);
                    setLikes(--likes)
                }, err => console.log(err))
    }

    return (<div key={id}>
        <div className={"widget-rcp-item"}>
            <NavLink to={"/blog/" + id}>{title}</NavLink>
            <div className={"cmn-tag-area"}>
                <span><WiTime9></WiTime9>{createAt.slice(0, 11)}</span>
                <span><ImEye></ImEye>{viewsCount == null ? 0 : viewsCount}</span>
                <span onClick={e => (handleChange(e))}>
                        {!toogle ? <AiOutlineHeart/> : <BsHeartFill/>}{likes}</span></div>
        </div>
        <span className={"wd-line"}></span>
    </div>)

}

const mstp = (state) => (state);


export default connect(mstp, null)(Footer);
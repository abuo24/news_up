import React, {useEffect, useState} from 'react';
import {
    AiOutlineYoutube,
    FaComment,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
    WiTime9
} from "react-icons/all";
import {connect} from "react-redux";
import {getFile} from "../../../server/host";
import {NavLink} from "react-router-dom";
import {IconContext} from "react-icons";
import {IoPlayOutline, IoTrashOutline, RiDeleteBin5Line} from "react-icons/all";
import {bindActionCreators} from "redux";
import {counts} from "../../../redux/actions/postApi";
import post_reducer from "../../../redux/reducers/post_reducer";

const HeadSidebar = (props) => {

    let list = [];
    const posts = props.post_reducer.popular_posts && props.post_reducer.popular_posts.data;
    posts && posts.map(item => {
            if (item.viewsCount != null) {
                list.push(item);
            }
        }
    );

    let count = props.post_reducer&&props.post_reducer.count&&props.post_reducer.count.data;
    useEffect(()=>{
        props.counts();
        count = props.post_reducer&&props.post_reducer.count&&props.post_reducer.count.data;

    },[])
    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
        }
    )

    return (<div className="col-md-4 col-sm-4">
            <div className="side-bar">
                <div className="widget widget-h3-social">
                    <div className="widget-fb">
                        <a href="https://t.me/doimuzofficial" target={"_blank"}>
                        <IconContext.Provider style={{padding: "7px"}}
                                              value={{color: "white", size: "2em", className: "global-class-name"}}>
                            <div>
                                <FaFacebookF/>
                            </div>
                        </IconContext.Provider>
                        <h4>{count&&count.facebook&&count.facebook}+</h4>
                        <h6>{langs.fanat}</h6>
                        </a>
                    </div>
                    <div className="widget-twitter">
                        <a href="https://t.me/doimuzofficial" target={"_blank"}>
                        <IconContext.Provider style={{padding: "7px"}}
                                              value={{color: "white", size: "2em", className: "global-class-name"}}>
                            <div>
                                <FaTelegramPlane/>
                            </div>
                        </IconContext.Provider>
                        <h4>{count&&count.telegram&&count.telegram}+</h4>
                        <h6>{langs.seens}</h6>
                    </a>
                    </div>
                    <div className="widget-g-plus">
                        <a href="https://www.instagram.com/doim.uz/" target={"_blank"}>

                        <IconContext.Provider style={{padding: "7px"}}
                                              value={{color: "white", size: "2em", className: "global-class-name"}}>
                            <div>
                                <FaInstagram/>
                            </div>
                        </IconContext.Provider>

                        <h4>{count&&count.instagram&&count.instagram}+</h4>
                        <h6>{langs.sub}</h6>
                        </a>
                    </div>
                </div>
                <div className="widget widget-h3-most-populer">
                    <div className="widget-h3-msp-header">
                        <h4>{langs.maxseen}</h4>
                    </div>
                    <div className="widget-h3-msp-body">
                        <div className="wh3-letest-item">
                            {<div className="wh3-li-img">
                                <img src={list && list[0] && getFile + list[0].headAttachment.hashId}
                                     alt="image"/>
                                <div className="wh3-litem-info">
                                    {list && list[0] && <NavLink
                                        to={'/blog/' + list[0].id}>{lang ? list[0].titleUz : list[0].titleRu}</NavLink>}
                                    <div className="wh3-item-fback">
                                        <span><WiTime9/>{list && list[0] && list[0].createAt.slice(0, 11)}</span>
                                        <span><FaComment/>{list && list[0] && list[0].comments && list[0].comments.length}</span>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                        {list && list.slice(0, 5).map((item) => <div key={item.id} className="wh3-msp-single-item">
                            <div className="row">
                                <div className="col-5">
                                    <img src={item && getFile + item.headAttachment.hashId} width={"100%!important;"}
                                         alt=""/>
                                </div>
                                <div className="col-7">
                                    <div className="wh3-litem-info">
                                        <NavLink to={"/blog/" + item.id}>
                                            <p dangerouslySetInnerHTML={{__html: lang ? item.titleUz : item.titleRu}}></p>
                                        </NavLink>
                                        <div className="wh3-item-fback">
                                            <span><WiTime9/>{item.createAt.slice(0,16)}</span>
                                            <span><FaComment/>{item.comments.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>
        </div>

    );
};

const mstp = (state) => (state);
const mdtp = (dispatch) => (bindActionCreators({counts},dispatch));

export default connect(mstp, mdtp)(HeadSidebar);
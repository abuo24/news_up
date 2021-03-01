import React, {useState} from 'react';
import {AiOutlineYoutube, FaComment, FaFacebookF, FaTwitter, WiTime9} from "react-icons/all";
import layimg from "../../../img/side-bar/most-populer/msp-img1.jpg";
import banner from "../../../img/banner/header-sidebar-banner3.jpg";
import {connect} from "react-redux";
import {getFile} from "../../../server/host";
import {NavLink} from "react-router-dom";

const HeadSidebar = (props) => {

    let list = [];
    const posts = props.post_reducer.popular_posts && props.post_reducer.popular_posts.data;
    posts && posts.map(item => {
            if (item.viewsCount != null) {
                list.push(item);
            }
        }
    );

    return (<div className="col-md-4 col-sm-4">
            <div className="side-bar">
                <div className="widget widget-h3-social">
                    <div className="widget-fb">
                        <FaFacebookF/>
                        <h4>156,570</h4>
                        <h6>Kuzatuvchilar</h6>
                    </div>
                    <div className="widget-twitter">
                        <FaTwitter/>
                        <h4>3,562</h4>
                        <h6>Obunachilar</h6>
                    </div>
                    <div className="widget-g-plus">
                        <AiOutlineYoutube/>
                        <h4>29,546</h4>
                        <h6>A'zolar</h6>
                    </div>
                </div>
                <div className="widget widget-h3-most-populer">
                    <div className="widget-h3-msp-header">
                        <h4>ENG KO'P O'QILGAN</h4>
                    </div>
                    <div className="widget-h3-msp-body">
                        <div className="wh3-letest-item">
                            {<div className="wh3-li-img">
                                <img src={list && list[0] && getFile + list[0].headAttachment.hashId}
                                     alt="image"/>
                                <div className="wh3-litem-info">
                                    {list && list[0] && <NavLink
                                        to={'/blog/' + list[0].id}>{list[0].title}</NavLink>}
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
                                        <NavLink to={"/blog/" + item.id}>{item.content}</NavLink>
                                        <div className="wh3-item-fback">
                                            <span><WiTime9/>{item.createAt}</span>
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

export default connect(mstp, null)(HeadSidebar);
// export default HeadSidebar;
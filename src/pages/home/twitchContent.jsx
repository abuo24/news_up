import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {BsFillHeartFill, FaComment, FaEnvelope, FiInstagram, GrYoutube, IoLogoTwitter, WiTime9} from "react-icons/all";
import {MiddleHomeCards, MiniCard} from "../index";
import {connect} from "react-redux";
import {getFile} from "../../server/host";
import Slider from "react-slick";
import {bindActionCreators} from "redux";
import {getCategories, getNewsByCategoryId} from "../../redux/actions/categoryApi";

class TwitchContent extends Component {

    render() {

        const popular = this.props.post_reducer&&this.props.post_reducer.popular_posts && this.props.post_reducer.popular_posts.data && this.props.post_reducer.popular_posts.data;

        let list = [];
        popular && popular.map(item => {
                if (item.viewsCount != null) {
                    list.push(item);
                }
            }
        );

        const posts = this.props.post_reducer.posts && this.props.post_reducer.posts.data;

        const getMiniCards = posts && posts.slice(0, 5).map((item, key) => (
            <MiniCard key={key} to={"/blog/" + item.id} img={getFile + item.headAttachment.hashId} title={item.title}
                      date={item.createAt && item.createAt.slice(0, 11)}/>));

        const getMiniCardsPopular = list && list.slice(0, 5).map((item, key) => (
            <MiniCard key={key} to={"/blog/" + item.id} img={getFile + item.headAttachment.hashId} title={item.title}
                      date={item.createAt && item.createAt.slice(0, 11)}/>));

        const getMiddleHomeCards = this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.slice(0, 2).map((item, key) => (
            <MiddleHomeCards key={key} category={item}/>));

        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="letest-news-area">
                                <div className="section-top-bar">
                                    <h4 className={"text-muted"}>So'ngi yangiliklar</h4>
                                    <ul className={"text-muted"}>
                                        <li role="presentation" className="active">
                                            <a aria-controls="all" role="tab"
                                               data-toggle="tab">Umumiy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row tab-content">
                                    <div className="letest-news tab-pane fade in active" role="tabpanel" id="all">
                                        {posts && <>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="lt-single-post">
                                                    <div className="single-lt-thumb">
                                                        <img src={getFile + posts[0].headAttachment.hashId}
                                                             alt="post thumbnail"/>
                                                        <div className="lt-thumb-desc">
                                                            <Link className="ln-post-cat" to={'/blog/' + posts[0].id}
                                                                  href="#">{posts[0].category.name}</Link>
                                                            <div className="meta-autor">
                                                                <div className="meta-tag-area">
                                                                    <span><WiTime9></WiTime9>{posts[0].createAt}</span>
                                                                    <span><BsFillHeartFill></BsFillHeartFill>{posts[0].likesCount == null ? 0 : posts[0].likesCount.toString()}</span>
                                                                    <span><FaComment></FaComment>{posts[0].comments.length}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link className="lt-snlg-title" href="#"
                                                          to={'/blog/' + posts[0].id}>
                                                        {posts[0].title}
                                                    </Link>
                                                    <p className="df-text">{posts[0].title.slice(0, 100)}</p>
                                                </div>
                                            </div>
                                        </>}
                                        <div className="col-md-6 col-sm-6">
                                            {getMiniCards}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="top-bar-slider ls-slider owl-carousel">
                                <Slider {...settings}>
                                    {getMiddleHomeCards}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="side-bar">
                                <div className="widget widget-social">
                                    <div className="widget-fb">
                                        <FiInstagram></FiInstagram>
                                        <h4>4,000</h4>
                                        <h6>Fanatlar</h6>
                                    </div>
                                    <div className="widget-twitter">
                                        <IoLogoTwitter></IoLogoTwitter>
                                        <h4>3,000</h4>
                                        <h6>Kuzatuvchi</h6>
                                    </div>
                                    <div className="widget-g-plus">
                                        <GrYoutube></GrYoutube>
                                        <h4>2,000</h4>
                                        <h6>Azolar</h6>
                                    </div>
                                </div>

                                <div className="widget widget-most-populer">

                                    <div className="top-bar-slider owl-carousel">
                                        <div className="most-slider-item">
                                            <div className="section-top-bar">
                                                <h4>Eng ko'p ko'rilgan</h4>
                                            </div>
                                            {getMiniCardsPopular}
                                        </div>

                                        <div className="most-slider-item">
                                            <div className="section-top-bar">
                                                <h4>Haftalik Top</h4>
                                            </div>
                                            {getMiniCardsPopular}
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget-subscribe">
                                    <h4>Bizni kuzating</h4>
                                    <p>Yangilikalarimizni doimiy kuzatib borish uchun emailingizni qoldiring</p>
                                    <div className="widget_wysija_cont">
                                        <form
                                            action="http://bytecode.us11.list-manage.com/subscribe/post?u=50a4b0170dab7d64fb3dc64c6&amp;id=00f92be9f0"
                                            method="post" id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className="validate" target="_blank" noValidate="">
                                            <input placeholder="Your email" name="EMAIL" id="mce-EMAIL"
                                                   type="email"/>
                                            <button name="subscribe" id="mc-embedded-subscribe">
                                                <FaEnvelope></FaEnvelope>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getCategories}, dispatch));

export default connect(mstp, mdtp)(TwitchContent);
import React, {Component, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import n1 from "../../img/post-img/single-list-post.jpg";
import {BsFillHeartFill, FaComment, FaEnvelope, FiInstagram, GrYoutube, IoLogoTwitter, WiTime9} from "react-icons/all";
import p1 from "../../img/post-img/list-post-img1.jpg";
import p2 from "../../img/post-img/list-post-img2.jpg";
import life1 from "../../img/post-img/single-list-post1.jpg";
import post6 from "../../img/post-img/list-post-img6.jpg";
import post7 from "../../img/post-img/list-post-img7.jpg";
import post8 from "../../img/post-img/list-post-img8.jpg";
import post9 from "../../img/post-img/list-post-img9.jpg";
import banner from "../../img/banner/header-sidebar-banner1.jpg";
import {MiddleHomeCards, MiniCard} from "../index";
import HomeCard from "../cards/homeCard";
import NewsItem from "./newsItem/newsItem";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.item.id,
            category: this.props.location.state.item
        };
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.location.state.item.id) {
            this.setState({id: this.props.location.state.item.id,
            category: this.props.location.state.item
            });
        }
    }

    render() {

        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="top-bar-slider ls-slider owl-carousel">
                                <NewsItem category={this.state.category}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
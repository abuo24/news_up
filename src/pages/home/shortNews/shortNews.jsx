import React, {useEffect, useState} from 'react';
import {AiOutlineGooglePlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube} from "react-icons/all";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ShortNewsHead from "./shortNewsHead";

import Slider from "react-slick";

const ShortNews = (props) => {

    const [posts, setPosts] = useState();
    const getMIniNews = props.category_reducer.categories && props.category_reducer.categories && props.category_reducer.categories.map((item, key) => (
        <ShortNewsHead key={key} category={item}/>));
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    };
    return (<div className="short-news-area">
            <div className="container">
                <Slider {...settings} className={"row"}>
                    {getMIniNews}
                </Slider>
                <div className="h1-shrt-connected row d-flex justify-content-center">
                    <div className="col-6 col-md-2 col-sm-4">
                        <a href="#">FACEBOOK</a>
                    </div>
                    <div className={"col-6 col-md-2  col-sm-4"}>
                        <a href="#">Twitter</a>
                    </div>
                    <div className={"col-6 col-md-2  col-sm-4"}>
                        <a href="#">linkedin</a>
                    </div>
                    <div className={"col-6 col-md-2 col-sm-4"}>
                        <a href="#">Instagram</a>
                    </div>
                    <div className={"col-6 col-md-2 col-sm-4"}>
                        <a href="#">YOUTUBE</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

const mstp = (state) => (state);

// const mdtp = (dispatch) => (bindActionCreators({}, null));

export default connect(mstp, null)(ShortNews);
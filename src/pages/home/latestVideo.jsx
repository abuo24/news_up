import React, { useEffect, useState} from 'react';
import Slider from "react-slick";
import {connect} from "react-redux"
import "antd/dist/antd.min.css"
import LatestVideoItem from "./latestVideoItem";
import {NavLink} from "react-router-dom";

const LatestVideo = (props) => {

    const [toogle, setToogle] = useState(false);

    const [settings, setSettings] = useState({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false
            }
        }]
    });


    const [videos, setVideos] = useState(props.posts && props.posts.data && props.posts.data.news)
    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    const getVideos = videos && videos.map((item, key) => (
        <LatestVideoItem key={key} title={lang ? item.titleUz : item.titleRu} link={item.link}/>
    ));
    const getVideosCol = videos && videos.map((item, key) => (
        <div key={key} className="col-6 col-md-3"><LatestVideoItem key={key} title={lang ? item.titleUz : item.titleRu} link={item.link}/></div>
    ));


    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
            setVideos(props.video_post_reducer.posts && props.video_post_reducer.posts.data && props.video_post_reducer.posts.data.videos)
        }
    )

    return (
        <div className="letest-video-area">
            <div className="container">
                <div className="letest-video">
                    <h1 className="d-block for-latest-vidtext">{langs.latestVid}</h1>
                    <NavLink className="view-all d-block" to={"/videos"}>{langs.reedMore}</NavLink>
                    {videos&&videos.length>3?<Slider {...settings}
                            className="lt-video-slider"
                    >
                        {getVideos}
                    </Slider>:<div className=" row">
                        {getVideosCol}</div>}
                </div>
            </div>
        </div>
    );
};

const mstp = state => state;

export default connect(mstp, null)(LatestVideo);
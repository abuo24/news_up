import React, { useEffect, useState} from 'react';
import Slider from "react-slick";
import {connect} from "react-redux"
import "antd/dist/antd.min.css"
// import "video-react/dist/video-react.css";
import LatestVideoItem from "./latestVideoItem";

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

    console.log(props.posts && props.posts.data && props.posts.data.news);

    const [videos, setVideos] = useState(props.posts && props.posts.data && props.posts.data.news)
    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    const getVideos = videos && videos.map((item, key) => (
        <LatestVideoItem key={key} title={lang ? item.titleUz : item.titleRu} link={item.link}/>
    ));


    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
            setVideos(props.video_post_reducer.posts && props.video_post_reducer.posts.data && props.video_post_reducer.posts.data.news)
        }
    )

    return (
        <div className="letest-video-area">
            <div className="container">
                <div className="letest-video">
                    <h1 className="d-block">{langs.latestVid}</h1>
                    <a className="view-all d-block" href="#">{langs.reedMore}</a>
                    <Slider {...settings}
                            className="lt-video-slider"
                    >
                        {getVideos}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const mstp = state => state;

export default connect(mstp, null)(LatestVideo);
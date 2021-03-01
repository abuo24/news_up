import React, {useState} from 'react';
import Slider from "react-slick";
import slider1 from "../../img/slider-img/lt-video/ltv-img1.jpg";
import {BiTime, BsPlayFill, ImEye, IoHeartOutline} from "react-icons/all";
import {NavLink} from "react-router-dom";

const LatestVideo = () => {

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

    const [videos, setVideos] = useState([
        {
            slider: slider1,
            link: "https://www.youtube.com/watch?v=qWy_aOlB45Y",
            date: "01 Mart 2020",
            views: "15K",
            like: "300",
            title: "Japan In Four Gorgeous Pokémon-Themed Colors",
            to: '/blog/3'
        },
        {
            slider: slider1,
            link: "https://www.youtube.com/watch?v=qWy_aOlB45Y",
            date: "01 Mart 2020",
            views: "15K",
            like: "300",
            title: "Japan In Four Gorgeous Pokémon-Themed Colors",
            to: '/blog/3'
        },{
            slider: slider1,
            link: "https://www.youtube.com/watch?v=qWy_aOlB45Y",
            date: "01 Mart 2020",
            views: "15K",
            like: "300",
            title: "Japan In Four Gorgeous Pokémon-Themed Colors",
            to: '/blog/1'
        },{
            slider: slider1,
            link: "https://www.youtube.com/watch?v=qWy_aOlB45Y",
            date: "01 Mart 2020",
            views: "15K",
            like: "300",
            title: "Japan In Four Gorgeous Pokémon-Themed Colors",
            to: '/blog/1'
        },{
            slider: slider1,
            link: "https://www.youtube.com/watch?v=qWy_aOlB45Y",
            date: "01 Mart 2020",
            views: "15K",
            like: "300",
            title: "Japan In Four Gorgeous Pokémon-Themed Colors",
            to: '/blog/1'
        },{
            slider: slider1,
            link: "https://www.youtube.com/watch?v=qWy_aOlB45Y",
            date: "01 Mart 2020",
            views: "15K",
            like: "300",
            title: "Japan In Four Gorgeous Pokémon-Themed Colors",
            to: '/blog/1'
        }
    ]);

    const getVideos = videos.map((item, key) => (
        <LatestVideoItem key={key} title={item.title} date={item.date} slider={item.slider} like={item.like} to={item.to} link={item.link} views={item.views}/>
    ));


    return (
        <div className="letest-video-area">
            <div className="container">
                <div className="letest-video">
                    <h1 className="d-block">Oxirgi Videolar</h1>
                    <a className="view-all d-block" href="#">Hammasini ko'rish</a>
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
const LatestVideoItem = ({slider, link, date, views, like, title, to}) => {
    return (
        <div className="lt-video-item item">
            <div className="ltv-thumb">
                <img src={slider} alt="video thumbnail"/>
                <a className="lt-video"
                   href={link} target="_blank">
                    <BsPlayFill>
                    </BsPlayFill>
                </a>
            </div>
            <div className="cmn-tag-area">
                <span><BiTime></BiTime>{date}</span>
                <span><ImEye></ImEye>{views}</span>
                <span><IoHeartOutline></IoHeartOutline>{like}</span>
            </div>
            <NavLink to={to}>{title}</NavLink>
        </div>
    )
}

export default LatestVideo;
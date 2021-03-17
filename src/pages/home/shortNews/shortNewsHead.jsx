import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPostByCategoryId} from "../../../redux/actions/shortPostApi";
import ShortNews from "./shortNews";
import ShortNewsItem from "./shortNewsItem";
import Slider from "react-slick"

const ShortNewsHead = (props) => {


    const [post, setPost] = useState(null);

    useEffect(() => {
        props.getPostByCategoryId(props.category.id).then(
            res => setPost(res.payload.data)
        ).catch(
            err => console.log(err)
        )
    }, []);

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 20,
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="short-news">
                    <h4 className="sn-title">
                        {props.category.name}</h4>
                    <Slider {...settings} className={"m-0 p-0 setslider"}>
                    { post && post.shortnews.slice(0,10).map((item, key) => (
                        <ShortNewsItem key={item.id} title={item.title} create={item.createAt} />
                    ))}
                    </Slider>
                </div>
            </div>
    );
}

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getPostByCategoryId}, dispatch));

export default connect(mstp, mdtp)(ShortNewsHead)

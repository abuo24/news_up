import React, {Component, useEffect, useState} from 'react';
import {BsFillHeartFill, BsHeart, FaComment, WiTime9} from "react-icons/all";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {axiosInstanceAdmin, getFile} from "../../server/host";
import {NavLink} from "react-router-dom";
import {postsApi} from "../../redux/service/postsApi";
import LatestVideoItem from "../home/latestVideoItem";
import {allVideos} from "../../redux/actions/videoPostApi";

class AllVideos extends Component {

    state = {
        lang: true
    };

    componentDidMount() {
        this.setState({...this.state,
            lang:this.props.langReducer && this.props.langReducer.type == "uz" ? true : false
        })
        this.props.allVideos();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.res === undefined) {
            axiosInstanceAdmin.get(this.props.id + "/news").then(
                res => {
                    this.setState({res});
                }
            ).catch(err => console.log(err));
        }
        if (this.state.lang !== (this.props.langReducer.type=="uz"?true:false)){
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false
            })
        }
    }



    render() {
        const getVideos = this.props.video_post_reducer&&this.props.video_post_reducer.all&&this.props.video_post_reducer.all.data&&this.props.video_post_reducer.all.data.map((item, key) => (
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 " key={key}><LatestVideoItem  title={this.state.lang ? item.titleUz : item.titleRu} link={item.link}/></div>
        ));

        return (
            <div className="fitness-area mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-top-bar">
                                <h4>{this.state.lang ? "Barcha videolar" : "Все видео"}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ft-slider-area">
                            <div className="row">{getVideos}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({allVideos}, dispatch));

export default connect(mstp, mdtp)(AllVideos);

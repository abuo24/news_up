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


    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            lang: true,
            currentPage: 0,
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            lang: this.props.langReducer && this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        })
        this.props.allVideos().then((result) => {
            this.setState({
                ...this.state,
                posts: result.payload.data,
                totalPages: result.payload.data.totalPages
            }, () => {
            })
        }).catch(
            err => console.log(err)
        )
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.res === undefined) {
            axiosInstanceAdmin.get(this.props.id + "/news").then(
                res => {
                    this.setState({res});
                }
            ).catch(err => console.log(err));
        }
        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false,
                langs: this.props.langReducer.lang
            })
        }
    }

    onHandleSubmit = (i) => {
        if (i === -1) {
            i = 0;
            this.setState({currentPage: i}, () => {
            });
            this.props.allVideos(i).then((result) => {
                this.setState({posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            }).catch(
                err => console.log(err)
            )
        } else if (i === this.state.posts.totalPages) {
            i = this.state.posts.totalPages - 1;
            this.setState({currentPage: i}, () => {
            });
            this.props.allVideos( i).then((result) => {
                this.setState({posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            })
                .catch(
                    err => console.log(err)
                )
        } else {
            this.setState({currentPage: i}, () => {
            });
            this.props.allVideos( i).then((result) => {
                this.setState({posts: result.payload.data}, () => {
                })
            }).catch(
                err => console.log(err)
            )
        }
    }


    render() {
        const getVideos = this.state.posts&&this.state.posts&&this.state.posts.videos&&this.state.posts.videos.map((item, key) => (
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 " key={key}><LatestVideoItem
                title={this.state.lang ? item.titleUz : item.titleRu} link={item.link}/></div>
        ));


        const totalP = this.state.posts && this.state.posts.totalPages;

        let key = 0;

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

                        {this.state.posts&&this.state.posts.videos&&this.state.posts.videos.length>0?<> <div className="ft-slider-area">
                                <div className="row">{getVideos}</div>
                            </div>

                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link"
                                           onClick={e => this.onHandleSubmit(this.state.currentPage - 1)}>{this.state.langs && this.state.langs.prev.slice(0, 4) + ".."}</a>
                                    </li>

                                    {Array(totalP).fill(1).map((el, i) => this.state.currentPage === i ?
                                        <li className="page-item active"><a className="page-link">{1 + i}</a></li> :
                                        <li className="page-item" onClick={e => this.onHandleSubmit(i)}><a
                                            className="page-link">{1 + i}</a></li>
                                    )}

                                    <li className="page-item"
                                        onClick={e => this.onHandleSubmit(this.state.currentPage + 1)}>
                                        <a className="page-link">{this.state.langs && this.state.langs.next.slice(0, 4) + ".."}</a>
                                    </li>
                                </ul>
                            </nav></>:this.state.langs&&this.state.langs.oops
                        }
                    </div>
                </div>
            </div>

        );
    }
};

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({allVideos}, dispatch));

export default connect(mstp, mdtp)(AllVideos);

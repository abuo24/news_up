import React, {Component, useEffect, useState} from 'react';
import fitnes1 from "../../img/slider-img/ft-slider-img1.jpg";
import {BsFillHeartFill, FaComment, WiTime9} from "react-icons/all";
import fitnes2 from "../../img/slider-img/ft-slider-img2.jpg";
import {bindActionCreators} from "redux";
import {getNewsByCategoryId} from "../../redux/actions/categoryApi";
import {connect} from "react-redux";
import HomeCard from "./homeCard";
import {axiosInstance, axiosInstanceAdmin, getFile} from "../../server/host";
import {NavLink} from "react-router-dom";
import axios from "axios"

export class CategoryCard extends Component {


    state = {};

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.res === undefined) {
            axiosInstanceAdmin.get(this.props.id + "/news").then(
                res => {
                    this.setState({res});
                }
            ).catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div className="fitness-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-top-bar">
                                <h4>{this.props.category && this.props.category.name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ft-slider-area">
                            {
                                this.state.res && this.state.res.data && this.state.res.data.data.news.slice(0, 4).map(
                                    (item, key) =>
                                        (<CategoryCardItem key={key} img={getFile + item.headAttachment.hashId}
                                                           category={item.category}
                                                           comment={item.comments}
                                                           to={"/blog/" + item.id} like={item.likesCount}
                                                           date={item.createAt.slice(0, 11)}
                                                           title={item.title}/>))
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

const CategoryCardItem = ({to, category, img, title, date, like, comment}) => {
    return (
        <div className="mt-1 col-md-6 col-sm-6 col-xs-12">
            <div className="ft-slider-item">
                <img src={img} alt="slider image"/>
                <div className="ft-slider-text">
                    <NavLink to={to} className="sl-post-cat">{category.name}</NavLink><br/>
                    <NavLink to={to} className="sl-post-title">{title}</NavLink>
                    <div className="clearfix"></div>
                    <div className="meta-tag-area">
                        <span><WiTime9></WiTime9>{date}</span>
                        <span><BsFillHeartFill></BsFillHeartFill>{like == null ? 0 : like}</span>
                        <span><FaComment></FaComment>{comment == null ? 0 : comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getNewsByCategoryId}, dispatch));

export default connect(mstp, mdtp)(CategoryCard);

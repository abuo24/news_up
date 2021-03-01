import life1 from "../../../img/post-img/single-list-post1.jpg";
import HomeCard from "../../cards/homeCard";
import React, {Component, useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getNewsByCategoryId} from "../../../redux/actions/categoryApi";
import {getFile} from "../../../server/host";

class NewsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.category.id,
            category: this.props.category,
            posts: null
        };
    }

    componentDidMount() {
        this.props.getNewsByCategoryId(this.state.category.id).then((res) => {
            this.setState({posts: res})
        }).catch(
            err => console.log(err)
        )
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.category.id) {
            this.setState({
                id: this.props.category.id,
                category: this.props.category
            });
            this.props.getNewsByCategoryId(this.props.category.id).then((res) => {
                this.setState({posts: res})
            }).catch(
                err => console.log(err)
            )
        }
    }

    render() {

        let key = 0;
        const getMiddleHomeCards = this.state.posts && this.state.posts&& this.state.posts.payload&& this.state.posts.payload.data.news.map((item) => (
            <HomeCard key={key++} title={item.title} views={item.viewsCount} to={item.id} like={item.likesCount} date={item.createAt.slice(0,11)} img={getFile+item.headAttachment.hashId}
                      comment={item.comments} content={item.content}/>
        ));

        return (
            <div className="lifestyle-slider-item">
                <div className="section-top-bar">
                    <h4>{this.state.category&&this.state.category.name}</h4>
                </div>
                <div className="row">
                    {key !== 0 ? getMiddleHomeCards:
                        <div className="text-center ml-5">Hali Malumotlar yuklanmagan:(
                        </div>}
                </div>
            </div>
        )
    }
}

const mstp = (state) => (state);
const mdtp = (dispatch) => (bindActionCreators({getNewsByCategoryId}, dispatch));

export default connect(mstp, mdtp)(NewsItem);
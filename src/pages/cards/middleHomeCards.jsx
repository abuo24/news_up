import React, {Component} from 'react';
import HomeCard from "./homeCard";
import {bindActionCreators} from "redux";
import {getNewsByCategoryId} from "../../redux/actions/categoryApi";
import {connect} from "react-redux";
import {getFile} from "../../server/host";

class MiddleHomeCards extends Component {

    componentDidMount() {
        this.props.getNewsByCategoryId(this.props.category.id).then(
            res=>{
                this.setState({res})
            }
        ).catch(err=>{
            console.log(err)
        });
    }
    state = {};

    render() {
        const getBlogs = this.state.res&&this.state.res.payload&&this.state.res.payload.data.news.map((item, key) => (
            <HomeCard key={key} to={item.id} img={getFile+item.headAttachment.hashId} title={item.title} date={item.createAt.slice(0,11)} views={item.viewsCount} like={item.likesCount}
                      comment={item.comments} content={item.content}/>
        ));


        const settings = {
            dots: true
        };

        return (
            <div className="lifestyle-slider-item">
                <div className="section-top-bar">
                    <h4>{this.props.category.name}</h4>
                </div>
                <div className="row">
                    {getBlogs}
                </div>
            </div>
        );
    }
};

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getNewsByCategoryId}, dispatch))

export default connect(mstp, mdtp)(MiddleHomeCards);

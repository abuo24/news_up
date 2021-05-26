import React, {Component} from 'react';
import HomeCard from "./homeCard";
import {bindActionCreators} from "redux";
import {getNewsByCategoryId} from "../../redux/actions/categoryApi";
import {connect} from "react-redux";
import {getFile} from "../../server/host";

class MiddleHomeCards extends Component {

    componentDidMount() {
    }

    state = {
        lang: this.props.langReducer.type == "uz" ? true : false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false
            })
        }
    }

    render() {
        const getBlogs = this.props.posts && this.props.posts.map((item, key) => (
            <HomeCard key={key} to={item.id} img={getFile + item.headAttachment.hashId}
                      title={this.state.lang ? item.titleUz : item.titleRu} date={item.createAt.slice(0, 11)}
                      views={item.viewsCount} like={item.likesCount}
                      comment={item.comments} content={this.state.lang ? item.contentUz : item.contentRu}/>
        ));


        const settings = {
            dots: true
        };

        return (
            <div className="lifestyle-slider-item">
                <div className="section-top-bar">
                    <h4>{this.state.lang ? this.props.category.nameUz : this.props.category.nameRu}</h4>
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

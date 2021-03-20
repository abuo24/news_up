import React, {Component} from 'react';
import HomeCard from "../cards/homeCard";
import {connect} from "react-redux";
import {getFile} from "../../server/host";

class NewsHead extends Component {

    componentDidMount() {
        this.setState({
            lang: this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false,
                langs: this.props.langReducer.lang,
            })
        }
    }

    render() {

        console.log(this.props);
        console.log(this.state);
        let key = 0;


        const getMiddleHomeCards = this.props.post_reducer.posts && this.props.post_reducer.posts.data && this.props.post_reducer.posts.data.map((item, keyword) =>
            <HomeCard key={key++}
                      title={this.state && this.state.lang && this.state.lang ? item.titleUz : item.titleRu}
                      views={item.viewsCount} to={item.id} like={item.likesCount}
                      date={item.createAt.slice(0, 11)} img={getFile + item.headAttachment.hashId}
                      comment={item.comments}
                      content={this.state && this.state.lang && this.state.lang ? item.contentUz : item.contentRu}/>
        );


        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="top-bar-slider ls-slider owl-carousel">
                                <div className="lifestyle-slider-item">
                                    <div className="section-top-bar">
                                        <h4>{this.state&&this.state.langs&&this.state.langs.latestNews}</h4>
                                    </div>
                                    <div className="row">
                                        {getMiddleHomeCards}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = (state) => (state);

export default connect(mstp, null)(NewsHead);
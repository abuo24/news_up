import React, {Component} from 'react';
import HomeCard from "../cards/homeCard";
import {connect} from "react-redux";
import {getFile} from "../../server/host";

class NewsHead extends Component {

    componentDidUpdate() {
    }

    render() {

        console.log(this.props);
        console.log(this.state);
        let key = 0;


        const getMiddleHomeCards = this.props.post_reducer.posts && this.props.post_reducer.posts.data && this.props.post_reducer.posts.data.map((item, keyword) =>
            <HomeCard key={key++}
                      title={item.title} views={item.viewsCount} to={item.id} like={item.likesCount}
                      date={item.createAt.slice(0, 11)} img={getFile + item.headAttachment.hashId}
                      comment={item.comments} content={item.content}/>
        );


        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="top-bar-slider ls-slider owl-carousel">
                                <div className="lifestyle-slider-item">
                                    <div className="section-top-bar">
                                        <h4>Oxirgi Yangiliklar</h4>
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
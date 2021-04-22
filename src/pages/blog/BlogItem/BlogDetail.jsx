import React, {Component, useEffect} from 'react';
import BlogSlider from "./BlogSlider";
import BlogContent from "./BlogContent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { getPost} from "../../../redux/actions/postApi";
import {postsApi} from "../../../redux/service/postsApi";

class BlogDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id
        };
    }

    componentDidMount() {
        this.props.getPost(this.state.id);
        postsApi.setLikesAndViews(this.state.id)
    }


    componentDidUpdate() {
        if (this.state.id !== this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id });
            this.props.getPost(this.props.match.params.id);
        }
    }


    render() {

        return (
            <div>
                <BlogSlider/>
                <BlogContent/>
            </div>
        );
    }
};

const mstp = (state) => (state);

const mdtp = dispatch => (bindActionCreators({getPost}, dispatch));

export default connect(mstp, mdtp)(BlogDetail);
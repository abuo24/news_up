import React, {Component} from 'react';
import HeadSidebar from "../../about/AboutContent/HeadSidebar";
import {connect} from "react-redux";
import BlogContentItem from "./blogContentItem";

class BlogContent extends Component {

  render() {
    return (
        <div className="twich-content-area tw-blog-dtls">
          <div className="container">
            <div className="row">
              <BlogContentItem
                  posts={this.props.post_reducer.posts && this.props.post_reducer.posts.data.slice(0, 2)}
                  post={this.props.post_reducer.post && this.props.post_reducer.post.data}/>
              <HeadSidebar/>
            </div>
          </div>
        </div>
    );
  }
};


const mstp = (state) => (state);

export default connect(mstp, null)(BlogContent);

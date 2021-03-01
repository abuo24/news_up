import React, {Component} from 'react';
import {AiOutlineArrowRight} from "react-icons/all";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getFile} from "../../../server/host";
import {NavLink} from "react-router-dom";
import {postsApi} from "../../../redux/service/postsApi";

class BlogContentItem extends Component {

  componentWillUnmount() {
    this.props.post && postsApi.setLikesAndViews(this.props.post.id).then(
        res => console.log(res), err => console.log(err)
    )
  }


  render() {
        const {post, posts} = this.props;
        return (
            <div className="col-md-8 col-sm-8">
                <div className="blog-post-details">
                    <p className="blog-text">
                        {post && post.content}
                    </p>
                </div>
                <div className="related-product">
                    <h3 className="related-title">Oxirgi Yangiliklar</h3>
                    <div className="row">

                        {posts &&
                        posts.map((item) => (
                            <div key={item.id} className="col-md-6 col-sm-6">
                                <div className="related-sinle-post">
                                    <div className="img-area">
                                        <img src={getFile + item.headAttachment.hashId}
                                             alt="related post image"/>
                                        <NavLink to={"/blog/" + item.id}
                                                 className="related-cat">{item.category.name}</NavLink>
                                    </div>
                                    <p className="rlted-date">{item.createAt}</p>
                                    <NavLink to={"/blog/" + item.id}>
                                        <p className="post-by">{item.title}</p>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>

                <div className="comments">
                    <div className="comments-count">
                        <h4><span>{post && post.comments!==undefined && post.comments.length !== 0 ?post.comments.length : "0" }</span>Izohlar</h4>
                    </div>
                    <ul>{post && post.comments && post.comments.map((item) => (
                        <li key={item.id}>
                            <article>
                                <div className="comment-status-text">
                                    <div className="comment-img">
                                        {item.author.slice(0, 1).toUpperCase()}
                                    </div>
                                    <div className="comment-author-metadata">
                                        <h4 className="author">{item.author} <span
                                            className="date">{item.createAt.slice(0, 16)}</span>
                                        </h4>
                                        <p className="comment-content">
                                            {item.message}
                                        </p><a href="#"
                                               className="comment-reply-link"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                            </article>
                            {item.comments &&
                            <ul className="children">
                                <li>
                                    <article>
                                        <div className="comment-status-text">
                                            <div className="comment-img">
                                                {item.comments.author.slice(0, 1).toUpperCase()}
                                            </div>
                                            <div className="comment-author-metadata">
                                                <h4 className="author">{item.comments.author} <span
                                                    className="date">{item.comments.createAt.slice(0, 16)}</span>
                                                </h4>
                                                <p className="comment-content">
                                                    {item.comments.message}
                                                </p><a href="#"
                                                       className="comment-reply-link"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ul>}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="comment-responsd">
                    <h4>Izoh yoki Izohlarga Javob qoldiring:)</h4>
                    <div className="contact-form">
                        <div className="cf-msg"></div>
                        <form action="http://themeinnovation.com/demo2/html/newsupdate-preview/newsupdate/mail.php"
                              method="post" id="cf">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <label htmlFor="name">Ism</label>
                                    <input type="text" id="name" name="name"/>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <label htmlFor="email">EMail</label>
                                    <input type="text" id="email" name="email"/>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <label htmlFor="msg">Izoh</label>
                                    <textarea className="contact-textarea" id="msg" name="msg"/>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <button className="cont-submit" id="submit" name="submit">Yuborish</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({}, dispatch));


export default connect(mstp, mdtp)(BlogContentItem);
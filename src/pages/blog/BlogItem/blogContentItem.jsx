import React, {Component} from 'react';
import {AiOutlineArrowRight, AiOutlineEye, IoIosLink, MdDateRange} from "react-icons/all";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getFile} from "../../../server/host";
import {NavLink} from "react-router-dom";
import {postsApi} from "../../../redux/service/postsApi";
import {toast, ToastContainer} from "react-toastify";
import copyToClipboard from "@svc/react-copy-to-clipboard";
import {getPost} from "../../../redux/actions/postApi";

class BlogContentItem extends Component {

    state = {
        author: "",
        authorMail: "",
        comments_id: "",
        message: "",

        langs: this.props.langReducer.lang
    };

    componentDidMount() {
        this.setState({
            ...this.state,
            lang: this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        })
    }

    componentDidUpdate() {

        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false,
                langs: this.props.langReducer.lang
            })
        }

    }


    note = () => this.state.lang ? toast.success("Saqlandi") : toast.success("Сохранено")

    onSubmit = (e) => {
        e.preventDefault()
        postsApi.createComment(this.props.post && this.props.post.id, this.state).then(
            res => {
                this.setState(null);
                Array.from(document.querySelectorAll(".for_input")).forEach(
                    input => (input.value = "")
                );
                this.note()
                this.props.getPost(this.props.post.id);
            }).catch(err => console.log(err))
    }

    render() {
        const {post, posts} = this.props;

        const obj = null;

        const note1 = () => this.state.lang ? toast.warning("Nusxalandi") : toast.warning("Скопировано")

        return (
            <div className="col-md-8 col-sm-8">
                <div className="row">
                    <div className="col-12">
                        <div className="blog-post-details">
                            <div>
                    <span className={"p-1"}>
                      <MdDateRange/>
                    </span>
                                <span className={"p-2"}>
                      {this.props.post &&
                      this.props.post.createAt &&
                      this.props.post.createAt.slice(0, 16)}
                    </span>
                                <span className={"p-1"}>
                      <AiOutlineEye/>
                    </span>
                                <span className={"p-1"}>
                      {this.props.post &&
                      this.props.post.viewsCount &&
                      this.props.post.viewsCount != null ?
                          (this.props.post.viewsCount != undefined &&
                              this.props.post.viewsCount) : "0"}
                    </span>
                                <span className={"p-2"}>{this.state.lang ? "Ulashish" : "Делиться"}</span>
                                <Clips note={note1}/>
                            </div>

                            <p className="blog-text"
                               dangerouslySetInnerHTML={{
                                   __html:
                                       post && this.state.lang
                                           ? post && post.contentUz
                                           : post && post.contentRu,
                               }}
                            />

                            <div className="bp-tag-area">
                                <h4>{this.state.langs.tags}</h4>
                                <div className="row">
                                    <div className="col-xs-8">
                                        <div className="bp-tags">
                                            {post &&
                                            post.tags.map((item) => (
                                                <a key={item.id}>
                                                    {this.state.lang
                                                        ? item && item.tagUz && item.tagUz
                                                        : item && item.tagRu && item.tagRu}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="related-product">
                            <h3 className="related-title">
                                {this.state.langs.latestNews}
                            </h3>
                            <div className="row">
                                {posts &&
                                posts.map((item) => (
                                    <div key={item.id} className="col-md-6 col-sm-6">
                                        <div className="related-sinle-post">
                                            <div className="img-area">
                                                <img
                                                    src={getFile + item.headAttachment.hashId}
                                                    alt="related post image"
                                                />
                                                <NavLink
                                                    to={"/news/" + item.category.id}
                                                    className="related-cat"
                                                >
                                                    {this.state.lang
                                                        ? item.category.nameUz
                                                        : item.category.nameRu}
                                                </NavLink>
                                            </div>
                                            <p className="rlted-date">{item.createAt.slice(0, 16)}</p>
                                            <NavLink to={"/blog/" + item.id}>
                                                <p className="post-by">
                                                    {this.state.lang ? item.titleUz : item.titleRu}
                                                </p>
                                            </NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="comments">
                            <div className="comments-count">
                                <h4>
                      <span>
                        {post &&
                        post.comments !== undefined &&
                        post.comments.length !== 0
                            ? post.comments.length
                            : "0"}
                      </span>
                                    {this.state.langs.comment}
                                </h4>
                            </div>
                            <ul>
                                {post &&
                                post.comments &&
                                post.comments.map((item) => (
                                    <li key={item.id}>
                                        <article>
                                            <div className="comment-status-text">
                                                <div className="comment-img">
                                                    {item.author.slice(0, 1).toUpperCase()}
                                                </div>
                                                <div className="comment-author-metadata">
                                                    <h4 className="author">
                                                        {item.author}{" "}
                                                        <span className="date">
                                    {item.createAt.slice(0, 16)}
                                  </span>
                                                    </h4>
                                                    <p className="comment-content">
                                                        {item.message}
                                                    </p>
                                                    <div
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState({
                                                                ...this.state,
                                                                comments_id: item.id,
                                                            });
                                                            this.obj = item;
                                                        }}
                                                        onDoubleClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState({
                                                                ...this.state,
                                                                comments_id: "",
                                                            });
                                                            this.obj = null;
                                                        }}
                                                        className="comment-reply-link"
                                                    >
                                                        <AiOutlineArrowRight></AiOutlineArrowRight>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {item.comments && (
                                            <ul className="children">
                                                <li>
                                                    <article>
                                                        <div className="comment-status-text">
                                                            <div className="comment-img">
                                                                {item.comments.author
                                                                    .slice(0, 1)
                                                                    .toUpperCase()}
                                                            </div>
                                                            <div className="comment-author-metadata">
                                                                <h4 className="author">
                                                                    {item.comments.author}{" "}
                                                                    <span className="date">
                                          {item.comments.createAt.slice(0, 16)}
                                        </span>
                                                                </h4>
                                                                <p className="comment-content">
                                                                    {item.comments.message}
                                                                </p>
                                                                <div
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        this.setState({
                                                                            ...this.state,
                                                                            comments_id: item.comments.id,
                                                                        });
                                                                        this.obj = item.comments;
                                                                    }}
                                                                    onDoubleClick={(e) => {
                                                                        e.preventDefault();
                                                                        this.setState({
                                                                            ...this.state,
                                                                            comments_id: "",
                                                                        });
                                                                        this.obj = null;
                                                                    }}
                                                                    className="comment-reply-link"
                                                                >
                                                                    <AiOutlineArrowRight></AiOutlineArrowRight>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="comment-responsd">
                            <h4>{this.state.langs.commentwrite}</h4>
                            <div className="contact-form">
                                {this.obj && (
                                    <ul className="children">
                                        <li>
                                            <article>
                                                <div className="comment-status-text">
                                                    <div className="comment-img">
                                                        {this.obj &&
                                                        this.obj.author.slice(0, 1).toUpperCase()}
                                                    </div>
                                                    <div className="comment-author-metadata">
                                                        <h4 className="author">
                                                            {this.obj && this.obj.author}{" "}
                                                            <span className="date">
                                    {this.obj && this.obj.createAt.slice(0, 16)}
                                  </span>
                                                        </h4>
                                                        <p className="comment-content">
                                                            {this.obj && this.obj.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
                                    </ul>
                                )}
                                <div className="cf-msg"></div>
                                <form onSubmit={this.onSubmit} method="post" id="cf">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <label htmlFor="name">{this.state.lang ? "Ism" : "Имя"}</label>
                                            <input
                                                className="for_input"
                                                onChange={(e) =>
                                                    this.setState({
                                                        ...this.state,
                                                        author: e.target.value,
                                                    })
                                                }
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <label htmlFor="email">EMail</label>
                                            <input
                                                className="for_input"
                                                onChange={(e) =>
                                                    this.setState({
                                                        ...this.state,
                                                        authorMail: e.target.value,
                                                    })
                                                }
                                                type="text"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <label htmlFor="msg">{this.state.lang ? "Izoh" : "Примечание"}</label>
                                            <textarea
                                                onChange={(e) =>
                                                    this.setState({
                                                        ...this.state,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className="contact-textarea for_input"
                                                id="msg"
                                                name="msg"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <button
                                                className="cont-submit"
                                                id="submit"
                                                name="submit"
                                                type="submit"
                                            >
                                                {this.state.langs.submit}
                                            </button>
                                            <ToastContainer autoClose={2000}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Clips = (props) => {
    const [change, setChange] = copyToClipboard();

    return (
        <span

            onClick={() => {
                setChange();
                props.note()
            }}
        >
            <input ref={change} value={window.location.href} style={{display: "none"}}/>
                                  <IoIosLink/>
                                  <ToastContainer autoClose={2000}/>
        </span>
    )
}
const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getPost}, dispatch));


export default connect(mstp, mdtp)(BlogContentItem);
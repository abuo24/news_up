import HomeCard from "../../cards/homeCard";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getNewsByCategoryId} from "../../../redux/actions/categoryApi";
import {getFile} from "../../../server/host";

class NewsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props && this.props.category && this.props.category.id,
            category: this.props.category,
            posts: null,
            currentPage: 0,
        };
    }

    componentDidMount() {
        this.props.getNewsByCategoryId(this.state.category.id, this.state.currentPage)
            .then((result) => {
                this.setState({...this.state, posts: result.payload.data, totalPages: result.payload.data.totalPages})
            }).catch(
            err => console.log(err)
        )
        this.setState({
            ...this.state,
            lang: this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        })
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.category.id) {
            this.setState({
                ...this.state,
                id: this.props.category.id,
                category: this.props.category
            });
            this.props.getNewsByCategoryId(this.props.category.id, this.state.currentPage).then((result) => {
                this.setState({
                    ...this.state,
                    posts: result.payload.data,
                    totalPages: result.payload.data.totalPages
                }, () => {
                })
            }).catch(
                err => console.log(err)
            )
        }

        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false,
                langs: this.props.langReducer.lang
            })
        }
    }

    onHandleSubmit = (i) => {
        if (i === -1) {
            i = 0;
            this.setState({currentPage: i}, () => {
            });
            this.props.getNewsByCategoryId(this.props.category.id, i).then((result) => {
                this.setState({posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            }).catch(
                err => console.log(err)
            )
        } else if (i === this.state.posts.totalPages) {
            i = this.state.posts.totalPages - 1;
            this.setState({currentPage: i}, () => {
            });
            this.props.getNewsByCategoryId(this.props.category.id, i).then((result) => {
                this.setState({posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            })
                .catch(
                    err => console.log(err)
                )
        } else {
            this.setState({currentPage: i}, () => {
            });
            this.props.getNewsByCategoryId(this.props.category.id, i).then((result) => {
                this.setState({posts: result.payload.data}, () => {
                })
            }).catch(
                err => console.log(err)
            )
        }
    }


    render() {

        const totalP = this.state.posts && this.state.posts.totalPages;

        let key = 0;
        const getMiddleHomeCards = this.state.posts && this.state.posts && this.state.posts.news.map((item) => (
            <HomeCard key={key++} title={this.state.lang ? item.titleUz : item.titleRu} views={item.viewsCount}
                      to={item.id} like={item.likesCount}
                      date={item.createAt.slice(0, 11)} img={getFile + item.headAttachment.hashId}
                      comment={item.comments} content={this.state.lang ? item.contentUz : item.contentRu}/>
        ));

        return (
            <div className="lifestyle-slider-item">
                <div className="section-top-bar">
                    <h4>{this.state && this.state.category && this.state.lang ? this.state.category && this.state.category.nameUz : this.state.category && this.state.category.nameRu}</h4>
                </div>{key !== 0 ?<>
                <div className="row">
                     getMiddleHomeCards
                </div>
                <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link"
                                   onClick={e => this.onHandleSubmit(this.state.currentPage - 1)}>{this.state.langs && this.state.langs.prev.slice(0, 4) + ".."}</a>
                            </li>

                            {Array(totalP).fill(1).map((el, i) => this.state.currentPage === i ?
                                <li className="page-item active"><a className="page-link">{1 + i}</a></li> :
                                <li className="page-item" onClick={e => this.onHandleSubmit(i)}><a
                                    className="page-link">{1 + i}</a></li>
                            )}

                            <li className="page-item" onClick={e => this.onHandleSubmit(this.state.currentPage + 1)}>
                                <a className="page-link">{this.state.langs && this.state.langs.next.slice(0, 4) + ".."}</a>
                            </li>
                        </ul>
                    </nav></>:  <div className="text-center ml-5">{this.state.langs && this.state.langs.oops}
            </div>
            }
            </div>
        )
    }
}

const mstp = (state) => (state);
const mdtp = (dispatch) => (bindActionCreators({getNewsByCategoryId}, dispatch));

export default connect(mstp, mdtp)(NewsItem);
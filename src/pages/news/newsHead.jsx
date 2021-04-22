import React, {Component} from 'react';
import HomeCard from "../cards/homeCard";
import {connect} from "react-redux";
import {getFile} from "../../server/host";
import {bindActionCreators} from "redux";
import {allPostsByPages} from "../../redux/actions/postApi";

class NewsHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            currentPage: 0,
        };
    }

    componentDidMount() {
        this.props.allPostsByPages()
            .then((result) => {
                this.setState({...this.state,posts: result.payload.data, totalPages: result.payload.data.totalPages})
            }).catch(
            err => console.log(err)
        );
        this.setState({
            lang: this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        });
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

    onHandleSubmit = (i) => {
        if (i === -1) {
            i = 0;
            this.setState({currentPage: i}, () => {
            });
            this.props.allPostsByPages( i).then((result) => {
                this.setState({...this.state,posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            }).catch(
                err => console.log(err)
            )
        } else if (i === this.state.posts.totalPages) {
            i = this.state.posts.totalPages - 1;
            this.setState({currentPage: i}, () => {
            });
            this.props.allPostsByPages( i).then((result) => {
                this.setState({...this.state,posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            })
                .catch(
                    err => console.log(err)
                )
        } else {
            this.setState({currentPage: i}, () => {
            });
            this.props.allPostsByPages( i).then((result) => {
                this.setState({...this.state,posts: result.payload.data}, () => {
                })
            }).catch(
                err => console.log(err)
            )
        }
    }


    render() {

        const totalP = this.state.posts && this.state.posts.totalPages;

        let key = 0;

        const getMiddleHomeCards = this.state.posts&&this.state.posts.news&&this.state.posts.news.map((item, keyword) =>
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
                                    {this.state.posts&&this.state.posts.news&&this.state.posts.news.length>0?<>
                                    <div className="row">
                                        {getMiddleHomeCards}
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
                                    </nav></>:this.state.langs&&this.state.langs.oops
}
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
const mdtp = (dispatch) => (bindActionCreators({allPostsByPages},dispatch));

export default connect(mstp, mdtp)(NewsHead);
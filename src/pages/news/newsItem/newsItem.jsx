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
            id: this.props.category.id,
            category: this.props.category,
            posts: null,
            currentPage: 0
        };
    }

    componentDidMount() {
        this.props.getNewsByCategoryId(this.state.category.id, this.state.currentPage)
            .then((result) => {
                this.setState({posts: result.payload.data, totalPages: result.payload.data.totalPages})
            }).catch(
            err => console.log(err)
        )
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.category.id) {
            this.setState({
                id: this.props.category.id,
                category: this.props.category
            });
            this.props.getNewsByCategoryId(this.props.category.id, this.state.currentPage).then((result) => {
                this.setState({posts: result.payload.data, totalPages: result.payload.data.totalPages}, () => {
                })
            }).catch(
                err => console.log(err)
            )
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

        console.log(this.state.posts);
        const totalP = this.state.posts && this.state.posts.totalPages;

        let key = 0;
        const getMiddleHomeCards = this.state.posts && this.state.posts && this.state.posts.news.map((item) => (
            <HomeCard key={key++} title={item.title} views={item.viewsCount} to={item.id} like={item.likesCount}
                      date={item.createAt.slice(0, 11)} img={getFile + item.headAttachment.hashId}
                      comment={item.comments} content={item.content}/>
        ));

        return (
            <div className="lifestyle-slider-item">
                <div className="section-top-bar">
                    <h4>{this.state.category && this.state.category.name}</h4>
                </div>
                <div className="row">
                    {key !== 0 ? getMiddleHomeCards :
                        <div className="text-center ml-5">Hali Malumotlar yuklanmagan:(
                        </div>
                    }
                </div>

                {this.state.posts && key !== 0 ?
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link"
                                   onClick={e => this.onHandleSubmit(this.state.currentPage - 1)}>Oldingi</a>
                            </li>

                            {Array(totalP).fill(1).map((el, i) => this.state.currentPage === i ?
                                <li className="page-item active"><a className="page-link">{1 + i}</a></li> :
                                <li className="page-item" onClick={e => this.onHandleSubmit(i)}><a
                                    className="page-link">{1 + i}</a></li>
                            )}

                            <li className="page-item" onClick={e => this.onHandleSubmit(this.state.currentPage + 1)}>
                                <a className="page-link">Keyingi</a>
                            </li>
                        </ul>
                    </nav> : ""
                }

            </div>
        )
    }
}

const mstp = (state) => (state);
const mdtp = (dispatch) => (bindActionCreators({getNewsByCategoryId}, dispatch));

export default connect(mstp, mdtp)(NewsItem);
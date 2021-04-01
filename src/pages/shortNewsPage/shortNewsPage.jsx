import React, {Component} from 'react';
// import NewsItem from "./newsItem/newsItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCategories} from "../../redux/actions/categoryApi";
import ShortNewsItem from "./ShortNewsItem";
import {NavLink} from "react-router-dom";
// import category_reducer from "../../redux/reducers/category_reducer";

class ShortNewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match && this.props.match.params && this.props.match.params.id,
            category: this.props.category_reducer&&this.props.category_reducer.categories&&this.props.category_reducer.categories.filter(item => {
                return item.id === this.props.match.params.id
            })
        };
    }

    componentDidMount() {
        this.props.getCategories();

        this.setState({
            ...this.state,
            lang: this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        });
    }


    componentDidUpdate(previousProps, previousState) {
        if (previousState.id !== this.props.match.params.id) {
            this.setState({
                ...this.state,
                id: this.props.match.params.id,
                category: this.props.category_reducer&&this.props.category_reducer.categories&&this.props.category_reducer.categories.filter(item => {
                    return item.id === this.props.match.params.id
                })
            })

        }

    }

    render() {

        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2">
                            <div className={"categories"}><NavLink
                                to={`/shortnews`} >{this.props.langReducer.lang.latest}</NavLink>
                            </div>
                            {this.props.category_reducer.categories.map(item => {
                                return <div className={"categories"}><NavLink
                                    to={`/shortnews/${item.id}`}  activeClassName={"active_categories"}>{this.props.langReducer.type=="uz" ? item.nameUz : item.nameRu}</NavLink>
                                </div>
                            })}
                        </div>
                        <div className="col-12 col-md-10">
                            <div className="top-bar-slider ls-slider owl-carousel">
                                <ShortNewsItem category={this.state.category&&this.state.category[0]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = state => state;
const mdtp = dispatch => (bindActionCreators({
    getCategories},dispatch));

export default connect(mstp, mdtp)(ShortNewsPage);
import React, {Component} from 'react';
import NewsItem from "./newsItem/newsItem";
import {connect} from "react-redux";
import category_reducer from "../../redux/reducers/category_reducer";

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match && this.props.match.params && this.props.match.params.id,
            category: this.props.category_reducer.categories.filter(item => {
                return item.id === this.props.match.params.id
            })
        };
    }


    // componentDidUpdate() {
    // if (this.state.id !== this.props.location.state && this.props.location.state.item && this.props.location.state.item.id) {
    //     this.onchange(this.props.location.state.item.id,this.props.location.state.item);
    // }
    // }
    // componentDidUpdate: function(){
    //     if (this.state.id !== this.props.location.state && this.props.location.state.item && this.props.location.state.item.id) {
    //         // this.onchange(this.props.location.state.item.id, this.props.location.state.item);
    //     }
    // }
    componentDidUpdate(previousProps, previousState) {
        if (previousState.id !== this.props.match.params.id) {
            this.setState({
                ...this.state,
                id: this.props.match.params.id,
                category: this.props.category_reducer.categories.filter(item => {
                    return item.id === this.props.match.params.id
                })
            })
        }
    }

    render() {

        console.log(this.state)
        console.log(this.props)
        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="top-bar-slider ls-slider owl-carousel">
                                <NewsItem category={this.state.category[0]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = state => state;

export default connect(mstp, null)(News);
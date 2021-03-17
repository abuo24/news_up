import React, {Component} from 'react';
import NewsItem from "./newsItem/newsItem";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.item.id,
            category: this.props.location.state.item
        };
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.location.state.item.id) {
            this.setState({id: this.props.location.state.item.id,
            category: this.props.location.state.item
            });
        }
    }

    render() {

        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="top-bar-slider ls-slider owl-carousel">
                                <NewsItem category={this.state.category}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
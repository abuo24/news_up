import React, {Component} from "react";
import {CategoryCard} from "../cards/categoryCard.jsx";
import {connect} from "react-redux";


class FitnessArea extends Component {

    state = {};
    componentDidMount() {
        this.setState(this.props.category_reducer.categories && this.props.category_reducer.categories[0]);
    }

    render() {
        return (
            <div>
                <CategoryCard
                        id={this.props.category_reducer.categories&&this.props.category_reducer.categories[0]&&this.props.category_reducer.categories[0].id}
                              category={this.props.category_reducer.categories && this.props.category_reducer.categories[0]}
                />
            </div>
        );
    }
};

const mstp = (state) => (state);

export default connect(mstp, null)(FitnessArea);
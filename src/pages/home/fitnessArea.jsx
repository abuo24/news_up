import React, {Component} from "react";
import {connect} from "react-redux";
import CategoryCard from "../cards/categoryCard";


class FitnessArea extends Component {

    state = {};
    componentDidMount() {
        this.setState(this.props.category_reducer.categories && this.props.category_reducer.categories[1]);
    }

    render() {
        return (
            <div>
                <CategoryCard
                        id={this.props.category_reducer.categories&&this.props.category_reducer.categories[1]&&this.props.category_reducer.categories[1].id}
                              category={this.props.category_reducer.categories && this.props.category_reducer.categories[1]}
                />
            </div>
        );
    }
};

const mstp = (state) => (state);

export default connect(mstp, null)(FitnessArea);
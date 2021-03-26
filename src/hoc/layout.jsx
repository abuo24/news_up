import React, {Component} from 'react'
import {Footer, Header} from "../pages";
import {connect} from "react-redux";
import langActions from "../redux/actions/lanActions";
import {getCategories} from "../redux/actions/categoryApi";

class Layout extends Component {
    state = {
        lang: localStorage.getItem("lang")
    };

    componentDidMount() {

    }

    render() {

        return (<>
                <Header/>
                {this.props.children}
                <Footer/>
            </>
        );
    }
};

const mstp = state => (state);

export default connect(mstp, null)(Layout);
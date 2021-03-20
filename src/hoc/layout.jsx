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
        console.log(this.state)
        console.log(this.props)
        console.log(localStorage.getItem("lang"))
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
const mdtp = dispatch => ({
    changeUz: () => {
        dispatch(langActions.uz())
    },
    changeRu: () => {
        dispatch(langActions.ru())
    },
    getCategories: () => {
        dispatch(getCategories())
    }
})

export default connect(mstp, mdtp)(Layout);
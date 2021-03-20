import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineBars, BiMinus, FaBars} from "react-icons/all";
import s from './headerBottom.module.css'
import c from 'classnames'
import {connect} from "react-redux";
import LanguageChange from "./languageChange";
import langReducer from "../../../redux/reducers/langReducer";
import {bindActionCreators} from "redux";
import {getCategories} from "../../../redux/actions/categoryApi";

class HeaderBottom extends Component {

    state = {
        toogle: false
    };

    onChange() {
        this.setState({...this.state, toogle: !this.state.toogle})
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            lang: this.props.langReducer.type == "uz" ? true : false,
            langs: this.props.langReducer.lang
        })
    }

    componentDidUpdate() {
        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false,
                langs: this.props.langReducer.lang
            })
        }
    }


    render() {
        return (
            <div className="header-bottom
             ">
                <div className="menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <li><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/"}>{this.state.langs&&this.state.langs.home}</NavLink>
                                            </li>
                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/blog"}>{this.state.langs&&this.state.langs.blog}</NavLink></li>

                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/news"}>{this.state.langs&&this.state.langs.all}</NavLink>
                                                <ul className="drop-menu mega-menu">
                                                    {this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.map(
                                                        (item) =>
                                                            (
                                                                <li key={item.id}>
                                                                    <NavLink
                                                                        to={{
                                                                            pathname: "/news/" + item.id,
                                                                        }}>
                                                                        {this.state.lang ? item.nameUz : item.nameRu}
                                                                    </NavLink>
                                                                </li>
                                                            ))
                                                    }
                                                </ul>
                                            </li>
                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/about"}>{this.state.langs&&this.state.langs.about}</NavLink>
                                            </li>
                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/contact"}>{this.state.langs&&this.state.langs.contact}</NavLink>
                                            </li>
                                            <LanguageChange/>
                                            <li className={c(s.bars)} onClick={() => {
                                                this.onChange()
                                            }}>{!this.state.toogle ? <FaBars></FaBars> : <BiMinus></BiMinus>}</li>
                                            {this.state.toogle && <div>
                                                <li><NavLink activeStyle={{
                                                    color: "#f26522"
                                                }} to={"/news"}>{this.state.langs&&this.state.langs.all}</NavLink>
                                                    <ul className="drop-menu">
                                                        {this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.map(
                                                            (item) =>
                                                                (
                                                                    <li key={item.id}>
                                                                        <NavLink
                                                                            to={{
                                                                                pathname: "/news/" + item.name.toLowerCase(),
                                                                                state: {
                                                                                    item
                                                                                }
                                                                            }}>
                                                                            {item.name}
                                                                        </NavLink>
                                                                    </li>
                                                                ))
                                                        }
                                                    </ul>
                                                </li>
                                                <li><NavLink to={"/blog"}>{this.state.langs&&this.state.langs.blog}</NavLink></li>
                                                <li><NavLink to={"/about"}>{this.state.langs&&this.state.langs.about}</NavLink>
                                                </li>
                                                <li><NavLink to={"/contact"}>{this.state.langs&&this.state.langs.contact}</NavLink></li>
                                                <LanguageChange/>
                                            </div>
                                            }
                                        </ul>
                                    </nav>
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

const mdtp = (dispatch) => (bindActionCreators({getCategories}, dispatch))

export default connect(mstp, mdtp)(HeaderBottom);
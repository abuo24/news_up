import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineBars, BiMinus, FaBars} from "react-icons/all";
import s from './headerBottom.module.css'
import c from 'classnames'
import {connect} from "react-redux";
import LanguageChange from "./languageChange";
import langReducer from "../../../redux/reducers/langReducer";
import {bindActionCreators} from "redux";
import {getCategories, getCategoriesParents} from "../../../redux/actions/categoryApi";
import {IconContext} from "react-icons";

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
        this.props.getCategoriesParents()
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

        const list = []
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
                                            <li><NavLink  exact activeStyle={{
                                                color: "#f26522"
                                            }} to={"/"}>{this.state.langs && this.state.langs.home}</NavLink>
                                            </li>

                                            <li className={c(s.item_nav)}><NavLink  exact activeStyle={{
                                                color: "#f26522"
                                            }} to={"/news"}>{this.state.langs && this.state.langs.all}</NavLink>
                                                <ul className="drop-menu mega-menu">
                                                    {this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.map(
                                                        (item) =>
                                                            (
                                                                <li key={item.id}>
                                                                    <NavLink exact
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

                                            {
                                                this.props.category_reducer && this.props.category_reducer.parents && this.props.category_reducer.parents.data&& this.props.category_reducer.parents.data.map(
                                                        (item) =>
                                                            (item!=null? <li key={item.id} className={c(s.item_nav)}>
                                                                    <NavLink exact
                                                                        activeStyle={{
                                                                            color: "#f26522"
                                                                        }}
                                                                        to={{
                                                                            pathname: "/news/" + item.id,
                                                                        }}>
                                                                        {this.state.lang ? item.nameUz : item.nameRu}
                                                                    </NavLink>
                                                                    <ul className="drop-menu">
                                                                        {this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.map(
                                                                            (i) => {
                                                                            if(i.parent!=null?i.parent.id==item.id:false){ return <li key={i.id}>
                                                                                    <NavLink exact
                                                                                             to={{
                                                                                                 pathname: "/news/" + i.id,
                                                                                             }}>
                                                                                        {this.state.lang ? i.nameUz : i.nameRu}
                                                                                    </NavLink>
                                                                                </li>}
                                                                            }
                                                                            )
                                                                        }
                                                                    </ul>
                                                                </li>:null
                                                            ))
                                            }

                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/contact"}>{this.state.langs && this.state.langs.contact}</NavLink>
                                            </li>

                                            <LanguageChange/>
                                            <li className={c(s.bars)} onClick={() => {
                                                this.onChange()
                                            }}>{!this.state.toogle ?
                                                <IconContext.Provider style={{padding: "7px"}}
                                                                      value={{
                                                                          color: "white",
                                                                          className: "global-class-name"
                                                                      }}>
                                                    <div><FaBars/></div>
                                                </IconContext.Provider> : <IconContext.Provider style={{padding: "7px"}}
                                                                                                value={{
                                                                                                    color: "white",
                                                                                                    className: "global-class-name"
                                                                                                }}>
                                                    <div><BiMinus/></div>
                                                </IconContext.Provider>}</li>
                                            {this.state.toogle && <div>
                                                <li><NavLink exact activeStyle={{
                                                    color: "#f26522"
                                                }} to={"/news"}>{this.state.langs && this.state.langs.all}</NavLink>
                                                    <ul className="drop-menu">
                                                        {this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.map(
                                                            (item) =>
                                                                (
                                                                    <li key={item.id}>
                                                                        <NavLink exact
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

                                                {
                                                    this.props.category_reducer && this.props.category_reducer.parents && this.props.category_reducer.parents.data&& this.props.category_reducer.parents.data.map(
                                                        (item) =>
                                                            (item!=null? <li key={item.id}>
                                                                    <NavLink exact
                                                                             activeStyle={{
                                                                                 color: "#f26522"
                                                                             }}
                                                                             to={{
                                                                                 pathname: "/news/" + item.id,
                                                                             }}>
                                                                        {this.state.lang ? item.nameUz : item.nameRu}
                                                                    </NavLink>
                                                                    <ul className="drop-menu">
                                                                        {this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories.map(
                                                                            (i) => {
                                                                                if(i.parent!=null?i.parent.id==item.id:false){ return <li key={i.id}>
                                                                                    <NavLink exact
                                                                                             to={{
                                                                                                 pathname: "/news/" + i.id,
                                                                                             }}>
                                                                                        {this.state.lang ? i.nameUz : i.nameRu}
                                                                                    </NavLink>
                                                                                </li>}
                                                                            }
                                                                        )
                                                                        }
                                                                    </ul>
                                                                </li>:null
                                                            ))
                                                }

                                                <li><NavLink
                                                    to={"/contact"}>{this.state.langs && this.state.langs.contact}</NavLink>
                                                </li>
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

const mdtp = (dispatch) => (bindActionCreators({getCategories,getCategoriesParents}, dispatch))

export default connect(mstp, mdtp)(HeaderBottom);
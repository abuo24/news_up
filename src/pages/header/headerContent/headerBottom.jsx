import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineBars, BiMinus, FaBars} from "react-icons/all";
import s from './headerBottom.module.css'
import c from 'classnames'
import {connect} from "react-redux";

class HeaderBottom extends Component {

    state = {
        toogle: false
    };

    onChange() {
        this.setState({toogle: !this.state.toogle})
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
                                            }} to={"/"}>Bosh Sahifa</NavLink>
                                            </li>
                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/blog"}>Blog</NavLink></li>

                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/news"}>Umumiy</NavLink>
                                                <ul className="drop-menu mega-menu">
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
                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/about"}>BIz haqimizda</NavLink>
                                            </li>
                                            <li className={c(s.item_nav)}><NavLink activeStyle={{
                                                color: "#f26522"
                                            }} to={"/contact"}>contact</NavLink>
                                            </li>
                                            <li className={c(s.bars)} onClick={() => {
                                                this.onChange()
                                            }}>{!this.state.toogle ? <FaBars></FaBars> : <BiMinus></BiMinus>}</li>
                                            {this.state.toogle && <div>
                                                <li><NavLink to={"news"}>Ijtimoiy</NavLink>
                                                    <ul className="drop-menu">
                                                        <li>
                                                            <NavLink to={"/news/bussines"}>
                                                                Biznes
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/society"}>
                                                                Jamiyat
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/world"}>
                                                                Jahon
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to={"news"}>Foydali</NavLink>
                                                    <ul className="drop-menu">
                                                        <li>
                                                            <NavLink to={"/news/sport"}>
                                                                Sport
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/technolody"}>
                                                                Texnologiya
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/travel"}>
                                                                Sayohat
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/health"}>
                                                                Salomatlik
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/fashion"}>
                                                                Moda
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to={"news"}>Foydali</NavLink>
                                                    <ul className="drop-menu">
                                                        <li>
                                                            <NavLink to={"/news/travel"}>
                                                                Sayohat
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/health"}>
                                                                Salomatlik
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/fashion"}>
                                                                Moda
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to={"news"}>TexnoSport</NavLink>
                                                    <ul className="drop-menu">
                                                        <li>
                                                            <NavLink to={"/news/travel"}>
                                                                Avto
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/sport"}>
                                                                Sport
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/sport"}>
                                                                Internet
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/news/technolody"}>
                                                                Texnologiya
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to={"/blog"}>Blog</NavLink></li>
                                                <li><NavLink to={"/about"}>BIz haqimizda</NavLink>
                                                </li>
                                                <li><NavLink to={"/contact"}>contact</NavLink></li>
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

export default connect(mstp, null)(HeaderBottom);
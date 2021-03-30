import React, {Component, useEffect, useState} from 'react';
import {FaRegClock, HiMail, HiPhone, ImLocation} from "react-icons/all";

import GoogleMapReact from 'google-map-react';
import {postsApi} from "../../redux/service/postsApi";
import {toast, ToastContainer} from "react-toastify";
import {connect} from "react-redux";

const AnyReactComponent = ({text}) => <div>{text}</div>;

const Contact = (props) => {

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
        }
    )
    return (
        <div>

            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <div className={"google-map"}>
                        <div className="map">
                            <AnyReactComponent
                                lat={41.339328}
                                lng={69.285872}
                                text="Karta Yuklanyabdi"
                            />
                        </div>
                    </div>
                </GoogleMapReact>
            </div>

            <div className="contact-btm-area mar-top-30">
                <div className="container">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="contact-info">
                                <h4>{langs.contact}</h4>
                                <ul>
                                    <li>
                                        <article>
                                            <ImLocation/>
                                            <h5>{langs.address}</h5>
                                            <p>Amur Temur sh.k 108<br/>Tashkent, Uzbekistan</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article>
                                            <HiPhone></HiPhone>
                                            <h5>{langs.phone}</h5>
                                            <p>+998 93 209 99 24<br/>+998 93 208 99 24</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article>
                                            <HiMail></HiMail>
                                            <h5>E-mail</h5>
                                            <p>support@agorastore.com</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article>
                                            <FaRegClock></FaRegClock>
                                            <h5></h5>
                                            <p>Monday-Friday: 8am-8pm<br/>Saturday 9am-1pm</p>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12">
                          <SendMessage lang={langs} uz={lang}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

class SendMessage extends Component {

    componentWillUnmount() {
        this.props.post && postsApi.setLikesAndViews(this.props.post.id).then(
            res => "", err => console.log(err)
        )
    }

    state = {
        firstName: "",
        lastName: "",
        message: ""
    };

    note = () => this.props.uz&&this.props.uz?toast.success("Saqlandi"):toast.success("Сохранено")

    onSubmit = (e) => {
        e.preventDefault()
        postsApi.createMessage( this.state&& this.state).then(
            res => {
                this.setState(null);
                Array.from(document.querySelectorAll(".for_input_message")).forEach(
                    input => (input.value = "")
                );
                this.note()
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="contact-write">
                <h4>{this.props.lang&&this.props.lang.contact}</h4>
                <div className="cw-form">
                    <div className={"row"}>
                    <div className={"col-12"}>
                    <form onSubmit={this.onSubmit} >
                        <div className="input">
                            <label htmlFor="fname">{this.props.lang&&this.props.lang.name}</label>
                            <input required onChange={e => (this.setState({...this.state, firstName: e.target.value}))} className="for_input_message"  type="text" id="fname" name="fname"/>
                        </div>
                        <div className="input last-name" style={{maxWidth: "100%!important"}}>
                            <label htmlFor="sname">{this.props.lang&&this.props.lang.subname}</label>
                            <input required onChange={e => (this.setState({...this.state, lastName: e.target.value}))}  className="for_input_message"  type="text" id="sname" name="sname"/>
                        </div>
                        <div className="text-area">
                            <label htmlFor="msg">{this.props.lang&&this.props.lang.textMes}</label>
                            <textarea required onChange={e => (this.setState({...this.state, message: e.target.value}))}  className="for_input_message" name="msg" id="msg"/>
                        </div>
                        <div className="send-btn">
                            <input type="submit" value={this.props.lang&&this.props.lang.send} name="send"/>
                            <ToastContainer/>
                        </div>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp  = state => state;


export default connect(mstp, null)(Contact);
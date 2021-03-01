import React from 'react';
import {FaRegClock, HiMail, HiPhone, ImLocation} from "react-icons/all";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

const Contact = () => {

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
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
                                lng={ 69.285872}
                                text="My Marker"
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
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                        <article>
                                            <ImLocation/>
                                            <h5>address</h5>
                                            <p>Amur Temur sh.k 108<br/>Tashkent, Uzbekistan</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article>
                                            <HiPhone></HiPhone>
                                            <h5>phone</h5>
                                            <p>+998 93 209 99 24<br/>+7 239 585-58-61</p>
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
                                            <h5>working hours</h5>
                                            <p>Monday-Friday: 8am-8pm<br/>Saturday 9am-1pm</p>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="contact-write">
                                <h4>Contact Info</h4>
                                <div className="cw-form">
                                    <form action="#">
                                        <div className="input">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" name="fname"/>
                                        </div>
                                        <div className="input last-name">
                                            <label htmlFor="sname">Second Name</label>
                                            <input type="text" id="sname" name="sname"/>
                                        </div>
                                        <div className="text-area">
                                            <label htmlFor="msg">Message</label>
                                            <textarea name="msg" id="msg"></textarea>
                                        </div>
                                        <div className="send-btn">
                                            <input type="submit" value="Send Message" name="send"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
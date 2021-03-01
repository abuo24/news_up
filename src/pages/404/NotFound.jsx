import React from 'react';
import {NavLink} from "react-router-dom"

const NotFound = () => {
    return (<div className="error-area">
        <div className="error-bg"></div>
        <div className="error-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="errors">
                            <h1>404</h1>
                            <h5>THIS’S NOT THE WEB PAGE YOUR’RE LOOKING FOR</h5>
                            <div className="please-try">
                                <p>Please try one of the following pages</p>
                                <NavLink className="please-try-submit blue-button-submit" to={"/"}>Back To
                                    Homepage</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default NotFound;
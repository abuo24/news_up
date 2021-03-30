import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../img/logo/logo.png'
import banner from '../../../img/banner/header-top-banner1.jpg'
const HeaderMiddle = () => {
    return (
        <div>
            <div className={"header-middle"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-4 col-sm-4 col-xs-12"}>
                            <div className={"logo"}>
                                <Link to={"/"}><img src={logo} alt="logo"/></Link>
                            </div>
                        </div>
                        <div className={"col-md-8 col-sm-8 col-xs-12"}>
                            <div className="h-banner-area">
                                {/*bannerni yuklash kk*/}
                                {/*<Link to={'/'}><img src={banner} alt="banner"/></Link>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;
import React from 'react';
import {links} from "../../../server/links";

const Links = () => {
    return (
        <div>
            <div className="h1-shrt-connected row d-flex justify-content-center">
                <div className="col-6 col-md-2 col-sm-4">
                    <a href={links.facebook} target={"_blank"}>FACEBOOK</a>
                </div>
                <div className={"col-6 col-md-2  col-sm-4"}>
                    <a href={links.twitter} target={"_blank"}>Twitter</a>
                </div>
                <div className={"col-6 col-md-2  col-sm-4"}>
                    <a href={links.telegram} target={"_blank"}>Telegram</a>
                </div>
                <div className={"col-6 col-md-2 col-sm-4"}>
                    <a href={links.instagram} target={"_blank"}>Instagram</a>
                </div>
                <div className={"col-6 col-md-2 col-sm-4"}>
                    <a href={links.youtube} target={"_blank"}>YOUTUBE</a>
                </div>
            </div>
        </div>
    );
};

export default Links;
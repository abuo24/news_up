import React from 'react';
import headimg from "../../../img/post-img/about-me/img-1.jpg";
import headimg2 from "../../../img/post-img/about-me/img-2.jpg";

const HeadAbout = () => {
    return (<div className="col-md-8 col-sm-8">

            <div className="about-me-text">
                <img src={headimg} alt="image"/>
                <p className="abt-text">Biz bilan o'zgacha yangiliklarni kuzating:)

                Kontent tez ora to'ldiriladi</p>

            </div>
        </div>
    );
};

export default HeadAbout;
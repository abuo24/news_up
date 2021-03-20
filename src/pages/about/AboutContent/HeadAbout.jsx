import React, {useEffect, useState} from 'react';
import headimg from "../../../img/post-img/about-me/img-1.jpg";
import headimg2 from "../../../img/post-img/about-me/img-2.jpg";
import {connect} from "react-redux";

const HeadAbout = (props) => {


    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
        }
    )


    return (<div className="col-md-8 col-sm-8">

            <div className="about-me-text">
                <img src={headimg} alt="image"/>
                <p className="abt-text">{
                    langs.aboutText
                }</p>

            </div>
        </div>
    );
};

const mstp = (state) =>(state);

export default connect(mstp, null)(HeadAbout);
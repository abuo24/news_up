import React from 'react';
import headimg from '../../img/post-img/about-me/img-1.jpg';
import headimg2 from '../../img/post-img/about-me/img-2.jpg';
import layimg from "../../img/side-bar/most-populer/msp-img1.jpg"
import HeadAbout from "./AboutContent/HeadAbout";
import banner from "./../../img/banner/header-sidebar-banner3.jpg";
import {AiOutlineYoutube, FaComment, FaFacebookF, FaTwitter, WiTime9} from "react-icons/all";
import HeadSidebar from "./AboutContent/HeadSidebar";

const About = () => {
    return (
        <div>

            <div className="twich-content-area tw-blog-dtls">
                <div className="container">
                    <div className="row">
                        <HeadAbout/>
                        <HeadSidebar/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
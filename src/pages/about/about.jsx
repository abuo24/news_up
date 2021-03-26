import React from 'react';
import HeadAbout from "./AboutContent/HeadAbout";
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
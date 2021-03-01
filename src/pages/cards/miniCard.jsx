import React from 'react';
import p1 from "../../img/post-img/list-post-img1.jpg";
import {Link} from "react-router-dom";
import {WiTime9} from "react-icons/all";

const MiniCard = ({img,title, date,to}) => {
    return (
        <div>
            <div className="list-post-item">
                <img src={img} alt="post thumb"/>
                <div className="lt-post-desc">
                    <Link href="#"  to={to} >{title}</Link>
                    <p><span><WiTime9></WiTime9>{date}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MiniCard;
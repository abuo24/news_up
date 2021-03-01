import React from 'react';
import {Link} from "react-router-dom";
import {BsFillHeartFill, FaComment, WiTime9} from "react-icons/all";

const HomeCard = ({to,img, title, date, views, like, comment, content}) => {
    return (
        <div className="lifestyle-post-item">
            <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={img}
                     alt="post thumb"/>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
                <Link href="#"  to={'/blog/'+to} >{title}</Link>
                <div className="lf-post-fback">
                    <span><WiTime9></WiTime9>{date}</span>
                    <span><BsFillHeartFill></BsFillHeartFill>{like==null?0:like}</span>
                    <span><FaComment></FaComment>{comment==null?0:comment}</span>
                </div>
                <p className="df-text text-truncate">{content.toString().slice(0, 100)}</p>
            </div>
        </div>
    )
};

export default HomeCard;
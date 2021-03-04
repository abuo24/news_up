import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {BsFillHeartFill, BsHeart, FaComment, WiTime9} from "react-icons/all";
import {postsApi} from "../../redux/service/postsApi";

const HomeCard = ({to, img, title, date, views, like, comment, content}) => {

    let [likes, setLikes] = useState(0);
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setToogle(!toogle);
        getLikes();
    }
    useEffect(()=>(
        like===null?setLikes(0):setLikes(like)
    ),[])

    const getLikes = () => {
        !toogle ? postsApi.setLikes(to)
                .then(
                    res =>{
                        console.log(res);
                        setLikes(++likes)
                    }
                        ,
                    err => console.log(err))
            : postsApi.setDisLikes(to)
                .then(res => {console.log(res);
                    setLikes(--likes)
                }, err => console.log(err))
    }

    return (
        <div className="lifestyle-post-item">
            <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={img} alt="post thumb"/>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
                <Link href="#" to={'/blog/' + to}>{title}</Link>
                <div className="lf-post-fback">
                    <span><WiTime9></WiTime9>{date}</span>
                    <span onClick={e => (handleChange(e))}>
                        {toogle ? <BsFillHeartFill/> : <BsHeart/>}
                        { likes}</span>
                    <span><FaComment/>{comment == undefined ? 0 : comment.length}</span>
                </div>
                <p className="df-text text-truncate">{content.toString().slice(0, 100)}</p>
            </div>
        </div>
    )
};

export default HomeCard;
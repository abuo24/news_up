import React, {Component, useEffect, useState} from 'react';
import {BsFillHeartFill, BsHeart, FaComment, WiTime9} from "react-icons/all";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { getFile} from "../../server/host";
import {NavLink} from "react-router-dom";
import {postsApi} from "../../redux/service/postsApi";

class CategoryCard extends Component {

    state = {
        lang: true
    }

    componentDidMount() {
        this.setState({...this.state,
            lang:this.props.langReducer && this.props.langReducer.type == "uz" ? true : false
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.lang !== (this.props.langReducer.type=="uz"?true:false)){
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false
            })
        }
    }

    render() {

        return (
            <div className="fitness-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-top-bar">
                                <h4>{this.state.lang ? this.props&&this.props.category&&this.props.category.nameUz : this.props&&this.props.category&&this.props.category.nameRu}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ft-slider-area">
                            {
                                this.state.res && this.state.res.data && this.state.res.data.data.news.slice(0, 2).map(
                                    (item, key) =>
                                        (<CategoryCardItem id={item.id} key={key}
                                                           img={getFile + item.headAttachment.hashId}
                                                           category={this.state.lang?item.category.nameUz:item.category.nameRu}
                                                           cid={item.category.id}
                                                           comment={item.comments}
                                                           to={"/blog/" + item.id} like={item.likesCount}
                                                           date={item.createAt.slice(0, 11)}
                                                           title={this.state.lang ? item.titleUz : item.titleRu}/>))
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

const CategoryCardItem = ({id, to, category, img, title, date, like,cid, comment}) => {


    let [likes, setLikes] = useState(0);
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setToogle(!toogle);
        getLikes();
    }
    useEffect(() => (
        like === null ? setLikes(0) : setLikes(like)
    ), [])

    const getLikes = () => {
        !toogle ? postsApi.setLikes(id)
                .then(
                    res => {
                        console.log(res);
                        setLikes(++likes)
                    }
                    ,
                    err => console.log(err))
            : postsApi.setDisLikes(id)
                .then(res => {
                    console.log(res);
                    setLikes(--likes)
                }, err => console.log(err))
    }


    return (
        <div className="mt-1 col-md-6 col-sm-6 col-xs-12">
            <div className="ft-slider-item">
                <img src={img} alt="slider image"/>
                <div className="ft-slider-text">
                    <NavLink to={"/news/"+cid} className="sl-post-cat">{category}</NavLink><br/>
                    <NavLink to={to} className="sl-post-title">{title}</NavLink>
                    <div className="clearfix"></div>
                    <div className="meta-tag-area">
                        <span><WiTime9></WiTime9>{date}</span>
                        <span onClick={e => (handleChange(e))}>
                        {toogle ? <BsFillHeartFill/> : <BsHeart/>}
                            {likes}</span> <span><FaComment></FaComment>{comment == null ? comment.length : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mstp, mdtp)(CategoryCard);

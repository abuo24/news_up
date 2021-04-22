import React, {Component, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";

import {
    AiOutlineYoutube,
    BsFillHeartFill,
    BsHeart,
    FaComment,
    FaEnvelope,
    FiInstagram, FiTwitter,
    GrYoutube,
    IoLogoTwitter,
    WiTime9
} from "react-icons/all";
import {MiddleHomeCards, MiniCard} from "../index";
import {connect} from "react-redux";
import {getFile} from "../../server/host";
import Slider from "react-slick";
import {bindActionCreators} from "redux";
import {getCategories} from "../../redux/actions/categoryApi";
import {postsApi} from "../../redux/service/postsApi";
import {links} from "../../server/links";

class TwitchContent extends Component {

    state = {
        lang: this.props.langReducer.type == "ru" ? false : true,
        langs: this.props.langReducer.lang,
        categories: null,
        popular: null,
        posts: null
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            categories: this.props.category_reducer && this.props.category_reducer.categories && this.props.category_reducer.categories,
            popular: this.props.post_reducer && this.props.post_reducer.popular_posts && this.props.post_reducer.popular_posts.data && this.props.post_reducer.popular_posts.data,
            posts: this.props.post_reducer.posts && this.props.post_reducer.posts.data,
            posts_date: this.props.post_reducer.popular_date && this.props.post_reducer.popular_date.data
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.lang !== (this.props.langReducer.type == "uz" ? true : false)) {
            this.setState({
                ...this.state,
                lang: this.props.langReducer.type == "uz" ? true : false,
                langs: this.props.langReducer.lang
            })
        }
    }

    render() {

        const {popular} = this.state;

        let list = [];
        popular && popular.map(item => {
                if (item.viewsCount != null) {
                    list.push(item);
                }
            }
        );

        const {posts} = this.state;
        const {posts_date} = this.state;

        const getMiniCards = posts && posts.slice(1, 6).map((item, key) => (
            <MiniCard key={key} to={"/blog/" + item.id} img={getFile + item.headAttachment.hashId}
                      title={this.state.lang ? item.titleUz : item.titleRu}
                      content={this.state.lang ? item.contentUz : item.contentRu}
                      date={item.createAt && item.createAt.slice(0, 11)}/>));

        const getMiniCardsPopular = list && list.slice(0, 5)
            .map((item, key) => (
                <MiniCard key={key} to={"/blog/" + item.id} img={getFile + item.headAttachment.hashId}
                          title={this.state.lang ? item.titleUz : item.titleRu}
                          date={item.createAt && item.createAt.slice(0, 16)}/>));

        console.log(this.props)
        const getMiniCardsPopularDate = posts_date && posts_date.slice(0, 5)
            .map((item, key) => (
                <MiniCard key={key} to={"/blog/" + item.id} img={getFile + item.headAttachment.hashId}
                          title={this.state.lang ? item.titleUz : item.titleRu}
                          date={item.createAt && item.createAt.slice(0, 16)}/>));

        console.log(posts_date)

        const getMiddleHomeCards = this.state.categories && this.state.categories.map((item, key) => (
            <MiddleHomeCards key={key} category={item}/>));

        const settings = {
            dots: false,
            autoplay: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const count = this.props.post_reducer && this.props.post_reducer.count && this.props.post_reducer.count.data;

        return (
            <div className="twich-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="letest-news-area">
                                <div className="section-top-bar">
                                    <h4 className={"text-muted"}>{this.state.langs && this.state.langs.latestNews}</h4>
                                    <ul className={"text-muted"}>
                                        <li role="presentation" className="active allnews d-inline-block">
                                            <NavLink to={"/news"} aria-controls="all" role="tab"
                                                     data-toggle="tab">{this.state.langs && this.state.langs.all}</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row tab-content">
                                    <div className="letest-news tab-pane fade in active" role="tabpanel" id="all">
                                        {posts && <HeadItem post={posts[0] && posts[0]}
                                                            content={this.state.lang ? posts[0] && posts[0].contentUz : posts[0] && posts[0].contentRu}
                                                            title={this.state.lang ? posts[0] && posts[0].titleUz : posts[0] && posts[0].titleRu}
                                                            name={this.state.lang ? posts[0] && posts[0].category.nameUz : posts[0] && posts[0].category.nameRu}/>}
                                        <div className="col-md-6 col-sm-6">
                                            {getMiniCards}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12"}>

                                    <div className="top-bar-slider ls-slider">
                                        <Slider {...settings}>
                                            {getMiddleHomeCards}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="side-bar">
                                <div className="widget widget-social">
                                    <div className="widget-fb p-2">
                                        <a href={links.instagram} target={"_blank"}>
                                            <FiInstagram style={{fontSize: "20px"}}/>
                                            <h4>{count && count.instagram && count.instagram}+</h4>
                                            <h6>{this.state.langs && this.state.langs.fanat}</h6>
                                        </a></div>

                                    <div className="widget-twitter p-2">
                                        <a href={links.twitter}>
                                            <FiTwitter style={{fontSize: "20px"}}/>
                                            <h4>{count && count.twitter && count.twitter}+</h4>
                                            <h6>{this.state.langs && this.state.langs.seens}</h6>
                                        </a></div>

                                    <div className="widget-g-plus p-2">
                                        <a href={links.youtube}>
                                            <AiOutlineYoutube style={{fontSize: "20px"}}/>
                                            <h4>{count && count.youtube && count.youtube}+</h4>
                                            <h6>{this.state.langs && this.state.langs.sub}</h6>
                                        </a></div>

                                </div>

                                <div className="widget widget-most-populer">

                                    <div className="top-bar-slider owl-carousel">
                                        <div className="most-slider-item">
                                            <div className="section-top-bar">
                                                <h4>{this.state.langs && this.state.langs.maxseen}</h4>
                                            </div>
                                            {getMiniCardsPopular}
                                        </div>

                                        <div className="most-slider-item">
                                            <div className="section-top-bar">
                                                <h4>{this.state.langs && this.state.langs.weektop}</h4>
                                            </div>
                                            {getMiniCardsPopularDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const HeadItem = ({post, content, title, name}) => {

    let [likes, setLikes] = useState(0);
    const [toogle, setToogle] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setToogle(!toogle);
        getLikes();
    };
    useEffect(() => (
        post && (post.likesCount === undefined || post.likesCount === undefined || post.likesCount === null || post.likesCount == null ? setLikes(0) : setLikes(post.likesCount))
    ), [post]);

    const getLikes = () => {
        !toogle ? postsApi.setLikes(post.id)
                .then(
                    res => {
                        setLikes(++likes)
                    },
                    err => console.log(err))
            : postsApi.setDisLikes(post.id)
                .then(res => {
                    setLikes(--likes)
                }, err => console.log(err))
    };

    return (
        <div className="col-md-6 col-sm-6">
            <div className="lt-single-post">
                <div className="single-lt-thumb">
                    {post && post.headAttachment && post.headAttachment.hashId != null ?
                        <img src={getFile + post.headAttachment.hashId} alt="post thumbnail"/> : <></>}
                    <div className="lt-thumb-desc">
                        <NavLink className="ln-post-cat"
                                 to={`/news/${post && post.category && post.category.id}`}
                                 href="#">{name && name}</NavLink>
                        {post != null ? <div className="meta-autor">
                            <div className="meta-tag-area">
                                <span><WiTime9></WiTime9>{post && post.createAt.slice(0, 16)}</span>
                                <span onClick={e => (handleChange(e))}>
                        {toogle ? <BsFillHeartFill/> : <BsHeart/>}
                                    {likes}</span>
                                <span><FaComment></FaComment>{post && post.comments.length}</span>
                            </div>
                        </div> : ""}
                    </div>
                </div>
                <>
                    <Link className={"lt-snlg-title "} href="#"
                          to={'/blog/' + post && post != null && post != undefined && post.id && post.id != undefined && post.id != null && post.id}>
                        {title && title}
                    </Link>
                    <p className="df-text" dangerouslySetInnerHTML={{__html: content && content.slice(0, 100)}}/>
                </>
            </div>
        </div>
    )
}

const mstp = (state) => (state);

const mdtp = (dispatch) => (bindActionCreators({getCategories}, dispatch));

export default connect(mstp, mdtp)(TwitchContent);
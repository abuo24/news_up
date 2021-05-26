import {Component} from "react"
import './App.css';
import {Layout} from "./hoc";
import { Route, Switch} from 'react-router-dom'
import React from "react";
import {
    About,
    AllVideos,
    BlogDetail,
    Contact,
    Home,
    News,
    NewsHead,
    ShortNewsHead,
    ShortNewsPage
} from "./pages";
import {allPosts, counts, getHeadPosts, getPopularPosts, getPopularPostsByDate} from "./redux/actions/postApi";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCategories} from "./redux/actions/categoryApi";
import 'react-toastify/dist/ReactToastify.css';
import {allVideoPosts, allVideos} from "./redux/actions/videoPostApi";
import {allShortPosts, getHeadShortPosts} from "./redux/actions/shortPostApi";


class App extends Component {


    state = {
        isRequest: true,
        posts: {},
        lang: localStorage.getItem("lang")
    };

    componentDidMount() {
        this.props.getCategories();
        this.props.allPosts();
        this.props.allVideoPosts()
        this.props.allVideos()
        this.props.getHeadPosts()
        this.props.getHeadShortPosts()
        this.props.counts()
        this.setState({...this.state, lang: this.props.langReducer.type});
        this.props.getPopularPostsByDate();
        this.props.getPopularPosts().then(res => this.setState({...this.state,isRequest: false}), err => console.log(err));
    }
    componentDidUpdate() {
        if (this.props.langReducer.type!==this.state.lang){
            this.setState({...this.state,lang:this.props.langReducer.type})
        }
    }

    render() {
        if (this.state.isRequest) {
            return (
                <div id="preloader"/>
            )
        } else {
            return (
                <>
                    <Switch>
                        <Layout>
                            <Route path='/' exact component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/contact' component={Contact}/>
                            <Route exact path='/blog/:id' component={BlogDetail}/>
                            <Route exact path='/news' component={NewsHead}/>
                            <Route exact path='/news/:id' component={News}/>
                            <Route exact path='/videos' component={AllVideos}/>
                            <Route exact path='/shortnews' component={ShortNewsHead}/>
                            <Route exact path='/shortnews/:id' component={ShortNewsPage}/>
                        </Layout>
                    </Switch>
                </>
            )
        }
    }
}

const mstp = state => (state);

const mdtp = dispatch => (bindActionCreators({getHeadShortPosts,getHeadPosts,allPosts,allVideos, getPopularPosts,allShortPosts, getCategories,allVideoPosts,counts,getPopularPostsByDate}, dispatch));

export default connect(mstp, mdtp)(App);

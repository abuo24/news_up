import {Component, Suspense} from "react"
import './App.css';
import {Layout} from "./hoc";
import { Route, Switch} from 'react-router-dom'
import React from "react";
import {About, Blog, BlogDetail, Contact, Home, News, NewsHead, NotFound} from "./pages";
import {allPosts, getPopularPosts} from "./redux/actions/postApi";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCategories} from "./redux/actions/categoryApi";


class App extends Component {


    state = {
        posts: {},
    };

    componentDidMount()  {
        this.props.getCategories();
        this.props.allPosts();
        this.props.getPopularPosts();
    }

    render() {
        return (
            <>
                <Suspense fallback={<h1>Loading profile...</h1>}>
                    <Switch>
                        <Layout>
                            <Route path='/' exact component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/contact' component={Contact}/>
                            <Route exact path='/blog' component={Blog}/>
                            <Route exact path='/blog/:id' component={BlogDetail}/>
                            <Route exact path='/news' component={NewsHead}/>
                            <Route exact path='/news/:id' component={News}/>
                        </Layout>
                    </Switch>
                </Suspense>
            </>
        )
    }
}

const mstp = state => (state);

const mdtp = dispatch => (bindActionCreators({allPosts, getPopularPosts,getCategories}, dispatch));

export default connect(mstp, mdtp)(App);

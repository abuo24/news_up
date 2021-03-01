import React from 'react'
import {Footer, Header} from "../pages";

const Layout = (props) => {
    return (<>
            {/*<div id="preloader"></div>*/}
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;
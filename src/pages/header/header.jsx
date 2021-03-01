import React, {Component} from 'react'
import HeaderTop from "./headerContent/headerTop";
import HeaderMiddle from "./headerContent/headerMiddle";
import HeaderBottom from "./headerContent/headerBottom";

class Header extends Component {

    render() {
        return (
            <header>
                <HeaderTop/>
                <HeaderMiddle/>
                <HeaderBottom/>
            </header>
        );
    }
}

export default Header;
import React, {Component} from 'react'
import svg_logo from './svg/PyLogo'
import svg_menu_icon from './svg/hamburger'

class Header extends Component {
    constructor(props) {
        super(props);
        this.texts = [
    ['from __future__ import braces', '>>> SyntaxError: not a chance'],
    ['Beautiful is better than ugly.', 'Explicit is better than implicit.'],
];
    }
        render() {

    const SelectText = () => {
    const index = Math.floor(Math.random()*this.texts.length);
    return <p>{this.texts[index][0]}<br/>{this.texts[index][1]}</p>
};
        return (

<header id="Header">
    <div className="container-fluid">
        <div className="row">
            <div id="python-logo" className="col-1">
                <img alt="Not found"  src={svg_logo}/>
            </div>
            <div id="splash-text" className="col-4">
                <SelectText/>
            </div>
            <div id="header-items" className="col">
                <a>About</a>
                <a>Community</a>
                <a>Forum</a>
                <a>Login</a>
                <img id="menu-icon" alt="Not found"  src={svg_menu_icon}/>
            </div>
        </div>
    </div>
</header>

        );
    }
}

export default Header;

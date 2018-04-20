import React, {Component} from 'react';
import routes from '../../../files/routes';
import './header.css';

const VIEWS = Object.keys(routes);

class Header extends Component {

    constructor(props) {
        super(props);
        this._open = false;
    }

    openNav() {
        this._open=true;
        document.getElementById("content").className = "noclick";
        document.getElementById("cover").className = "black-cover";
        document.getElementById("sidenav").style.left = "0";
    }

    closeNav() {
        this._open=false;
        document.getElementById("content").className = "";
        document.getElementById("cover").className = "";
        document.getElementById("sidenav").style.left = "-70vw";
    }

    render() {
        return (
            <header>
                <div className="row">
                    <a className="sidedrawer-icon" onClick={() => this.openNav()}>☰</a>
                    <a href={routes["00_home"].path}>Fempire</a>
                </div>
                <div className="top-menu">
                    <ul>
                        {VIEWS.map((route, index) => (
                            <li key={index}>
                                <a href={routes[route].path}>{routes[route].title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="cover" onClick={() => this.closeNav()}/>
                <div id="sidenav" className="sidenav">
                    <ul>
                        {VIEWS.map((route, index) => (
                            <li key={index}>
                                <a href={routes[route].path}>{routes[route].title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;

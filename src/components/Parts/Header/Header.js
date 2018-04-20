import React, { Component } from 'react';
import routes from '../../../files/routes';
import './header.css';

const VIEWS = Object.keys(routes);

class Header extends Component {
  render() {
    return (
        <header>
            <div><a href={routes["00_home"].path}>Fempire</a></div>
            <div>
                <ul>
                    {VIEWS.map((route, index)=> (
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

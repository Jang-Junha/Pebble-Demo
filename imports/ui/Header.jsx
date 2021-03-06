import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="nav-extended">
                <div className="nav-wrapper grey darken-3">
                    <a href="/" className="brand-logo left">
                        &nbsp;Pebble&nbsp;
                    </a>
                    
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/stream">Stream</Link></li>
                        <li><Link to="/stulist">Student List</Link></li>
                        <li><Link to="/vote">Vote</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
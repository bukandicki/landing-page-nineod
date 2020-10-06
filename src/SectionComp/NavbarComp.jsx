import React, { Component } from 'react';
import '../css/master.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-wrapper">
                    <ul>
                        <li className="nav-item">
                            <a href="#" className="nav-link">home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">about</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">new technologies</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;

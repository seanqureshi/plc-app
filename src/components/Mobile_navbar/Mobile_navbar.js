import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PLCheart from './img/PLC-heart.png';
import Donate from './img/Donate-btn.png';
import Menu from './img/Menu.png';
import './Mobile_navbar.css';

export default class MobileNav extends Component {
    render() {
        return (
            <header className = "top_container">
                <Link to='/mobile'>
                     <img src= { PLCheart } alt="PLC Heart" width="50px"></img>
                </Link>
                <div className="donate_container">
                    <Link to='/donate/new/72'>
                    <img src = { Donate } alt="Donate Button" width="150px" />
                    </Link>                    
                    <img src = { Menu } alt="Menu Button" width="50px" />
                </div>
            </header>
        );
    }
}


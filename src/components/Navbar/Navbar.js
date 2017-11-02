import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from './img/PLC-logo.png'
import facebook from './img/Facebook.png';
import twitter from './img/Twitter.png';
import instagram from './img/Instagram.png';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <header className="main_header">
                <Link to='/'>
                    <img className="logo_container" src={logo} alt="Main Logo" width="200px"></img>
                </Link>
                <nav className="social_media">
                    <a href='http://wwww.facebook.com/preemptivelove'>
                        <img src={facebook} alt="Facebook PLC Icon" width="60px"></img></a>
                    <a href='http://www.twitter.com/preemptivelove'>
                        <img src={twitter} alt="Twitter PLC Icon" width="60px"></img></a>
                    <a href='http://www.instagram.com/preemptivelove'>
                        <img src={instagram} alt="Facebook PLC Icon" width="60px"></img></a>
                </nav>
            </header>
        );
    }
}



import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo_white from './img/PLC-logo-white.png';
import facebook_white from './img/Facebook-white.png';
import twitter_white from './img/Twitter-white.png';
import instagram_white from './img/Instagram-white.png';
import '../Navbar/Navbar.css';

export default class NavWhite extends Component {
    render() {
        return (
            <header className="main_header">
                <Link to='/'>
                    <img className="logo_container" src={logo_white} alt="Main Logo" width="200px"></img>
                </Link>
                <nav className="social_media">
                    <a href='http://wwww.facebook.com/preemptivelove'>
                        <img src={facebook_white} alt="Facebook PLC Icon" width="60px"></img></a>
                    <a href='http://www.twitter.com/preemptivelove'>
                        <img src={twitter_white} alt="Twitter PLC Icon" width="60px"></img></a>
                    <a href='http://www.instagram.com/preemptivelove'>
                        <img src={instagram_white} alt="Facebook PLC Icon" width="60px"></img></a>
                </nav>
            </header>
        );
    }
}

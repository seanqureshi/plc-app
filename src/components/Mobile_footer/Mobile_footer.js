import React, { Component } from 'react';
import Facebook from '../Navbar/img/Facebook.png'
import Twitter from '../Navbar/img/Twitter.png';
import Instagram from '../Navbar/img/Instagram.png';
import Cart from './img/Shop-icon.png';
import './Mobile_footer.css';

export default class MobileFooter extends Component {
    render() {
        return (
            <nav className = "social_footer">
                <a href='http://wwww.facebook.com/preemptivelove'>
                <img src= { Facebook } alt="Facebook PLC Icon" width="30px"></img></a>
                <a href='http://www.twitter.com/preemptivelove'>
                <img src= { Twitter } alt="Twitter PLC Icon" width="30px"></img></a>
                <a href='http://www.instagram.com/preemptivelove'>
                <img src= { Instagram } alt="Facebook PLC Icon" width="30px"></img></a>
                <a href='https://preemptivelove.shop/'>
                <img src= { Cart } alt="Shop Cart Icon" width="30px"></img></a>
            </nav>
        );
    }
}
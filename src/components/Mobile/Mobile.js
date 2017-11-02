import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner1 from './img/Mobile1.png';
import Banner2 from './img/Mobile2.png';
import Banner3 from './img/Mobile3.png';
import Banner4 from './img/Mobile4.png';

import MobileNav from '../Mobile_navbar/Mobile_navbar';
import FooterMobile from '../Mobile_footer/Mobile_footer';
import './Mobile.css';

export default class Mobile extends Component {
    render() {
        return (
            <section className="wrap">
                <header className = "mobile_nav">
                    <MobileNav />
                </header>
                <main>
                    <Link to='/about'>
                    <div className = "mobile_home">
                        <img src= { Banner1 } alt="banner buttons" width="375px" />
                    </div>
                    </Link>
                    <Link to='/explore'>
                    <div className = "mobile_home">
                        <img src= { Banner2 } alt="banner buttons" width="375px" />
                    </div>
                    </Link>
                    <Link to='/campaign'>
                    <div className = "mobile_home">
                        <img src= { Banner3 } alt="banner buttons" width="375px" />
                    </div>
                    </Link>
                    <Link to='/share'>
                    <div className = "mobile_home">
                        <img src= { Banner4 } alt="banner buttons" width="375px" />
                    </div>
                    </Link>
                </main>
                <footer className = "footer_mobile">
                    <FooterMobile />
                </footer>
            </section>
        )
    }
}
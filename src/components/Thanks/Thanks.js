import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileNav from '../Mobile_navbar/Mobile_navbar';
import Heart from './img/stripe-heart.jpg';


import './Thanks.css';

export default class Share extends Component {
    render() {
        return (
            <main className="wrap">
                <div className="share-container">
                    <MobileNav />
                    <center><section className="main_container">
                        <img className="heart-icon" src={Heart} alt="Preemptive Love Coalition Heart" />
                        <h1 className="ty-title">Thank You!</h1>
                        <h2 className="sub-title">For waging peace with us.</h2>
                        <div className="social-btns"></div>
                        <p className="share-text">Spread the word or shop our store!</p>
                            <div className="btn-container">
                                <Link to="/share">
                                    <div className="share-btn">SHARE</div>
                                </Link>
                                <a href="https://preemptivelove.shop/">
                                    <div className="share-btn">SHOP</div>
                                </a>
                            </div>
                    </section></center>
                </div>
            </main>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileNav from '../Mobile_navbar/Mobile_navbar';
import Friends from './img/Friends.png';
import Conversation from './img/Conversation-icon.png';
import Facebook from './img/sm-facebook.png';
import Twitter from './img/sm-twitter.png';
import Instagram from './img/sm-instagram.png';

import './Share.css';

export default class Share extends Component {
    render() {
        return (
            <main className="wrap">
                <center><div className="share-container">
                    <MobileNav />
                    <section className="main_container">
                        <img src={Friends} alt="Share the Word with Friends" width="100%" />
                        <h1 className="title">SPREAD THE WORD!</h1>
                        <center><div className="box"></div></center>
                        <center><div className="social">
                            <a href='http://wwww.facebook.com/preemptivelove'>
                                <img className="social_box" src={Facebook} alt="Facebook Icon" width="100px" /></a>
                            <a href='http://www.twitter.com/preemptivelove'>
                                <img className="social_box" src={Twitter} alt="Twitter Icon" width="100px" /></a>
                            <a href='http://www.instagram.com/preemptivelove'><img className="social_box" src={Instagram} alt="Instagram Icon" width="100px" /></a>
                        </div></center>
                        <h1 className="title">INCREASE IMPACT!</h1>
                        <center><div className="box"></div></center>
                        <center><img className="convo" src={Conversation} alt="Conversation Icon" width="150px" /></center>
                        <div className="text-container">
                            <p className="share_text">Help complete this campaign by sharing these needs with your network or step onto the frontlines and create your own campaign. Give a refugee-made gift or wear your love through a purchase on our store.</p>
                            <div className="btn_container">
                                <Link to="/campaign">
                                    <div className="share_btn">CAMPAIGN</div>
                                </Link>
                                <a href="https://preemptivelove.shop/">
                                    <div className="share_btn">SHOP</div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div></center>
            </main>
        )
    }
}
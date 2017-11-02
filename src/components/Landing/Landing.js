import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import NavWhite from '../Nav_white/Nav_white';
import Footer from '../Footer/Footer';
import animated from 'animate.css';
import WOW from 'wowjs';

import phone from './img/iPhone.png';
import dot from './img/Blue-dot.png';
import circle from './img/Circle.png';
import dot_white from './img/White-dot.png';
import circle_white from './img/Circle-white.png';
import heart from './img/Heart-icon.png';
import relief from './img/Relief-icon.png';
import arrow from './img/Arrow.png';
import arrow_white from './img/Arrow-white.png';
import line from './img/Heart-line.png';
import './Landing.css';

// import highlight from './movie/Highlightreel.mp4';
// import herovid from './movie/video-hero.mp4';


export default class Landing extends Component {
    componentDidMount() {
        new WOW.WOW().init();
      }
    render() {
        return (
            <section className="Landing">
                <div className="first-bg" id="first">
                    <Navbar />
                    <center><div className="phone-panel">
                        <div width="25px"></div>
                        <h1 className="build fade animated fadeInLeft">BUILD A CAMPAIGN</h1>
                        <img src={phone} alt="iPhone" width="290px"></img>
                        <h1 className="build fade animated fadeInRight">AND REBUILD LIVES</h1>
                        <div className="circle_nav">
                            <a href="#first"><img src={dot} alt="nav1" width="25px"></img></a>
                            <a href="#second"><img src={circle} alt="nav2" width="25px"></img></a>
                            <a href="#third"><img src={circle} alt="nav3" width="25px"></img></a>
                            <a href="#fourth"><img src={circle} alt="nav4" width="25px"></img></a>
                            <a href="#fifth"><img src={circle} alt="nav5" width="25px"></img></a>
                        </div>
                    </div></center>
                    <Footer />
                </div>
                <div className="second-bg" id="second">
                    <NavWhite />
                    <div className="phone-panel">
                        <div width="25px"></div>
                        <center><div className="relief_container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src={relief} alt="Food, Water, Medical Relief Icon" width="120px"></img>
                            <h1 className="relief">RELIEF</h1>
                            <div className="box_line"></div>
                            <p className="body_text">We go where others don’t. We provide emergency food, water, and medical care on the frontlines of conflict in Syria and Iraq.</p>
                            <div className="learn">LEARN MORE</div>
                        </div></center>

                        <center><img src={phone} alt="iPhone" width="290px"></img>
                            <a href="#third">
                                <div className="arrow"><img src={arrow_white} alt="next" width="75px">
                                </img></div></a></center>

                        <center><div className="relief_container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src={heart} alt="Empowerment Icon" width="120px"></img>
                            <h1 className="relief">JOB CREATION</h1>
                            <div className="box_line"></div>
                            <p className="body_text">Refugees should be able to do more than survive. They should flourish. We help displaced women and men reclaim their future.</p>
                            <div className="learn">LEARN MORE</div>
                        </div></center>

                        <div className="circle_nav">
                            <a href="#first"><img src={circle_white} alt="nav1" width="25px"></img></a>
                            <a href="#second"><img src={dot_white} alt="nav2" width="25px"></img></a>
                            <a href="#third"><img src={circle_white} alt="nav3" width="25px"></img></a>
                            <a href="#fourth"><img src={circle_white} alt="nav4" width="25px"></img></a>
                            <a href="#fifth"><img src={circle_white} alt="nav5" width="25px"></img></a>
                        </div>
                    </div>
                </div>
                <div className="third-bg" id="third">
                    <Navbar />
                    <div className="phone-panel">
                        <div width="25px"></div>
                        <div className="empty"></div>
                        <center><img src={phone} alt="iPhone" width="290px"></img>
                            <a href="#fourth">
                                <div className="arrow"><img src={arrow_white} alt="next" width="75px">
                                </img></div></a></center>
                        <div className="empty"></div>
                        <div className="circle_nav">
                            <a href="#first"><img src={circle} alt="nav1" width="25px"></img></a>
                            <a href="#second"><img src={circle} alt="nav2" width="25px"></img></a>
                            <a href="#third"><img src={dot} alt="nav3" width="25px"></img></a>
                            <a href="#fourth"><img src={circle} alt="nav4" width="25px"></img></a>
                            <a href="#fifth"><img src={circle} alt="nav5" width="25px"></img></a>
                        </div>
                    </div>
                </div>
                <div className="fourth-bg" id="fourth">
                    <Navbar />
                    <div className="phone-panel">
                        <div width="25px"></div>
                        <center><div className="relief_container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                            <h1 className="header4">GET INVOLVED</h1>
                            <p className="body_text2">Love the people no one else will through a creative fundraiser. Not sure where to start? Explore ideas below.</p>
                            <img src={line} alt="Heart line icon" width="200px"></img>
                            <div className="learn2">FIND INSPIRATION</div>
                        </div></center>

                        <center><img src={phone} alt="iPhone" width="290px"></img>

                            <a href="#fifth">
                                <div className="arrow"><img src={arrow} alt="next" width="75px">
                                </img></div></a></center>

                        <center><div className="relief_container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                            <h1 className="header4">MAKE A DIFFERENCE</h1>
                            <p className="body_text2">Empower refugees and help families caught in the fight against ISIS. Help rebuild lives from the ashes of war.</p>
                            <img src={line} alt="Heart line icon" width="200px"></img>
                            <div className="learn2">START A FUNDRAISER</div>
                        </div></center>

                        <div className="circle_nav">
                            <a href="#first"><img src={circle} alt="nav1" width="25px"></img></a>
                            <a href="#second"><img src={circle} alt="nav2" width="25px"></img></a>
                            <a href="#third"><img src={circle} alt="nav3" width="25px"></img></a>
                            <a href="#fourth"><img src={dot} alt="nav4" width="25px"></img></a>
                            <a href="#fifth"><img src={circle} alt="nav5" width="25px"></img></a>
                        </div>
                    </div>
                </div>
                <div className="fifth-bg" id="fifth">
                    <NavWhite />
                    <div className="phone-panel">
                        <div width="25px"></div>
                        <div className="btn_start">START CAMPAIGN</div>
                        <img className="phone-last" src={phone} alt="iPhone" width="290px"></img>
                        <div className="idea"></div>
                        <div className="circle_nav">
                            <a href="#first"><img src={circle_white} alt="nav1" width="25px"></img></a>
                            <a href="#second"><img src={circle_white} alt="nav2" width="25px"></img></a>
                            <a href="#third"><img src={circle_white} alt="nav3" width="25px"></img></a>
                            <a href="#fourth"><img src={circle_white} alt="nav4" width="25px"></img></a>
                            <a href="#fifth"><img src={dot_white} alt="nav5" width="25px"></img></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import CampaignCard from '../Campaign_card/Campaign_card';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import MobileFooter from '../Mobile_footer/Mobile_footer';
import Explore1 from './img/Explore1.png';
import Explore2 from './img/Explore2.png';
import Explore3 from './img/Explore3.png';
import Explore4 from './img/Explore4.png';

import './Explore.css';



export default class Explore extends Component {
    render() {
        return (
            <div className="wrap">
                <center><section className="explore-container">
                    <MobileNav />
                    <div className="explore-box">
                        <Carousel decorators={false}>
                            <div><CampaignCard img={Explore1} path="/new/70" /></div>
                            <div><CampaignCard img={Explore2} path="/new/71" /></div>
                            <div><CampaignCard img={Explore3} path="/new/72" /></div>
                            <div><CampaignCard img={Explore4} path="/new/73" /></div>
                        </Carousel>
                        <MobileFooter />
                    </div>
                </section></center>
            </div>
        )
    }
}
import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

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
            <section className = "main_container">
                <MobileNav />
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                    <div><CampaignCard img={ Explore1 } path="/idea1" /></div>
                    <div><CampaignCard img={ Explore2 } path="/idea2" /></div>
                    <div><CampaignCard img={ Explore3 } path="/idea3" /></div>
                    <div><CampaignCard img={ Explore4 } path="/idea4" /></div>
                </ReactSwipe>                
                <MobileFooter />
            </section>
        )
    }
}
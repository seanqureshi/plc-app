import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Wedding from './img/Wedding.png';
import Man from './img/Man1.png';
import Banner from './img/PLC-banner.svg';
import Facebook from '../Share/img/sm-facebook.png';
import Twitter from '../Share/img/sm-twitter.png';
import Instagram from '../Share/img/sm-instagram.png';

import MobileNav from '../Mobile_navbar/Mobile_navbar';
import './Idea.css';
import { Tabs, Tab } from 'material-ui/Tabs';
// import SwipeableViews from 'react-swipeable-views';

// import Tabs from '../comps/Tabs.js'
// import Pane from '../Pane/Pane';


// import Meter from 'grommet/components/Meter';

const styles = {
    contentContainerStyle: {
        padding: '10px'
    },
    tabItemContainer: {
        background: '#7ea2bd'
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    InkBar: {
        backgroundColor: 'none'
    }
    
};

export default class Idea1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <main className="wrap">
                <center><section className="idea-container">
                    <MobileNav />
                    <img className="img-container" src={Wedding} alt="Campaign Banner" />
                    <div className="campaign_name">
                        <img className="profile" src={Man} alt="Profile" width="65px" />
                        <h1 className="header_title">#ToHaveAndToHolten</h1>
                        <h3 className="header_subtitle">Wedding Gifts for Life</h3>
                    </div>

                    {/* <Box>
                        <Value value={40}
                            units='GB'
                            align='start' />
                        <Meter value={40}
                            onActive={...} />
                        <Box direction='row'
                            justify='between'
                            pad={{"between": "small"}}
                            responsive={false}>
                            <Label size='small'>
                            0 GB
                            </Label>
                            <Label size='small'>
                            100 GB
                            </Label>
                        </Box>
                    </Box> */}

                    <div className="camp-tabs">
                        <Tabs 
                            style={styles.contentContainerStyle}
                            InkBar={false}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <Tab label="Overview" value={0}>
                                <div>
                                    <h2 style={styles.headline}>Overview</h2>
                                    <p>This is my story of my campaign!</p>
                                </div>
                            </Tab>
                            <Tab label="Comments" value={1}>
                                <div>
                                    <h2 style={styles.headline}>Comments</h2>
                                    <p>You rock!</p>
                                </div>
                            </Tab>
                            <Tab label="Backers" value={2}>
                                <div>
                                    <h2 style={styles.headline}>Comments</h2>
                                    <p>Chris gave $2000</p>
                                    <p>Huy gave $20</p>
                                    <p>Mason gave $200</p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>



                    <Link to="/donate">
                        <center><div className="donate_btn">DONATE</div></center>
                    </Link>

                    <div className="about">
                        <img className="about-pic" src={Banner} alt="PLC Banner" />
                        <h1 className="title">PREEMPTIVE LOVE</h1>
                        <center><div className="box"></div></center>
                        <div className="para-container">
                            <p className="paragraph-box">Violence unmakes the world. Preemptive love unmakes violence. You can go where others won’t and love the people no one else will.</p>
                            <p className="paragraph-box">We are a global, humanitarian organization that brings emergency relief (food, water, and medical care) to war-torn familes in the Middle East. We believe in dignity over dependence so we focus on helping refugees do more than survive by giving a hand-up instead of a hand-out so people can flourish. We create jobs and help displaced women and men reclaim their future. We couldn’t do this without your support. You can rebuild lives today.</p>
                        </div>
                        <h1 className="title">FOLLOW US ONLINE</h1>
                        <center><div className="box"></div></center>
                        <center><div className="social">
                            <a href='http://wwww.facebook.com/preemptivelove'>
                                <img className="social_box" src={Facebook} alt="Facebook Icon" width="90px" /></a>
                            <a href='http://www.twitter.com/preemptivelove'>
                                <img className="social_box" src={Twitter} alt="Twitter Icon" width="90px" /></a>
                            <a href='http://www.instagram.com/preemptivelove'><img className="social_box" src={Instagram} alt="Instagram Icon" width="90px" /></a>
                        </div></center>
                        <center><h1 className="website">preemptivelove.org</h1>
                            <p className="sub_text">Preemptive Love Coalition is a trusted 501(c)(3) non-profit</p>
                            <p className="sub_text">EIN no. 26-2450109</p>
                            <p className="sub_text">© 2007 - 2017</p></center>
                    </div>
                </section></center>
            </main>
        )
    }
}

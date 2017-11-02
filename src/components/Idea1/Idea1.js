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

// import Tabs from '../comps/Tabs.js'
// import Pane from '../Pane/Pane';


// import Meter from 'grommet/components/Meter';

// const Tabs = React.createClass({
//     displayName: 'Tabs',
//     propTypes: {
//       selected: React.PropTypes.number,
//       children: React.PropTypes.oneOfType([
//         React.PropTypes.array,
//         React.PropTypes.element
//       ]).isRequired
//     },
//     getDefaultProps() {
//       return {
//         selected: 0
//       };
//     },
//     getInitialState() {
//       return {
//         selected: this.props.selected
//       };
//     },
//     handleClick(index, event) {
//       event.preventDefault();
//       this.setState({
//         selected: index
//       });
//     },
//     _renderTitles() {
//       function labels(child, index) {
//         let activeClass = (this.state.selected === index ? 'active' : '');
//         return (
//           <li key={index}>
//             <a href="#" 
//               className={activeClass}
//               onClick={this.handleClick.bind(this, index)}>
//               {child.props.label}
//             </a>
//           </li>
//         );
//       }
//       return (
//         <ul className="tabs__labels">
//           {this.props.children.map(labels.bind(this))}
//         </ul>
//       );
//     },
//     _renderContent() {
//       return (
//         <div className="tabs__content">
//           {this.props.children[this.state.selected]}
//         </div>
//       );
//     },
//     render() {
//       return (
//         <div className="tabs">
//           {this._renderTitles()}
//           {this._renderContent()}
//         </div>
//       );
//     }
//   });



export default class Idea1 extends Component {
    render() {
        return (
            <section>
                <header> <MobileNav /> </header>
                    <img className="cover_container" src={ Wedding } alt="Campaign Banner" width="100%"/>
                    <div className="campaign_name">
                        <img className="profile" src={ Man } alt="Profile" width="65px" />
                        <h1 className="header_title">#ToHaveAndToHolten</h1>
                        <h3 className="header_title">Wedding Gifts for Life</h3>
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

                
{/* 
                    <div className = "tab_container">
                    <Tabs className="tab_nav" selected={0}>
                        <Pane className="panel_box" label="Overview">
                        <div>This is my tab 1 contents!</div>
                        </Pane>
                        <Pane className="panel_box" label="Comments">
                        <div>This is my tab 2 contents!</div>
                        </Pane>
                        <Pane className="panel_box" label="Backers">
                        <div>This is my tab 3 contents!</div>
                        </Pane>
                    </Tabs>
                    </div> */}

                    <Link to ="/donate">
                    <center><div className ="donate_btn">DONATE</div></center>
                    </Link>

                    <div className = "about">
                        <img src= { Banner } alt="PLC Banner" width="100%" />
                        
                        <h1 className = "title">PREEMPTIVE LOVE</h1>
                        <center><div className="box" width="375px"></div></center>
                        <p className = "text_box">Violence unmakes the world. Preemptive love unmakes violence. You can go where others won’t and love the people no one else will.</p>
                        <p className = "text_box">We are a global, humanitarian organization that brings emergency relief (food, water, and medical care) to war-torn familes in the Middle East. We believe in dignity over dependence so we focus on helping refugees do more than survive by giving a hand-up instead of a hand-out so people can flourish. We create jobs and help displaced women and men reclaim their future. We couldn’t do this without your support. You can rebuild lives today.</p>
                        <h1 className = "title">FOLLOW US ONLINE</h1>
                        <center><div className="box"></div></center>
                        <center><div className="social">
                            <a href='http://wwww.facebook.com/preemptivelove'>
                            <img className = "social_box" src= { Facebook } alt="Facebook Icon" width="90px" /></a>
                            <a href='http://www.twitter.com/preemptivelove'>
                            <img className = "social_box" src= { Twitter } alt="Twitter Icon" width="90px" /></a>
                            <a href='http://www.instagram.com/preemptivelove'><img className = "social_box" src= { Instagram } alt="Instagram Icon" width="90px" /></a>
                        </div></center>
                        <center><h1 className="website">preemptivelove.org</h1>
                        <p className="sub_text">Preemptive Love Coalition is a trusted 501(c)(3) non-profit</p>
                        <p className="sub_text">EIN no. 26-2450109</p>
                        <p className="sub_text">© 2007 - 2017</p></center>
                    </div>
            </section>
        )
    }
}
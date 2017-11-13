// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getUserInfo } from '../../ducks/users';
// import axios from 'axios';
// import Banner from '../Idea1/img/PLC-banner.svg';
// import Facebook from '../Share/img/sm-facebook.png';
// import Twitter from '../Share/img/sm-twitter.png';
// import Instagram from '../Share/img/sm-instagram.png';
// import MobileNav from '../Mobile_navbar/Mobile_navbar';
// import { Tabs, Tab } from 'material-ui/Tabs';
// import { Line } from 'rc-progress';
// import '../Idea/Idea.css'

// import Wedding from './img/Wedding.png';
// import Man from './img/Man1.png';

// const styles = {
//     contentContainerStyle: {
//         padding: '10px'
//     },
//     tabItemContainer: {
//         border: '1px solid #e5e5e5',
//         padding: '10px'
//     },
//     headline: {
//         fontSize: 24,
//         paddingTop: 6,
//         marginBottom: 12,
//         fontWeight: 400,
//     },
// };

// export default class Idea1 extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 0,
//             campaign: [],
//             total: 0,
//             donorinfo: [],
//             percent: 0,
//         }
//         this.handleChange = this.handleChange.bind(this);
//     };


//     componentDidMount = () => {
//         axios.get(`/api/donate/${this.props.match.params.id}`)
//             .then((response) => {
//                 this.setState({
//                     donate: response.data[0]
//                 })
//             })
//         axios.get(`/api/campaign/${this.props.match.params.id}`)
//             .then((response) => {
//                 this.setState({
//                     campaign: response.data[0]
//                 })
//             })
//         axios.get(`/api/donation/${this.props.match.params.id}`)
//             .then((response) => {
//                 this.setState({
//                     donorinfo: response.data[0],
//                 })
//                 // console.log(response.data)
//                 // console.log(+Object.values(response.data[0])/100)
//             }).then(response => {
//                 let totalDonation = this.state.campaign.desired_amt;
//                 let initialDonation = this.state.donorinfo ? (this.state.donorinfo.donation_amt / 100) : null;
//                 let calcDonation = ((initialDonation / totalDonation) * 100);
//                 this.setState({
//                     percent: calcDonation
//                 });
//                 // console.log(`totalDonation: ${totalDonation}`)
//                 // console.log(`initialDonation: ${initialDonation}`)
//                 // console.log(`calcDonation: ${calcDonation}`)
//             }).then(response => {
//                 this.props.getUserInfo();
//             });
//     };


//     handleChange = (value) => {
//         this.setState({
//             value: value,
//         });
//     };


//     render() {
//         const user = this.props.user   
//         return (
//             <main className="wrap">
//                 <center><section className="idea-container">
//                     <MobileNav />
//                     <img className="img-container" src={Wedding} alt="Campaign Banner" width="375px" />
//                     <div className="campaign_name">
//                         <img className="profile" src={Man} alt="Profile" width="65px" />
//                         <h1 className="camp-title">#ToHaveAndToHolden Wedding Gifts For Life</h1>
//                     </div>
//                     <div className="donation-stats">
//                         <div className="tracking-headers">
//                             <h3 className>RECEIVED</h3>
//                             <h3 className>GOAL</h3>
//                         </div>
//                         <div className="tracking-amt">
//                             <h2>${this.state.donorinfo ? this.state.donorinfo.donation_amt / 100 : 0}</h2>
//                             <h2>${this.state.campaign.desired_amt}</h2>
//                         </div>
//                     </div>
//                     <div className="tracking-bar">
//                         <Line strokeWidth="2" percent={this.state.percent} strokeColor="#e6233d" />
//                     </div>
//                     <div className="camp-tabs">
//                         <Tabs
//                             inkBarStyle={{ background: 'none' }}
//                             style={styles.contentContainerStyle && styles.tabItemContainer}
//                             value={this.state.value}
//                             onChange={this.handleChange}
//                         >
//                             <Tab label="Overview" value={0}>
//                                 <div>
//                                     <h2 className="pad-tab" style={styles.headline}>Overview</h2>
//                                     <p className="pad-tab">{this.state.campaign.overview}</p>
//                                 </div>
//                             </Tab>
//                             <Tab label="Comments" value={1}>
//                                 <div>
//                                     <h2 className="pad-tab" style={styles.headline}>Comments</h2>
//                                     <p className="pad-tab">{this.state.donorinfo ? this.state.donorinfo.comments : "No comments yet"}</p>
//                                 </div>
//                             </Tab>
//                             <Tab label="Backers" value={2}>
//                                 <div>
//                                     <h2 className="pad-tab" style={styles.headline}>Backers</h2>
//                                     <p className="pad-tab"> {user && this.state.donorinfo ? `${user.username} gave $${this.state.donorinfo.donation_amt / 100}`  : `No backers yet`}</p>
//                                 </div>
//                             </Tab>
//                         </Tabs>
//                     </div>


//                     <Link to={`/donate/${this.props.match.params.id}`}>
//                         <center><div className="donate_btn">DONATE</div></center>
//                     </Link>

//                     <div className="about">
//                         <img className="about-pic" src={Banner} alt="PLC Banner" />
//                         <h1 className="title">PREEMPTIVE LOVE</h1>
//                         <center><div className="box"></div></center>
//                         <div className="para-container">
//                             <p className="paragraph-box">Violence unmakes the world. Preemptive love unmakes violence. You can go where others won’t and love the people no one else will.</p>
//                             <p className="paragraph-box">We are a global, humanitarian organization that brings emergency relief (food, water, and medical care) to war-torn familes in the Middle East. We believe in dignity over dependence so we focus on helping refugees do more than survive by giving a hand-up instead of a hand-out so people can flourish. We create jobs and help displaced women and men reclaim their future. We couldn’t do this without your support. You can rebuild lives today.</p>
//                         </div>
//                         <h1 className="title">FOLLOW US ONLINE</h1>
//                         <center><div className="box"></div></center>
//                         <center><div className="social">
//                             <a href='http://wwww.facebook.com/preemptivelove'>
//                                 <img className="social_box" src={Facebook} alt="Facebook Icon" width="90px" /></a>
//                             <a href='http://www.twitter.com/preemptivelove'>
//                                 <img className="social_box" src={Twitter} alt="Twitter Icon" width="90px" /></a>
//                             <a href='http://www.instagram.com/preemptivelove'><img className="social_box" src={Instagram} alt="Instagram Icon" width="90px" /></a>
//                         </div></center>
//                         <center><h1 className="website">preemptivelove.org</h1>
//                             <p className="sub_text">Preemptive Love Coalition is a trusted 501(c)(3) non-profit</p>
//                             <p className="sub_text">EIN no. 26-2450109</p>
//                             <p className="sub_text">© 2007 - 2017</p></center>
//                     </div>
//                 </section></center>
//             </main >
//         )
//     }
// }


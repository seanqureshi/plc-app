import React, { Component } from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import Banner from './img/loveanyways.png';
import Insert from './img/insert-img.png';
import './Campaign.css';

import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';


class Campaign extends Component {

    componentDidMount(){
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user
        return (
            <section>
                <header><MobileNav /></header>
                <img className="profile-cover" alt="Profile Banner"src={Banner} />
                <img className="profile-headshot" alt="Login to see your social media profile pic" src={user.profile_img} />
                <div className="display-name">{ user ? user.username: null }</div>
                <form className="form-box">
                    <div className="input_name">Campaign Name</div>
                    <textarea className="input_campaign" type="text" placeholder="Ex. Kinzie's 5th Birthday! Giving to Those Without." />
                    <div className="input_name">Fundraiser Amount</div>
                    <input className="input_field" type="text" placeholder="Ex. $500" />
                    <div className="input_name">Upload Cover Image</div>
                    <img className="insert-image" alt="Add Cover Here" src={Insert}/>
                    <div className="input_name">Summary of Campaign</div>
                    <textarea className="input_overview" type="text" placeholder="Share your story and how it intersected with Preemptive Love Coalition. Share how your friends can get involved in saving and rebuilding lives!" />
                    <center><input className="submit_btn" type="submit" name="submit" value="CREATE" /></center>
                </form>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Campaign)

// this.state = {
//     username: '',
//     profile_img: '',

//     camp_name: '',
//     desired_amt: '',
//     overview: '',
//     cover_img: ''
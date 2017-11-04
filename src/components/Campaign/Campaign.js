import React, { Component } from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import Banner from './img/loveanyways.png';
import Insert from './img/insert-img.png';
import './Campaign.css';
import TextFieldExampleSimple from './Form';
import RaisedButtonExampleComplex from './Button';

import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';


class Campaign extends Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user
        return (
            <main className="wrap">
                <section className="camp-container">
                    <MobileNav />
                    <div className="form-container">
                        <div className="campaign-text">#loveanyways</div>
                        <img className="profile-cover" alt="Profile Banner" src={Banner} />
                        <img className="profile-headshot" alt="Login to see your social media profile pic and name" src={user.profile_img} />
                        <div className="display-name">{user ? user.username : null}</div>
                        <TextFieldExampleSimple />
                        <div className="img-button">
                            <RaisedButtonExampleComplex />
                        </div>
                        <input className="submit_btn" type="submit" name="submit" value="CREATE" />
                    </div>
                </section>
            </main>
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
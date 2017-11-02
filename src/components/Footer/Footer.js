import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import download from './img/Appstore.png';
import login from './img/Login.png';
import arrow from '../Landing/img/Arrow.png';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a href='http://iTunes.com'>
                    <img src={download} alt="iTunes Download" width="175px"></img>
                </a>
                <a href="#second">
                    <div className="arrow">
                        <img src={arrow} alt="next" width="75px"></img>
                    </div></a>

                <a href={process.env.REACT_APP_LOGIN}>
                    <div className="login">
                        <img src={login} alt="PLC login" width="175px"></img>
                    </div></a>
            </footer>
        );
    }
}
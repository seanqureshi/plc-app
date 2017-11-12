import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CampaignCard extends Component {
    render() {
        return (
            <div className="camp-card">
                <img src={ this.props.img } alt="Campaign Idea" width="375px" height="436px"/>
                <Link to ={ this.props.path }>
                    <center><div className ="explore_btn">EXPLORE CAMPAIGN</div></center>
                </Link>
            </div>
        )
    }
}
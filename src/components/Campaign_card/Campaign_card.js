import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CampaignCard extends Component {
    render() {
        return (
            <div>
                <img src={ this.props.img } alt="Campaign Idea" width="100%" />
                <Link to ={ this.props.path }>
                    <center><div className ="explore_btn">EXPLORE CAMPAIGN</div></center>
                </Link>
            </div>
        )
    }
}
import React, { Component } from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import Cover from './img/Img-cover.png';
import Banner from './img/loveanyways.png';
import Man from '../Idea4/img/Man2.png';
import Insert from './img/insert-img.png';
import './Campaign.css';


export default class Donate extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            username: '',
            profile_img: '',

            camp_name: '',
            desired_amt: '',
            overview: '',
            cover_img: ''
        }
    }

    // componentDidMount(){
    //     axios.get('/api/campaign')
    // }

    render() {
        return (
            <section>
                <header><MobileNav /></header>
                <img className="profile-cover" src={Banner} />
                <img className="profile-headshot" src={Man} />
                <div className="display-name">SEAN QURESHI</div>
                <form className="form-box">
                    <div className="input_name">Campaign Name</div>
                    <textarea className="input_campaign" type="text" placeholder="Ex. Kinzie's 5th Birthday! Giving to Those Without." />
                    <div className="input_name">Fundraiser Amount</div>
                    <input className="input_field" type="text" placeholder="Ex. $500" />
                    <div className="input_name">Upload Cover Image</div>
                    <img className="insert-image" src={Insert}/>
                    <div className="input_name">Summary of Campaign</div>
                    <textarea className="input_overview" type="text" placeholder="Share your story and how it intersected with Preemptive Love Coalition. Share how your friends can get involved in saving and rebuilding lives!" />
                    <center><input className="submit_btn" type="submit" name="submit" value="CREATE" /></center>
                </form>
            </section>
        )
    }
}

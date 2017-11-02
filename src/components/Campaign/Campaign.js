import React, {Component} from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import Profile from './img/Profile-upload.png';
import Cover from './img/Img-cover.png';

import './Campaign.css';


export default class Donate extends Component {
    render () {
        return (
            <section>
                <header><MobileNav /></header>
                <form>
                    <div className="input_name">First and Last Name</div>
                    <input className="input_field" type="text" placeholder="Ex. James Smith" />
                    <div className="input_name">Email</div>
                    <input className="input_field" type="text" placeholder="Ex. james.smith@gmail.com" />
                    <div className="input_name">Campaign Name</div>
                    <input className="input_campaign" type="text" placeholder="Ex. Kinzie's 5th Birthday Giving to those Without" />
                    <div className="input_name">Fundraiser Amount</div>
                    <input className="input_field" type="text" placeholder="Ex. $500" />           
                    
                    <div className = "image_container">
                        <div className ="half">
                            <div className="input_name">Upload Profile Picture</div>
                            <input className="image_btn" type="image" width="80" height="80" alt="Upload Profile Pic" src= { Profile } />
                        </div>
                        <div className ="half">
                            <div className="input_name">Upload Cover Image</div>
                            <input className="image_btn" type="image" width="80" height="80" alt="Upload Cover Image" src= { Cover } />
                        </div>
                    </div>

                    <center><input className="submit_btn" type="submit" name="submit" value="CREATE" /></center>
                </form>
            </section>
        )
    }
}

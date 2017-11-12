import React, { Component } from 'react';
import Relief from '../Landing/img/Relief-icon.png';
import Empowerment from '../Landing/img/Heart-icon.png';
import Logo from '../Navbar/img/PLC-logo.png'
import AboutBanner from './img/About.png';
import Banner2 from './img/Banner2.png';
import Countries from './img/Countries.png';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import './About.css';


export default class About extends Component {
  render() {
    return (
      <main className="wrap">
        <center><section className="about-container">
          <MobileNav />
          <div className="about">
            <img className="about-banner" src={ AboutBanner } alt="About Us Banner" width="375px" />
            <img className="about-pic" src={ Banner2 } alt="You're Rebuilding Lives" width="375px" />



            <h1 className="title">WHAT WE DO</h1>
            <div className="box"></div>
            <div className="values-img">
              <img className="value-icons" src={Relief} alt="Relief Icon"  width="100px" />
              <h3 className="value-subtitle">Relief</h3>
            </div>
            <div className="values-img">
              <img className="value-icons" src={Empowerment} alt="Empowerment Icon" width="100px" />
              <h3 className="value-subtitle">Empowerment</h3>
            </div>
            <div className="para-wrap">
            <p className="paragraph-box">War-torn families shouldn’t have to brave bombs and bullets to reach the help they need. Their only option shouldn’t be the confines of a refugee camp, where their road to recovery will be even longer.</p>
            <p className="paragraph-box">We meet families on the frontlines of conflict, providing them lifesaving food, water, and medical care. We give them what they need to hold on and hold out.</p>
            <p className="paragraph-box">Refugees shouldn’t be forced to rely on handouts to survive. They have the skills and knowledge they need to rebuild their lives and provide for their families. They just need someone to stand with them as they rebuild.</p>
            <p className="paragraph-box">We create jobs for those victimized by ISIS. We provide small business grants, tools, and coaching so they can start again and so their families can flourish.</p>
            </div>

            <h1 className="title">WHERE WE SERVE</h1>
            <div className="box"></div>
            <img className="countries" src={ Countries } alt="Syria USA and Iraq Country Icons" width="375px" />
            <h1 className="title">CORE VALUES</h1>
            <div className="box"></div>
            <div className="para-container">
              <h3 className="para-header">LOVE ANYWAY.</h3>
              <p className="paragraph-box">Yes, we all have our own politics. Yes, we have our own religion. Love anyway. Step out across enemy lines and embrace conflict rather than run. Your love has the ability to transcend guilt, shame, and indifference. Wrap your arms around those you fear, and invite others to do the same.</p>
              <h3 className="para-header">SHOW UP.</h3>
              <p className="paragraph-box">Presence matters. Whether it’s in the middle of a conversation, conflict zone, or operating room, love shows up. Healing happens when we choose to bring our whole self into the conflict including our own fears, doubts, and biases (yes, we all have them). Ask questions, risk failure, be heard. Just don’t hide.</p>
              <h3 className="para-header">GET OUT OF THE WAY.</h3>
              <p className="paragraph-box">Peace, healing, and sustainable change only happen when we allow others to own their future. Getting out of the way means taking a step back after we show up so that others can stand on their own. Look past yourself. Step back and consider the bigger picture, and pass on the baton.</p>
            </div>

            <center><img src={Logo} alt="Preemptive Love Coalition"  width="200px" />
              <p className="sub_text">Preemptive Love Coalition is a trusted 501(c)(3) non-profit</p>
              <p className="sub_text">EIN no. 26-2450109</p>
              <p className="sub_text">© 2007 - 2017</p></center>
          </div>
        </section></center>
      </main>
    )
  }
}

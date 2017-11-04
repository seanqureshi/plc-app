import React, { Component } from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import './Donate.css';
import Kids from './img/donate.png';
import TextField from 'material-ui/TextField';

export default class Donate extends Component {

    constructor() {
        super();

        this.state = {
            amount: 0
        }
        this.buttonClick1 = this.buttonClick1.bind(this);
        this.buttonClick2 = this.buttonClick2.bind(this);
        this.buttonClick3 = this.buttonClick3.bind(this);
    }

    buttonClick1() {
        this.setState({
            amount: 2500
        })
    }

    buttonClick2(e) {
        this.setState({
            amount: 5000
        })
    }

    buttonClick3(e) {
        this.setState({
            amount: 10000
        })
    }

    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: this.state.amount }).then(response => {
            alert('Payment Processed!')
        })
    }

    render() {
        return (
            <main className="wrap">
                <section className="donate-container">
                    <MobileNav />
                    <div className="donate-textbox">Give war-torn families what they need to survive and rebuild—for today and for many, many tomorrows.</div>
                    <img className="donate-pic" src={Kids} alt="Refugee Children" />
                    <div className="donate-form">
                        <h3 className="suggested">Suggested Amount</h3>
                        <div className="donate-row">
                            <button className="donate-box" onClick={() => this.buttonClick1()}>$25</button>
                            <button className="donate-box" onClick={() => this.buttonClick2()}>$50</button>
                            <button className="donate-box" onClick={() => this.buttonClick3()}>$100</button>
                        </div>
                        <div className="form-UI">
                            <TextField
                                hintText="Ex. $500"
                                floatingLabelText="Other Amount"
                            /><br />
                            <TextField
                                hintText="Everyone deserves love. Feel free to encourage the campaign organizer here."
                                floatingLabelText="Add Comment (Optional)"
                                rows={3}
                                rowsMax={5}
                            /><br />
                        </div>
                        <StripeCheckout className="stripe-submit"
                            token={this.onToken}
                            stripeKey={'pk_test_yaniwfUg4A2s3HU5GhT3KVcm'}
                            amount={this.state.amount}
                            label={'Donate with Card'}
                            image="https://preemptivelove.gift/wp-content/uploads/2017/04/logo-sticky.png"
                        />
                    </div>
                </section >
            </main>
        );
    }
}


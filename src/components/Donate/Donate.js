import React, { Component } from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import './Donate.css';

// import Checkout from './CheckoutForm';


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
            <div className="donate-container">
                <MobileNav />
                <button className="donate-box" onClick={() => this.buttonClick1()}>$25</button>
                <button className="donate-box" onClick={() => this.buttonClick2()}>$50</button>
                <button className="donate-box" onClick={() => this.buttonClick3()}>$100</button>
                <StripeCheckout className="s2member-pro-stripe-submit"
                    token={this.onToken}
                    stripeKey={'pk_test_yaniwfUg4A2s3HU5GhT3KVcm'}
                    amount={this.state.amount}
                    label={'Donate with Card'}
                    image="https://preemptivelove.gift/wp-content/uploads/2017/04/logo-sticky.png"

                />
            </div >
        );
    }
}


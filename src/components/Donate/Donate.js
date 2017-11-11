import React, { Component } from 'react';
import MobileNav from '../Mobile_navbar/Mobile_navbar';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import './Donate.css';
import Kids from './img/donate.png';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';
import { withRouter } from 'react-router-dom'


class Donate extends Component {

    constructor() {
        super();

        this.state = {
            amount: 0
        }
        this.buttonClick1 = this.buttonClick1.bind(this);
        this.buttonClick2 = this.buttonClick2.bind(this);
        this.buttonClick3 = this.buttonClick3.bind(this);
        this.handleAmt = this.handleAmt.bind(this);
    }


    componentDidMount() {
        this.props.getUserInfo();
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

    handleAmt(e) {
        this.setState({
            amount: (e.target.value * 100),
        })
    }

    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: this.state.amount }, )
        axios.post('/api/donation', {
            donation_amt: this.refs.donate.getValue() || this.state.amount,
            comments: this.refs.message.getValue(),
            user_id: this.props.user.user_id,
            camp_id: `${this.props.match.params.id}`
        }).then(response => {
            // console.log(response)
            this.props.history.push(`/new/${response.data[0].camp_id}`)
          })
        }

    render() {
        // console.log(this.props)
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
                                ref="donate"
                                onChange={(e) => this.handleAmt(e)}
                                hintText="Ex. $500"
                                floatingLabelText="Other Amount"
                            /><br />
                            <TextField
                                ref="message"
                                hintText="Everyone deserves love. Feel free to encourage the campaign organizer here."
                                floatingLabelText="Add Comment (Optional)"
                                rows={3}
                                rowsMax={5}
                            /><br />
                        </div>
                        <StripeCheckout 
                            className="stripe-submit"
                            token={this.onToken}
                            stripeKey={'pk_test_yaniwfUg4A2s3HU5GhT3KVcm'}
                            amount={this.state.amount}
                            label={'Donate with Card'}
                            name="Preemptive Love Coalition"
                            description="Wage Peace and Save Lives Today!"
                            panelLabel="Donate"
                            image="https://preemptivelove.gift/wp-content/uploads/2017/04/logo-sticky.png"
                            >
                            <button className="btn-primary">DONATE</button>
                            </StripeCheckout>
                    </div>
                </section >
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(withRouter(Donate))
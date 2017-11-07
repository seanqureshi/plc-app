import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButtonExampleComplex from './Button';
import './Form.css';
import AddImg from './AddImg';

export default class TextFieldExampleSimple extends Component {

  handleSubmit(e) {
    axios.post('/api/campaign', {
      camp_name: e.target.value,
      desired_amt: e.target.value,
      overview: e.target.value,
      cover_img: e.target.value,
    })
  }
  render() {
    return (
      <div className="form-create">
        <center>
        <TextField
          hintText="Ex. Kinzie's 5th Birthday! Giving to Those Without."
          floatingLabelText="Campaign Name"
          rows={2}
          rowsMax={2}
        /><br />
        <TextField
          hintText="Ex. $500"
          floatingLabelText="Fundraiser Amount"
        /><br />
        <TextField
          hintText="Share your story and how it intersected with Preemptive Love Coalition. Share how your friends can get involved in saving and rebuilding lives!"
          floatingLabelText="Campaign Overview"
          multiLine={true}
          rows={4}
          rowsMax={20}
        /><br />
        </center>
        <div className="img-button">
          {/* <RaisedButtonExampleComplex /> */}
          < AddImg />
        </div>
        <div className="submit_btn"
          onSubmit={(e) => this.handleSubmit(e)}
          type="submit" name="submit" value="CREATE">CREATE</div>
      </div>
    )
  }
}

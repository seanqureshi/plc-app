import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';
import './Form.css';
// import AddImg from './AddImg';

export default class TextFieldExampleSimple extends Component {

  constructor() {
    super();

    this.state = {
        image: []
    }
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleDrop = files => {
  // Push all the axios request promise into a single array
  const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "yqygvg0o"); // Replace the preset name with your own
      formData.append("api_key", "571626964235977"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
          // const fileURL = response.data.secure_url
          this.setState({
              image: response.data.secure_url
          }) // You should store this URL for future references in your app
          console.log(response.data)
      })
  });

  // Once all the files are uploaded
  axios.all(uploaders).then(() => {
      alert('images added');
  });
}

  handleSubmit() {
    // console.log(this.name.input.value)
    axios.post('/api/campaign', {
      camp_name: this.refs.name.getValue(),
      desired_amt: this.refs.amount.getValue(),
      overview: this.refs.overview.getValue(),
      cover_img: this.state.image
    })
  }

  render() {
    return (
      <section>
        <div className="form-create">
          <TextField
            ref="name"
            hintText="Ex. Kinzie's 5th Birthday! Giving to Those Without."
            floatingLabelText="Campaign Name"
            rows={2}
            rowsMax={2}
          /><br />
          <TextField
            ref="amount"
            hintText="Ex. $500"
            floatingLabelText="Fundraiser Amount"
          /><br />
          <TextField
            ref="overview"
            hintText="Share your story and how it intersected with Preemptive Love Coalition. Share how your friends can get involved in saving and rebuilding lives!"
            floatingLabelText="Campaign Overview"
            multiLine={true}
            rows={4}
            rowsMax={20}
          /><br />
        </div>
        <div className="img-button">
          <button className="btn-dropimg">
            <Dropzone className='dropzone'
              onDrop={this.handleDrop}
              multiple
              accept="image/*" >
              <p> UPLOAD COVER IMAGE</p>
            </Dropzone>
          </button>
        </div>
        <div className="submit_btn"
          onClick={() => this.handleSubmit()}
          type="submit" name="submit" value="CREATE">CREATE</div>
      </section>
    )
  }
}

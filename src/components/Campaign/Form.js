import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div className="form-UI">
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
  </div>
);

export default TextFieldExampleSimple;

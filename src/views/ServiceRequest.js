import React, { Component } from 'react';
import { TextField, DatePicker, Checkbox } from 'material-ui';
import RaisedButton from '../components/MaterializeRaisedButton';

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

export default class ServiceRequest extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <dib className="col s12 flow-text">
            <h2>Please use this form to request services</h2>
          </dib>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField floatingLabelText="Floating label text" fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField floatingLabelText="Floating label text" fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField floatingLabelText="Floating label text" fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField floatingLabelText="Floating label text" fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="MultiLine and Floating label text"
              multiLine
              row={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <DatePicker hintText="Portrait Dialog" fullWidth />
          </div>
          <div className="col s12 m6">
            <DatePicker hintText="File Upload" fullWidth />
          </div>
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
          <div className="col s12">
            <RaisedButton label="Submit" primary />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
        </div>
      </div>
    );
  }
}

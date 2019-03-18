import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const labelStyle = {
  padding:'20px 0px',
  fontFamily:'Maven Pro, sans-serif',
  textAlign: 'center'
}
const progressStyle = {
  position: 'absolute',
  top: '120px',
  right: '100px',
  left: '100px',
  
}
export default class Progress extends Component {
  render() {
    
    return (
      <div>
        <ProgressBar className="progress" style={progressStyle} active now={(100/this.props.totalSteps)*this.props.currentStep}/>
        <div style={labelStyle}>Step {this.props.currentStep} of {this.props.totalSteps}</div>
      </div>
    );
  }
}


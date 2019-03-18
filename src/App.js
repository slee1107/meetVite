import React, { Component } from 'react';
import './App.css';
import Progress from './Components/Progress'

const logoStyle = {
  fontFamily:'Oleo Script Swash Caps',
  fontSize: 48,
  textAlign: 'center',
  padding:'30px 50px'
}

/* padding shorthand for 'top right bottom left' */
const rectangleOuterStyle = {
  position:'absolute',
  right:'100px',
  left:'100px',
  height:'800px',
  background:'#e9ecef',
  zIndex:'1'
}

const rectangleInnerStyle = {
  position:'absolute',
  right:'100px',
  left:'100px',
  margin:'20px',
  height:'760px',
  background:'#007bff',
  zIndex:'2',
}

// Need to figure out which component is going to change the progress bar step
// Change progress bar to red '#FF342A'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div>
         <div style={logoStyle}>MeetVite</div>
         <Progress totalSteps={4} currentStep={this.state.step}/>
         <div style={rectangleOuterStyle} className="rounded progress"></div>
         <div style={rectangleInnerStyle} className="rounded progress">
         </div>
      </div>
    );
  }
}

export default App;

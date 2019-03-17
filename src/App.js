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
const rectangleBackStyle = {
  position:'absolute',
  right:'100px',
  left:'100px',
  height:'800px',
  background:'#e9ecef',
  zIndex:'1'
}

const rectangleFrontStyle = {
  position:'absolute',
  right:'100px',
  left:'100px',
  margin:'20px',
  height:'760px',
  background:'#007bff',
  zIndex:'2',
}

class App extends Component {
  render() {
    return (
      <div>
         <div style={logoStyle}>MeetVite</div>
         <Progress totalSteps={4} currentStep={2}/>
         <div style={rectangleBackStyle} className="rounded progress"></div>
         <div style={rectangleFrontStyle} className="rounded progress"></div>
      </div>
     
    );
  }
}

export default App;

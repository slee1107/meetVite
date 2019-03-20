import * as React from 'react';
import './App.css';
import Progress from './Components/Progress'
import Step1 from './Components/Step1'

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

const nextStyle = {
  position:'absolute',
  bottom: '5px',
  right: '5px'
}

const backStyle = {
  position:'absolute',
  bottom: '5px',
  left: '5px'
}

// Need to figure out which component is going to change the progress bar step
// Change progress bar to red '#FF342A'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step:1, date: new Date()};
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  
  handleNext() {
    this.setState((prevState) => {return {step: prevState.step + 1}});
  }
  
  handlePrev() {
    this.setState({step: this.state.step - 1});
  }

  render() {
    const handleStep = (self) => (step) => {
      self.setState({step: step});
    }
    const handleDateChange = (self) => (date) => {
      self.setState({date:date});
    }

    const stepComponent = () => {
      switch(this.state.step) {
        case 1:
          return <Step1 handleStep={handleStep(this)} handleDate={handleDateChange(this)} initDate={this.state.date} />
        case 2:
          return <Step2 handleStep={handleStep(this)}/>
        default:
          console.log(this.state.step)
          return <p>No Step</p>
      }
    }
      
    return (
      <div>
         <div style={logoStyle}>MeetVite</div>
         <Progress totalSteps={4} currentStep={this.state.step}/>
         <div style={rectangleOuterStyle} className="rounded progress"></div>
         <div style={rectangleInnerStyle} className="rounded progress">
            {stepComponent()}
            <button type="button" style={nextStyle} onClick={this.handleNext}>Next</button>
            <button type="button" style={backStyle} onClick={this.handlePrev}>Back</button>
         </div>
         
      </div>
    );
  }
}

export default App;

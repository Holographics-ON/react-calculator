import React, { Component } from 'react';
import FunctionPad from './CalculatorComps/FunctionPad';
import Keypad from './CalculatorComps/Keypad';
import OutputDisplay from './CalculatorComps/OutputDisplay';


class AppCalculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        display: ''
      };
  }

  
  // state = {
  //   input: []

  // } 

   updateInputValue(evt) {
    const val = evt.target.value;
    // ...       
    this.setState({
      inputValue: val
    });
  }

  // onclick function
    onInput = (e) => {
        const input = e.target.value;
       
        this.setState({ display: `${this.state.display}${(input)}`})
        console.log(input)
    }

    onInputOperator = (e) => {
        const operator = e.target.textContent;
        this.setState({ display: `${this.state.display} ${(operator)} `})
        console.log(operator)
 
    }


    // this.setStates 
    onCalculate = () =>{
        const output = this.state.display.replace(/\s+/g, '')
        this.setState( {display: eval(output)  })
    
      }

    // this.delete
    onDelete = () =>{
        this.setState( {display: ''  })
      }

  render() {

    return (
    <div className="AppCalculator">
        <OutputDisplay state= { this.state.display }/>
        <Keypad onInput= { this.onInput }/>
        <FunctionPad onInput= { this.onInputOperator } onCalculate= { this.onCalculate } onDelete= { this.onDelete}/>
    </div>
    );
  }
}

export default AppCalculator;
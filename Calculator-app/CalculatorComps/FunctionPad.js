import React, { Component } from 'react';
import Controls from './Controls';
import Operators from './Operators';


class FunctionPad extends Component {


  render() {

    const { onInput, onCalculate, onDelete } = this.props; 

    const operatorInputs = ['+', '-', '*', '/']
    const operatorButtons = []
    const controlInputs = ['=', 'DELETE']
    const controlButtons = []

    for ( let i = 0; i < operatorInputs.length; i++) {

      operatorButtons.push( <Operators onClick={ onInput } key= {i} operator= {operatorInputs[i]} /> ) 
    }
    
    

    for ( let i = 0; i < controlInputs.length; i++) {
        if(i === 0){
        controlButtons.push( <Controls  onClick= { onCalculate } key= {i} controls= {controlInputs[i]} /> )  //onClick={ onInput }
        } else {
        controlButtons.push( <Controls  onClick= { onDelete } key= {i} controls= {controlInputs[i]} /> )    
        }

    }

    // = - When pressed - Evaluates the string removes all spaceing
    // Delete - When pressed - Clears display

    return (
    <div>
        {operatorButtons}
        {controlButtons} 
    </div>
    );
  }
}

export default FunctionPad;
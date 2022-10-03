import React, { Component } from 'react';
import NumButtons from './NumButtons';

class Keypad extends Component {
  
  render() {
    const { onInput } = this.props; 

    const numInputs = [];
    for ( let i = 0; i <= 9; i++) {
      console.log(i);
      numInputs.push( <NumButtons onClick={ onInput } key= {i} keys= {i} /> ) 
    }
    
    

    return (
      numInputs 
    );
  }
}

export default Keypad;
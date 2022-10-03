import React, { Component } from 'react';

class OutputDisplay extends Component {


  render() {
    return (
    <div>
       <h1>{ this.props.state } </h1>  {/* eval function convers back into normal JS */}
      
    </div>
    );
  }
}

export default OutputDisplay;
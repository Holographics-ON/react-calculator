import React, { Component } from 'react';

class Controls extends Component {


  render() {
    return (
    <div>
        <button onClick={ this.props.onClick }> 
            {this.props.controls}
        </button>
    </div>
    );
  }
}

export default Controls;
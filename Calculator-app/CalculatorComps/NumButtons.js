import React, { Component } from 'react';

class NumButtons extends Component {


  render() {
    return (
    <div>

        <button onClick={ this.props.onClick } value={this.props.keys}> 
            {this.props.keys}
        </button>
    </div>
    );
  }
}

export default NumButtons;
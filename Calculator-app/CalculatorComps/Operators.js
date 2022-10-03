import React, { Component } from 'react';


class Operators extends Component {


  render() {


    return (
    <div>
        <button onClick={ this.props.onClick }>
            {this.props.operator}
        </button>
    </div>
    );
  }
}

export default Operators;
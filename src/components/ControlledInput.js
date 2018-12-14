import React, { Component } from 'react';

class ControlledInput extends Component {

  state ={
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
// the value is for setting the state to equal what is in the states value. onChange is listening for any changes made to the form and sets the state with a function
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }

}

export default ControlledInput;

// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component {
  state = {value: ''}

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.sendFormDataSomeWhere(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
      );
  }


}

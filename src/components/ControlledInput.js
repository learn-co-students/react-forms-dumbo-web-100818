// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {

  state = {
    firstName: "John",
    lastName: "Smith"
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render() {
    return (
      <div>
      <h1>{this.state.firstName + " " + this.state.lastName}</h1>
      <form>
      <input type="text" name="firstName" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
      <input type="text" name="lastName" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
      </div>
    )
  }
}

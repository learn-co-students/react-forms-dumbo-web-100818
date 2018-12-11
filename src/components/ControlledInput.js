// Code ControlledInput Component Here
import React, {Component} from 'react'

class ControlledInput extends Component{

  state = {
    firstName: '',
    lastName: ''
  }

  updateFirstName = event =>{
    this.setState = {
      [this.state.name] : event.target.value
    }
  }

  handleClickEvent = event =>{
    event.preventDefault()
    debugger
  }




  render(){
    return(
      <form onSubmit={event =>{this.handleClickEvent(event)}}>
        <input type="text" name="firstName" onChange={this.updateFirstName} value={this.state.value} data-id={4}></input>
        <input type="text" name="lastName" onChange={this.updateLastName} value={this.state.value}></input>
        <input type="submit"/>
      </form>
    )
  }



}

export default ControlledInput

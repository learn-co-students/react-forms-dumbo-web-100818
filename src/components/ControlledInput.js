// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(e.target.name + e.target.value)
  }

  render() {
    return(
      <form>
          First Name <input type= 'text' name= "firstName" value= {this.state.firstName} onChange= {this.handleChange} />
          <br/>
          Last Name <input type= 'text' name= "lastName" value= {this.state.lastName} onChange= {this.handleChange}/>
      </form>
    )
  }


}

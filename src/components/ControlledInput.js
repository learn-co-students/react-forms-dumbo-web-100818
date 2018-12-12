// Code ControlledInput Component Here
import React from 'react'


  class ControlledInput extends React.Component{

      state= {
        firstName :"",
        lastName :""
      }

      handleFirstChangeEvent = (event)=>{
        console.log(this.state.firstName)
        this.setState({
          firstName: event.target.value
        })
      }

      handleLastChangeEvent = (event)=>{
        console.log(this.state.lastName)
        this.setState({
          lastName: event.target.value
        })
      }

    render(){

      return(
        <div>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <form>
      <input type= "text" id= "firstName" onChange= {this.handleFirstChangeEvent} value={this.state.firstName}/>
      <input type= "text" id= "lastName" onChange= {this.handleLastChangeEvent} value={this.state.lastName}/>
      </form>
      </div>
    )
    }
  }

  export default ControlledInput

import React, { Component } from 'react'

export default class ControlledInput extends Component {
	state = {
		firstName: 'John',
		lastName: 'Henry'
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})

	}

	handleSubmit = event => {
		event.preventDefault()
		const firstName = event.target.children[0].value
		const lastName = event.target.children[1].value
		console.log([firstName, lastName])
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
				<input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
				<button type="submit" />
			</form>
		)
	}
}
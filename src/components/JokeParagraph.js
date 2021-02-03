import React, { Component } from 'react'

class JokeParagraph extends Component {

	render() {
		return (
			<div>
				<h5>Generated {this.props.category} joke:</h5>
				<p id="jokeParagraph">{this.props.jokeData}</p>
			</div>
		)
}

}

export default JokeParagraph
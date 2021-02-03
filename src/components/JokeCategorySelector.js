import React, { Component } from 'react';

class JokeCategorySelector extends Component {
	constructor() {
		super();
		this.state = {
			categories: [
			],
			selectedCategory: ''
		};
	}

	async fecthData () {
		let initialCategories = [
			"random"
		]
		let apiURL = "https://api.chucknorris.io/jokes/categories"
		// retrieve values from API
		let response = await fetch(apiURL)
		initialCategories = await response.json()
		// add 'random' at start of array as default option
		initialCategories.unshift("random")
		this.setState({
			categories: initialCategories
		})
	}

	// Once component has been mounted, fetch API and fill categories property
	async componentDidMount () {
		await this.fecthData()
	}

	render () {
		// get categories from state
		let categories = this.state.categories
		// for each category create a html 'option' element
		let optionItems = categories.map(category => {
			return <option key={category}>{category}</option>
		})
			return (
				<select onChange={event => this.props.onChange(event.target.value)}  className="form-select" aria-label="Default select example">
					{/* option html elements */}
				{optionItems}
			</select>
		)
	}
}

export default JokeCategorySelector
import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		return (
			<form className="searchbar">
				<h4> I'm looking for...</h4>
				<input type="text" onChange={this.handleChange}/>
			</form>
		);
	}
	handleChange(event) {
		const value = event.target.value;
		this.props.updateSearchTerm(value);
	}
}

export default Search;
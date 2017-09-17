import React from 'react';

class Emoji extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.symbol} {this.props.title} </p>
			</div>
		);
	}
}

export default Emoji;

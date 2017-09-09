import React from 'react';
import Emoji from './Emoji';

class List extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.emojis.map((emoji, i) => {
						return (
							<Emoji
							key={i}
							title={emoji.title}
							symbol={emoji.symbol}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default List;
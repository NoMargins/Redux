import React from 'react';
import { ThemeContext } from './theme-context.js';

class ThemedButton extends React.Component {
	render() {
		return (
			<button
				className='btn'
				{...this.props}
				style={{
					backgroundColor: this.context.backgroundColor,
					color: this.context.fontColor,
				}}
			></button>
		);
	}
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;

import React from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './theme-context';

class App extends React.Component {
	state = {
		theme: themes.light,
	};

	handleClick = () => {
		const newStyle =
			this.state.theme === themes.dark ? themes.light : themes.dark;
		this.setState({
			theme: newStyle,
		});
	};

	render() {
		return (
			<div>
				<ThemeContext.Provider value={this.state.theme}>
					<ThemedButton style={this.state.style} onClick={this.handleClick}>
						Dynamic Theme
					</ThemedButton>
				</ThemeContext.Provider>
				<ThemedButton
					name='Default Theme'
					style={this.state.style}
					onClick={this.handleClick}
				>
					Default Theme
				</ThemedButton>
			</div>
		);
	}
}

export default App;
